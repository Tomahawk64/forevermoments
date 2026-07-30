'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GlowCard from './ui/GlowCard'
import ImageReveal from './ui/ImageReveal'
import SplitText from './ui/SplitText'

const portfolioImages = [
  { id: 1, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed1.jpeg', category: 'Wedding', title: 'Royal Palace Wedding', location: 'Udaipur' },
  { id: 2, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed2.jpg', category: 'Wedding', title: 'Golden Hour Romance', location: 'Jaipur' },
  { id: 3, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed3.jpg', category: 'Wedding', title: 'Traditional Ceremony', location: 'Delhi' },
  { id: 4, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed4.jpeg', category: 'Wedding', title: 'Sacred Vows', location: 'Varanasi' },
  { id: 5, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed5.jpeg', category: 'Wedding', title: 'Royal Entrance', location: 'Jodhpur' },
  { id: 6, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed6.jpg', category: 'Wedding', title: 'Bride\'s Glow', location: 'Jaipur' },
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
]

const categories = ['All', 'Wedding', 'Pre Wedding', 'Engagement']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [showAllImages, setShowAllImages] = useState(false)

  const filteredImages = selectedCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory)

  const displayImages = showAllImages ? filteredImages : filteredImages.slice(0, 8)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="portfolio" className="section-padding bg-background relative overflow-hidden">
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
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">Our Work</p>
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
              className={`px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500 rounded-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-primaryDark text-background shadow-glow rounded-button'
                  : 'text-textLight hover:text-primary hover:bg-surface/30 rounded-button'
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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <GlowCard className="p-0 overflow-hidden rounded-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surfaceLight">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[0.25, 0.46, 0.45, 0.94]"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22%3E%3Crect fill=%22%23F7F3FF%22 width=%22400%22 height=%22500%22/%3E%3Ctext fill=%22%236B4C7A%22 font-family=%22sans-serif%22 font-size=%2214%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage Loading...%3C/text%3E%3C/svg%3E'
                      }}
                    />
                    
                    {/* Luxury Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxuryDark/80 via-luxuryDark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25, 0.46, 0.45, 0.94]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-2"
                      >
                        <p className="text-primaryLight text-xs tracking-[0.3em] uppercase font-medium">{image.category}</p>
                        <h3 className="font-heading text-xl text-white font-light">{image.title}</h3>
                        <p className="text-white/70 text-sm tracking-wide">{image.location}</p>
                      </motion.div>
                    </div>

                    {/* Zoom indicator */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
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
            <motion.button
              onClick={() => setShowAllImages(!showAllImages)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 border-2 border-primary/50 text-primary text-sm tracking-[0.25em] uppercase font-medium rounded-button hover:bg-primary hover:text-background hover:shadow-glow transition-all duration-400"
            >
              {showAllImages ? 'Show Less' : `View All (${filteredImages.length})`}
            </motion.button>
          </motion.div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={filteredImages.map(img => ({ src: img.src }))}
          index={lightboxIndex}
        />
      </div>
    </section>
  )
}
