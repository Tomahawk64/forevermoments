'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const preWeddingImages = [
  { id: 1, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre1.jpeg', title: 'Golden Hour', location: 'Udaipur' },
  { id: 2, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre2.jpeg', title: 'Romantic Sunset', location: 'Jaipur' },
  { id: 3, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre3.jpeg', title: 'Forest Dreams', location: 'Coorg' },
  { id: 4, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre4.jpeg', title: 'Lake Serenity', location: 'Udaipur' },
  { id: 5, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre5.jpeg', title: 'Mountain Love', location: 'Manali' },
  { id: 6, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre6.jpeg', title: 'Desert Romance', location: 'Jaisalmer' },
  { id: 7, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre7.jpeg', title: 'Beach Vibes', location: 'Goa' },
  { id: 8, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre8.jpeg', title: 'City Lights', location: 'Mumbai' },
  { id: 9, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre9.jpeg', title: 'Garden Paradise', location: 'Bangalore' },
  { id: 10, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre10.jpeg', title: 'Heritage Charm', location: 'Delhi' },
  { id: 11, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre11.jpeg', title: 'Palace Elegance', location: 'Jaipur' },
  { id: 12, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre12.jpg', title: 'Royal Affair', location: 'Udaipur' },
  { id: 13, src: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre13.jpg', title: 'Timeless Love', location: 'Kerala' },
]

export default function PreWedding() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)

  const displayImages = showAllImages ? preWeddingImages : preWeddingImages.slice(0, 6)

  return (
    <section id="prewedding" className="section-padding bg-gradient-luxury-soft relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primaryLight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">Before The Big Day</p>
          <SplitText
            text="Pre Wedding Stories"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            The beginning of forever. Captured in the most beautiful locations.
          </p>
        </motion.div>

        {/* Horizontal Gallery */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {displayImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex-shrink-0 w-[300px] md:w-[400px] snap-start"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <GlowCard className="p-0 overflow-hidden rounded-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surfaceLight">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-700 ease-[0.25, 0.46, 0.45, 0.94] ${
                        hoveredIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22%3E%3Crect fill=%22%23F7F3FF%22 width=%22300%22 height=%22400%22/%3E%3Ctext fill=%22%236B4C7A%22 font-family=%22sans-serif%22 font-size=%2214%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage Loading...%3C/text%3E%3C/svg%3E'
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
                        <h3 className="font-heading text-lg text-white font-light">{image.title}</h3>
                        <p className="text-white/70 text-sm tracking-wide">{image.location}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        {preWeddingImages.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => setShowAllImages(!showAllImages)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 border-2 border-primary/50 text-primary text-sm tracking-[0.25em] uppercase font-medium rounded-button hover:bg-primary hover:text-background hover:shadow-glow transition-all duration-400"
            >
              {showAllImages ? 'Show Less' : `View All (${preWeddingImages.length})`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
