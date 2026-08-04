'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import PremiumButton from './ui/PremiumButton'

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
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

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
          <p className="text-primary tracking-[0.3em] text-sm uppercase font-medium mb-6">Before The Big Day</p>
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
          <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {displayImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex-shrink-0 w-[240px] sm:w-[300px] md:w-[380px] snap-start cursor-pointer perspective-1000"
                onClick={() => { setLightboxIndex(index); setLightboxOpen(true) }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ perspective: '1000px' }}
              >
                <GlowCard className="p-0 overflow-hidden rounded-luxury hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surfaceLight">
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
                        sizes="(max-width: 768px) 300px, 400px"
                        quality={80}
                      />
                    </motion.div>
                    
                    {/* Luxury Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-luxuryDark/90 via-luxuryDark/50 to-transparent opacity-0"
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
                      className="absolute inset-0 rounded-luxury border-2 border-primary/0"
                      animate={{ borderColor: hoveredIndex === index ? 'rgba(203, 148, 247, 0.4)' : 'rgba(203, 148, 247, 0)' }}
                      transition={{ duration: 0.4 }}
                    />
                    


                    {/* Floating Particles */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none"
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    >
                      {[...Array(4)].map((_, i) => (
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
        slides={preWeddingImages.map(img => ({ src: img.src }))}
        index={lightboxIndex}
      />
    </section>
  )
}
