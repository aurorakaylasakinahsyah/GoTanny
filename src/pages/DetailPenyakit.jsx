import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Header, Breadcrumb } from '../components'
import { getDiseaseById } from '../data/diseaseData'
import styles from './DetailPenyakit.module.css'

function DetailPenyakit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const disease = getDiseaseById(id)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Gallery images (using disease image + placeholders)
  const galleryImages = disease ? [
    disease.image,
    'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop'
  ] : []

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  if (!disease) {
    return (
      <div className={styles.page}>
        <Header />
        <main className={styles.mainContent}>
          <div className={styles.notFound}>
            <i className="fas fa-exclamation-circle"></i>
            <h2>Penyakit tidak ditemukan</h2>
            <p>Data yang Anda cari tidak tersedia</p>
            <button onClick={() => navigate('/database')} className={styles.backButton}>
              <i className="fas fa-arrow-left"></i>
              Kembali ke Database
            </button>
          </div>
        </main>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Database Penyakit', link: '/database' },
    { label: 'Hama & Penyakit', link: '/beranda' },
    { label: disease.title }
  ]

  return (
    <div className={styles.page}>
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <main className={styles.mainContent}>
        {/* Left Sidebar */}
        <aside className={styles.sidebar}>
          {/* Disease Header Card */}
          <div className={styles.diseaseHeader}>
            <h1 className={styles.diseaseTitle}>{disease.title}</h1>
            <p className={styles.diseaseScientific}>{disease.scientificName || 'Nama ilmiah belum tersedia'}</p>
            <span className={styles.diseaseTag}>{disease.type}</span>
          </div>

          {/* Scan Card */}
          <div className={styles.scanCard}>
            <h3 className={styles.scanCardTitle}>Identifikasi Tanaman Anda</h3>
            <div className={styles.scanSteps}>
              <div className={styles.scanStep}>
                <div className={styles.stepIcon}>
                  <i className="fas fa-camera"></i>
                </div>
                <div className={styles.stepArrow}><i className="fas fa-arrow-right"></i></div>
                <div className={styles.stepText}>Foto tanaman</div>
              </div>
              <div className={styles.scanStep}>
                <div className={styles.stepIcon}>
                  <i className="fas fa-search"></i>
                </div>
                <div className={styles.stepArrow}><i className="fas fa-arrow-right"></i></div>
                <div className={styles.stepText}>Analisis AI</div>
              </div>
              <div className={styles.scanStep}>
                <div className={styles.stepIcon}>
                  <i className="fas fa-prescription-bottle"></i>
                </div>
                <div className={styles.stepArrow}><i className="fas fa-arrow-right"></i></div>
                <div className={styles.stepText}>Solusi tepat</div>
              </div>
            </div>
            <button className={styles.scanButtonFull} onClick={() => navigate('/scan')}>
              <i className="fas fa-camera"></i>
              Mulai Scan Sekarang
            </button>
          </div>

          {/* Summary Card */}
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>
              <i className="fas fa-clipboard-list"></i>
              Ringkasan Cepat
            </h3>
            <ul className={styles.summaryList}>
              <li>
                <i className="fas fa-circle"></i>
                <span>Menyerang tanaman {disease.plant}</span>
              </li>
              <li>
                <i className="fas fa-circle"></i>
                <span>Jenis patogen: {disease.type}</span>
              </li>
              {disease.symptoms && disease.symptoms.slice(0, 2).map((symptom, index) => (
                <li key={index}>
                  <i className="fas fa-circle"></i>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Content */}
        <div className={styles.diseaseContent}>
          {/* Image Gallery */}
          <div className={styles.imageGallery}>
            <div className={styles.galleryContainer}>
              <img 
                src={galleryImages[currentImageIndex]} 
                alt={disease.title} 
                className={styles.galleryImage}
              />
              <div className={styles.galleryNav}>
                <button className={styles.galleryBtn} onClick={prevImage}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className={styles.galleryBtn} onClick={nextImage}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className={styles.diseaseBadge}>
                <i className="fas fa-exclamation-triangle"></i>
                {disease.plant}
              </div>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>
              <i className="fas fa-stethoscope"></i>
              Gejala Penyakit
            </h2>
            <div className={styles.infoContent}>
              <p>{disease.description}</p>
              <ul className={styles.infoList}>
                {disease.symptoms && disease.symptoms.map((symptom, index) => (
                  <li key={index}>
                    <i className="fas fa-leaf"></i>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatment Section */}
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>
              <i className="fas fa-seedling"></i>
              Pengendalian & Pengobatan
            </h2>
            <div className={styles.infoContent}>
              <p><strong>Pencegahan Terbaik:</strong></p>
              <ul className={styles.infoList}>
                {disease.prevention && disease.prevention.map((item, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {disease.treatment && (
                <>
                  <p style={{ marginTop: '1.5rem' }}><strong>Pengendalian Kimiawi:</strong></p>
                  <ul className={styles.infoList}>
                    {disease.treatment.map((item, index) => (
                      <li key={index}>
                        <i className="fas fa-flask"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className={styles.warningBox}>
                <div className={styles.warningBoxTitle}>
                  <i className="fas fa-info-circle"></i>
                  Catatan Penting
                </div>
                <div className={styles.warningBoxContent}>
                  Selalu baca dan ikuti petunjuk penggunaan pestisida dengan cermat. 
                  Gunakan alat pelindung diri saat aplikasi. Perhatikan masa tunggu 
                  panen sebelum memanen hasil untuk memastikan keamanan produk.
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>
              <i className="fas fa-book"></i>
              Informasi Tambahan
            </h2>
            <div className={styles.infoContent}>
              <p>
                {disease.title} disebabkan oleh {disease.type.toLowerCase() === 'jamur' ? 'jamur' : 
                 disease.type.toLowerCase() === 'bakteri' ? 'bakteri' : 
                 disease.type.toLowerCase() === 'virus' ? 'virus' : 'hama'} 
                {disease.scientificName ? ` (${disease.scientificName})` : ''}. 
                Penyakit/hama ini paling aktif pada kondisi cuaca lembab dengan suhu hangat.
              </p>
              <p>
                Pencegahan dan pengendalian dini sangat penting untuk meminimalkan kerugian. 
                Lakukan monitoring rutin pada tanaman {disease.plant} Anda dan segera ambil 
                tindakan jika ditemukan gejala awal.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DetailPenyakit
