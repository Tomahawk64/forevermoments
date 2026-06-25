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
  { id: 1, src: '/assets/6797344ddd248_2gx7ek35mmee1-jpeg__700.webp', category: 'Wedding', title: 'Royal Palace Wedding', location: 'Udaipur' },
  { id: 2, src: '/assets/67974a46729b5_wildlife-photography.webp', category: 'Pre Wedding', title: 'Golden Hour Romance', location: 'Jaipur' },
  { id: 3, src: '/assets/A-Different-Perspective-by-Bingqian-Gao-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', category: 'Destination', title: 'Udaipur Dreams', location: 'Lake Palace' },
  { id: 4, src: '/assets/After-The-Rain-by-Nikita-Chicherin-The-Nature-Photography-Contest-2025-Birds-Finalist.webp', category: 'Engagement', title: 'Beach Proposal', location: 'Goa' },
  { id: 5, src: '/assets/Amplified-Intimidation-by-Tom-Hendrickson-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', category: 'Wedding', title: 'Traditional Ceremony', location: 'Delhi' },
  { id: 6, src: '/assets/Bret-Saalwaechter_I-Just-Cant-Wait-To-Be-King.webp', category: 'Luxury Events', title: 'Grand Reception', location: 'Mumbai' },
  { id: 7, src: '/assets/Defiance-of-the-Small-by-Panagiotis-Xaxiris-The-Nature-Photography-Contest-2025-Birds-Finalist.webp', category: 'Couple Portraits', title: 'Intimate Moments', location: 'Bangalore' },
  { id: 8, src: '/assets/Landing-by-Simone-Bottini-The-Nature-Photography-Contest-2025-Night-World-Finalist.webp', category: 'Night Photography', title: 'Evening Celebration', location: 'Hyderabad' },
  { id: 9, src: '/assets/Mark-Meth-Cohn_Aaaaaww-Mum.webp', category: 'Wedding', title: 'Bridal Portrait', location: 'Chennai' },
  { id: 10, src: '/assets/Seatbelt_check__by_Graeme_Guy__The_Nature_Photography_Contest_2025_Funny_Nature__Finalist.webp', category: 'Drone', title: 'Aerial View', location: 'Kerala' },
  { id: 11, src: '/assets/Shes-Mine-Back-Off-by-Jill-Hill-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', category: 'Pre Wedding', title: 'Forest Romance', location: 'Coorg' },
  { id: 12, src: '/assets/The-Chorus-of-Silence-by-Thomas-Andy-Branson-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', category: 'Wedding', title: 'Sacred Vows', location: 'Varanasi' },
]

const categories = ['All', 'Wedding', 'Pre Wedding', 'Destination', 'Luxury Events', 'Engagement', 'Couple Portraits', 'Drone', 'Night Photography']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = selectedCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Our Work</p>
          <SplitText
            text="Portfolio"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <p className="text-warmWhite/60 max-w-2xl mx-auto text-lg leading-relaxed">
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
                  ? 'bg-gradient-to-r from-gold to-goldLight text-background shadow-[0_0_30px_rgba(201,169,98,0.3)]'
                  : 'text-warmWhite/50 hover:text-gold hover:bg-charcoal/30'
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
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <GlowCard className="p-0 overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <ImageReveal src={image.src} alt={image.title} className="w-full h-full" />
                    
                    {/* Luxury Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.25, 0.46, 0.45, 0.94]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-2"
                      >
                        <p className="text-gold text-xs tracking-[0.3em] uppercase">{image.category}</p>
                        <h3 className="font-heading text-xl text-warmWhite">{image.title}</h3>
                        <p className="text-warmWhite/50 text-sm tracking-wide">{image.location}</p>
                      </motion.div>
                    </div>

                    {/* Zoom indicator */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
