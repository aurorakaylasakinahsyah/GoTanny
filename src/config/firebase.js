import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'

// Firebase configuration for GO TANY
const firebaseConfig = {
  apiKey: "AIzaSyCrZQH1wtpPzlhT2iw8d1l8vmrxfs1T7BA",
  authDomain: "gotanny-ac327.firebaseapp.com",
  projectId: "gotanny-ac327",
  storageBucket: "gotanny-ac327.firebasestorage.app",
  messagingSenderId: "1035713309756",
  appId: "1:1035713309756:web:fc4c8d40619560d90d6739",
  measurementId: "G-JPJ0T4WHW1"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics (only in browser environment)
let analytics = null
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app)
}

// Initialize services
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)
export { analytics }

export default app
