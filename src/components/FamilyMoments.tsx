'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const familyImages = [
  { id: 1, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img1.jpg', title: 'Joyful Reunion', location: 'Delhi' },
  { id: 2, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img2.jpg', title: 'Family Bond', location: 'Mumbai' },
  { id: 3, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img3.jpg', title: 'Celebration Time', location: 'Jaipur' },
  { id: 4, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img10.jpg', title: 'Together Forever', location: 'Udaipur' },
  { id: 5, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img11.jpg', title: 'Happy Moments', location: 'Goa' },
  { id: 6, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img12.jpg', title: 'Love & Laughter', location: 'Bangalore' },
  { id: 7, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img13.jpg', title: 'Precious Times', location: 'Chennai' },
  { id: 8, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img14.jpg', title: 'Family Pride', location: 'Hyderabad' },
  { id: 9, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img15.jpg', title: 'Generations', location: 'Kolkata' },
  { id: 10, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img16.jpg', title: 'Sacred Bonds', location: 'Varanasi' },
  { id: 11, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img17.jpg', title: 'Warm Embrace', location: 'Pune' },
  { id: 12, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img18.jpg', title: 'Celebration', location: 'Ahmedabad' },
  { id: 13, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img19.jpg', title: 'Togetherness', location: 'Lucknow' },
  { id: 14, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img20.jpg', title: 'Family Love', location: 'Chandigarh' },
  { id: 15, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img21.jpg', title: 'Joyful Day', location: 'Jaipur' },
  { id: 16, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img22.jpg', title: 'Beautiful Memories', location: 'Udaipur' },
  { id: 17, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img23.jpg', title: 'Family Fun', location: 'Goa' },
  { id: 18, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img24.jpg', title: 'Happy Family', location: 'Mumbai' },
  { id: 19, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img25.jpg', title: 'Special Moments', location: 'Delhi' },
  { id: 20, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img26.jpg', title: 'Time Together', location: 'Bangalore' },
  { id: 21, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img27.jpg', title: 'Cherished Times', location: 'Hyderabad' },
  { id: 22, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img28.jpg', title: 'Family Unity', location: 'Chennai' },
  { id: 23, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img29.jpg', title: 'Love Forever', location: 'Kolkata' },
  { id: 24, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img30.jpg', title: 'Golden Moments', location: 'Pune' },
  { id: 25, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img31.jpg', title: 'Eternal Bonds', location: 'Ahmedabad' },
]

export default function FamilyMoments() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)

  const displayImages = showAllImages ? familyImages : familyImages.slice(0, 8)

  return (
    <section id="family" className="section-padding bg-background relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primaryLight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">Between The Ceremonies</p>
          <SplitText
            text="Family Moments"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            The laughter between the ceremonies. The love that binds generations.
          </p>
        </motion.div>

        {/* Premium Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.03, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <GlowCard className="p-0 overflow-hidden rounded-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-square overflow-hidden bg-surfaceLight">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 ease-[0.25, 0.46, 0.45, 0.94] ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23F7F3FF%22 width=%22400%22 height=%22400%22/%3E%3Ctext fill=%22%236B4C7A%22 font-family=%22sans-serif%22 font-size=%2214%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage Loading...%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  
                  {/* Luxury Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-luxuryDark/80 via-luxuryDark/40 to-transparent transition-opacity duration-700 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-700 ease-[0.25, 0.46, 0.45, 0.94] ${
                    hoveredIndex === index ? 'translate-y-0' : 'translate-y-full'
                  }`}>
                    <div className="space-y-2">
                      <h3 className="font-heading text-base text-white font-light">{image.title}</h3>
                      <p className="text-white/70 text-xs tracking-wide">{image.location}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {familyImages.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAllImages(!showAllImages)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 border-2 border-primary/50 text-primary text-sm tracking-[0.25em] uppercase font-medium rounded-button hover:bg-primary hover:text-background hover:shadow-glow transition-all duration-400"
            >
              {showAllImages ? 'Show Less' : `View All (${familyImages.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
