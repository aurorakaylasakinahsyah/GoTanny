import React, { createContext, useContext, useState, useEffect } from 'react'
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, googleProvider, db } from '../config/firebase'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      if (user) {
        // Fetch additional user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid))
        if (userDoc.exists()) {
          setUserData(userDoc.data())
        }
      } else {
        setUserData(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  // Sign up with email and password
  const signup = async (email, password, fullName, phone) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      
      // Update profile with display name
      await updateProfile(result.user, { displayName: fullName })
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        email: email,
        fullName: fullName,
        phone: phone || '',
        photoURL: result.user.photoURL || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        scanHistory: [],
        savedDiseases: []
      })

      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: getErrorMessage(error.code) }
    }
  }

  // Sign in with email and password
  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: getErrorMessage(error.code) }
    }
  }

  // Sign in with Google
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      
      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', result.user.uid))
      
      if (!userDoc.exists()) {
        // Create new user document
        await setDoc(doc(db, 'users', result.user.uid), {
          uid: result.user.uid,
          email: result.user.email,
          fullName: result.user.displayName || '',
          phone: result.user.phoneNumber || '',
          photoURL: result.user.photoURL || '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          scanHistory: [],
          savedDiseases: []
        })
      }

      return { success: true, user: result.user }
    } catch (error) {
      return { success: false, error: getErrorMessage(error.code) }
    }
  }

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Helper function to get user-friendly error messages
  const getErrorMessage = (code) => {
    const errorMessages = {
      'auth/email-already-in-use': 'Email sudah terdaftar. Silakan gunakan email lain.',
      'auth/invalid-email': 'Format email tidak valid.',
      'auth/operation-not-allowed': 'Operasi tidak diizinkan.',
      'auth/weak-password': 'Password terlalu lemah. Minimal 6 karakter.',
      'auth/user-disabled': 'Akun ini telah dinonaktifkan.',
      'auth/user-not-found': 'Email tidak terdaftar.',
      'auth/wrong-password': 'Password salah.',
      'auth/invalid-credential': 'Email atau password salah.',
      'auth/too-many-requests': 'Terlalu banyak percobaan. Coba lagi nanti.',
      'auth/popup-closed-by-user': 'Login dibatalkan.',
      'auth/network-request-failed': 'Koneksi jaringan bermasalah.'
    }
    return errorMessages[code] || 'Terjadi kesalahan. Silakan coba lagi.'
  }

  const value = {
    user,
    currentUser: user,
    userData,
    loading,
    signup,
    login,
    loginWithGoogle,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
