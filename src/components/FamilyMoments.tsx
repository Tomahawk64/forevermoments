'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import PremiumButton from './ui/PremiumButton'

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
  { id: 14, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img21.jpg', title: 'Joyful Day', location: 'Jaipur' },
  { id: 15, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img22.jpg', title: 'Beautiful Memories', location: 'Udaipur' },
  { id: 16, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img23.jpg', title: 'Family Fun', location: 'Goa' },
  { id: 17, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img24.jpg', title: 'Happy Family', location: 'Mumbai' },
  { id: 18, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img25.jpg', title: 'Special Moments', location: 'Delhi' },
  { id: 19, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img26.jpg', title: 'Time Together', location: 'Bangalore' },
  { id: 20, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img27.jpg', title: 'Cherished Times', location: 'Hyderabad' },
  { id: 21, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img28.jpg', title: 'Family Unity', location: 'Chennai' },
  { id: 22, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img29.jpg', title: 'Love Forever', location: 'Kolkata' },
  { id: 23, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img30.jpg', title: 'Golden Moments', location: 'Pune' },
  { id: 24, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img31.jpg', title: 'Eternal Bonds', location: 'Ahmedabad' },
]

export default function FamilyMoments() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const displayImages = showAllImages ? familyImages : familyImages.slice(0, 8)

  return (
    <section id="family" className="section-padding bg-[#C9AAFA] relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#A855F7]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#B07CF0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-[#5B21B6] tracking-[0.3em] text-sm uppercase font-semibold mb-6">Between The Ceremonies</p>
          <SplitText
            text="Family/Birthdays"
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
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group cursor-pointer perspective-1000"
              onClick={() => { setLightboxIndex(index); setLightboxOpen(true) }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ perspective: '1000px' }}
            >
              <GlowCard className="p-0 overflow-hidden rounded-luxury hover:shadow-2xl hover:shadow-[#B07CF0]/20 transition-all duration-700">
                <div className="relative aspect-square overflow-hidden bg-surfaceLight">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={75}
                      priority={index < 4}
                    />
                  </motion.div>
                  
                  {/* Luxury Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#130A1F]/90 via-[#130A1F]/40 to-transparent opacity-0"
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Light Sweep Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
                    initial={{ x: '-100%' }}
                    animate={{ 
                      x: hoveredIndex === index ? '100%' : '-100%',
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  
                  {/* Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-luxury border-2 border-[#A855F7]/0"
                    animate={{ borderColor: hoveredIndex === index ? 'rgba(176, 124, 240, 0.4)' : 'rgba(176, 124, 240, 0)' }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Floating Particles */}
                  <motion.div 
                    className="absolute inset-0 pointer-events-none"
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/60 rounded-full"
                        animate={{
                          scale: hoveredIndex === index ? [0, 1, 0] : 0,
                          opacity: hoveredIndex === index ? [0, 0.8, 0] : 0,
                          x: hoveredIndex === index ? [0, Math.random() * 40 - 20] : 0,
                          y: hoveredIndex === index ? [0, -Math.random() * 30 - 10] : 0
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: hoveredIndex === index ? Infinity : 0,
                          repeatDelay: 0.5
                        }}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`
                        }}
                      />
                    ))}
                  </motion.div>
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
            className="text-center mt-8"
          >
            <PremiumButton
              onClick={() => setShowAllImages(!showAllImages)}
              variant="outline"
              size="md"
            >
              {showAllImages ? 'Show Less' : 'View All'}
            </PremiumButton>
          </motion.div>
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={displayImages.map(img => ({ src: img.src }))}
        index={lightboxIndex}
        carousel={{ preload: 3 }}
      />
    </section>
  )
}




