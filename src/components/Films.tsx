'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import MagneticButton from './ui/MagneticButton'

const films = [
  {
    id: 1,
    title: 'The Royal Affair',
    category: 'Wedding Film',
    duration: '4:32',
    thumbnail: '/assets/6797344ddd248_2gx7ek35mmee1-jpeg__700.webp',
    description: 'A grand celebration at Udaipur City Palace',
    year: '2024'
  },
  {
    id: 2,
    title: 'Mountain Love',
    category: 'Luxury Wedding',
    duration: '5:15',
    thumbnail: '/assets/67974a46729b5_wildlife-photography.webp',
    description: 'Destination wedding in the Himalayas',
    year: '2024'
  },
  {
    id: 3,
    title: 'Above the Clouds',
    category: 'Drone Story',
    duration: '3:48',
    thumbnail: '/assets/A-Different-Perspective-by-Bingqian-Gao-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp',
    description: 'Aerial cinematography masterpiece',
    year: '2023'
  },
  {
    id: 4,
    title: 'First Look',
    category: 'Couple Story',
    duration: '2:56',
    thumbnail: '/assets/After-The-Rain-by-Nikita-Chicherin-The-Nature-Photography-Contest-2025-Birds-Finalist.webp',
    description: 'Emotional first moment together',
    year: '2024'
  },
  {
    id: 5,
    title: 'The Celebration',
    category: 'Emotional Highlights',
    duration: '6:20',
    thumbnail: '/assets/Amplified-Intimidation-by-Tom-Hendrickson-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp',
    description: 'Best moments from the wedding day',
    year: '2024'
  },
]

export default function Films() {
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)

  return (
    <section id="films" className="section-padding bg-charcoal/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Cinematography</p>
          <SplitText
            text="Our Films"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <p className="text-warmWhite/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Stories told through motion, emotion, and artistry.
          </p>
        </motion.div>

        {/* Film Cards - Netflix Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
              onMouseEnter={() => setHoveredFilm(film.id)}
              onMouseLeave={() => setHoveredFilm(null)}
            >
              <GlowCard className="p-0 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  {/* Thumbnail */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${film.thumbnail})` }}
                    animate={{ scale: hoveredFilm === film.id ? 1.1 : 1 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  
                  {/* Netflix-style overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: hoveredFilm === film.id ? 0.2 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Play Button - Netflix style */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={hoveredFilm === film.id ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center shadow-[0_0_60px_rgba(201,169,98,0.5)]">
                      <Play className="text-background ml-2" size={36} fill="currentColor" />
                    </div>
                  </motion.div>

                  {/* Progress bar animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-goldLight"
                    initial={{ width: '0%' }}
                    animate={hoveredFilm === film.id ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 2, ease: 'linear' }}
                  />

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded text-xs text-warmWhite tracking-wider">
                    {film.duration}
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md rounded text-xs text-gold tracking-wider">
                    {film.year}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <motion.p
                    className="text-gold text-xs tracking-[0.3em] uppercase mb-2"
                    animate={{ color: hoveredFilm === film.id ? '#C9A962' : '#C9A962' }}
                  >
                    {film.category}
                  </motion.p>
                  <motion.h3
                    className="font-heading text-2xl text-warmWhite mb-2"
                    animate={{ color: hoveredFilm === film.id ? '#F5F5F0' : '#F5F5F0' }}
                  >
                    {film.title}
                  </motion.h3>
                  <p className="text-warmWhite/50 text-sm leading-relaxed">{film.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* View All Films Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <MagneticButton className="px-14 py-5 border border-gold/50 text-gold text-sm tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-gold hover:text-background hover:shadow-[0_0_40px_rgba(201,169,98,0.3)] transition-all duration-500">
            View All Films
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
