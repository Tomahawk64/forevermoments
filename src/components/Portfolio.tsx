'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GlowCard from './ui/GlowCard'
import ImageReveal from './ui/ImageReveal'
import SplitText from './ui/SplitText'
import PremiumButton from './ui/PremiumButton'

const portfolioImages = [
  { id: 4, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed4.jpeg', category: 'Wedding', title: 'Sacred Vows', location: 'Varanasi' },
  { id: 32, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1495.JPG.jpeg', category: 'Wedding', title: 'Wedding Joy', location: 'India' },
  { id: 1, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed1.jpeg', category: 'Wedding', title: 'Royal Palace Wedding', location: 'Udaipur' },
  { id: 29, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1176.JPG.jpeg', category: 'Wedding', title: 'Sacred Union', location: 'India' },
  { id: 6, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed6.jpg', category: 'Wedding', title: 'Bride\'s Glow', location: 'Jaipur' },
  { id: 34, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1520.JPG.jpeg', category: 'Wedding', title: 'Cherished Moments', location: 'India' },
  { id: 2, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed2.jpg', category: 'Wedding', title: 'Golden Hour Romance', location: 'Jaipur' },
  { id: 31, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1195.JPG.jpeg', category: 'Wedding', title: 'Together Forever', location: 'India' },
  { id: 5, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed5.jpeg', category: 'Wedding', title: 'Royal Entrance', location: 'Jodhpur' },
  { id: 28, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1166.JPG.jpeg', category: 'Wedding', title: 'Wedding Bliss', location: 'India' },
  { id: 35, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1521.JPG.jpeg', category: 'Wedding', title: 'Pure Love', location: 'India' },
  { id: 3, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed3.jpg', category: 'Wedding', title: 'Traditional Ceremony', location: 'Delhi' },
  { id: 33, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1496.JPG.jpeg', category: 'Wedding', title: 'Celebration', location: 'India' },
  { id: 30, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1194.JPG.jpeg', category: 'Wedding', title: 'Eternal Vows', location: 'India' },
  { id: 36, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1524.JPG.jpeg', category: 'Wedding', title: 'Wedding Story', location: 'India' },
  { id: 7, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/engage1.jpeg', category: 'Engagement', title: 'Beach Proposal', location: 'Goa' },
  { id: 8, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/engage2.jpeg', category: 'Engagement', title: 'Romantic Sunset', location: 'Mumbai' },
  { id: 9, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/engage3.jpeg', category: 'Engagement', title: 'Garden Proposal', location: 'Bangalore' },
  { id: 10, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/engage4.jpg', category: 'Engagement', title: 'Mountain Romance', location: 'Manali' },
  { id: 11, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/engage5.jpg', category: 'Engagement', title: 'Desert Love', location: 'Jaisalmer' },
  { id: 12, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/engage6.jpg', category: 'Engagement', title: 'City Lights', location: 'Delhi' },
  { id: 13, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre1.jpeg', category: 'Pre Wedding', title: 'Golden Hour', location: 'Udaipur' },
  { id: 14, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre2.jpeg', category: 'Pre Wedding', title: 'Romantic Sunset', location: 'Jaipur' },
  { id: 15, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre3.jpeg', category: 'Pre Wedding', title: 'Forest Dreams', location: 'Coorg' },
  { id: 16, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre4.jpeg', category: 'Pre Wedding', title: 'Lake Serenity', location: 'Udaipur' },
  { id: 17, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre5.jpeg', category: 'Pre Wedding', title: 'Mountain Love', location: 'Manali' },
  { id: 18, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre6.jpeg', category: 'Pre Wedding', title: 'Desert Romance', location: 'Jaisalmer' },
  { id: 37, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre12.jpg', category: 'Pre Wedding', title: 'Royal Affair', location: 'Udaipur' },
  { id: 38, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre13.jpg', category: 'Pre Wedding', title: 'Timeless Love', location: 'Kerala' },
  { id: 19, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/DOC-20241113-WA0014.jpg.jpeg', category: 'Films/Aerial Shoots', title: 'Aerial Wedding', location: 'Udaipur' },
  { id: 20, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/DSC_3930.jpg.jpeg', category: 'Films/Aerial Shoots', title: 'Drone Coverage', location: 'Jaipur' },
  { id: 21, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/DSC_6533.JPG.jpeg', category: 'Films/Aerial Shoots', title: 'Cinematic Shot', location: 'Delhi' },
  { id: 22, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/DSC_6625.JPG.jpeg', category: 'Films/Aerial Shoots', title: 'Aerial View', location: 'Goa' },
  { id: 23, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/DSC_6657.JPG.jpeg', category: 'Films/Aerial Shoots', title: 'Wedding Film', location: 'Mumbai' },
  { id: 24, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/DSC_6937.jpg', category: 'Films/Aerial Shoots', title: 'Drone Cinematography', location: 'Bangalore' },
]

const categories = ['All', 'Wedding', 'Pre Wedding', 'Engagement', 'Films/Aerial Shoots']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [showAllImages, setShowAllImages] = useState(false)
  const [brokenImages, setBrokenImages] = useState<Set<number>>(new Set())

  const filteredImages = selectedCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory)

  const validImages = filteredImages.filter(img => !brokenImages.has(img.id))
  const displayImages = showAllImages ? validImages : validImages.slice(0, 8)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="portfolio" className="section-padding bg-[#C9AAFA] relative overflow-hidden">
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
          <p className="text-[#5B21B6] tracking-[0.3em] text-sm uppercase font-semibold mb-6">Our Work</p>
          <SplitText
            text="Portfolio"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            Every glance. Every laugh. Every tear. Captured forever.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className={`px-7 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-400 rounded-full font-medium ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#BA88F8] via-[#A855F7] to-[#8225D4] text-white shadow-[0_6px_25px_rgba(168,85,247,0.4)]'
                  : 'text-[#E5D8FF] hover:text-[#F0E8FF] hover:bg-[#FFFFFF] border border-[#E2D0F8] bg-[#FFFFFF]/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group cursor-pointer perspective-1000"
                onClick={() => openLightbox(index)}
                style={{ perspective: '1000px' }}
              >
                <GlowCard className="p-0 overflow-hidden rounded-luxury hover:shadow-2xl hover:shadow-[#B07CF0]/25 transition-all duration-700">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surfaceLight">
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={75}
                        priority={index < 3}
                        onError={() => setBrokenImages(prev => new Set(prev).add(image.id))}
                      />
                    </motion.div>
                    
                    {/* Luxury Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-[#130A1F]/70 via-transparent to-transparent opacity-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Floating Particles on Hover */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/60 rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                            x: [0, Math.random() * 40 - 20],
                            y: [0, -Math.random() * 30 - 10]
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }}
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Premium Zoom Indicator */}
                    <motion.div
                      className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-glass flex items-center justify-center"
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </motion.div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        {filteredImages.length > 8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
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

        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={displayImages.map(img => ({ src: img.src }))}
          index={lightboxIndex}
          carousel={{ preload: 3 }}
        />
      </div>
    </section>
  )
}





