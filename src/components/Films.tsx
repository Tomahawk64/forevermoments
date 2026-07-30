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
    title: 'Ashutosh & Kanchan',
    category: 'Pre Wedding',
    duration: 'Full Film',
    thumbnail: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Ashutosh%20%26%20Kanchan%20__%20Pre%20Wedding%20__%202024%20__%20Udaipur%20__thumbnail.png',
    description: 'A beautiful pre-wedding journey in Udaipur 2024',
    year: '2024',
    videoUrl: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Ashutosh%20%26%20Kanchan%20__%20Pre%20Wedding%20__%202024%20__%20Udaipur%20__.mp4'
  },
  {
    id: 2,
    title: 'Haldi Carnival',
    category: 'Wedding Film',
    duration: 'Highlights',
    thumbnail: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Haldi%20Carnival%F0%9F%92%9B_%20When%20Loves%20Get%20Colourful%20%F0%9F%92%95thumbnail.png',
    description: 'When Love Gets Colourful - Vibrant Haldi celebrations',
    year: '2024',
    videoUrl: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Haldi%20Carnival%F0%9F%92%9B_%20When%20Loves%20Get%20Colourful%20%F0%9F%92%95.mp4'
  },
  {
    id: 3,
    title: 'Groom Entry',
    category: 'Wedding Film',
    duration: 'Reel',
    thumbnail: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/He%20Didn%E2%80%99t%20Just%20Get%20Ready.%20He%20Arrived%20%F0%9F%94%A5_%20Groom%20Reel_thumbnail.png',
    description: 'He Didn\'t Just Get Ready. He Arrived - Epic Groom Entry',
    year: '2024',
    videoUrl: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/He%20Didn%E2%80%99t%20Just%20Get%20Ready.%20He%20Arrived%20%F0%9F%94%A5_%20Groom%20Reel.mp4'
  },
  {
    id: 4,
    title: 'Soulmates in the Making',
    category: 'Pre Wedding',
    duration: 'Teaser',
    thumbnail: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Soulmates%20in%20the%20Making%20%23preweddingteaser%20%23lovestory%20%23love%20%23shorts%20%23shortsfeed%20%23short%20%23youtubeshorts_thumbnail.png',
    description: 'A beautiful love story teaser - Soulmates in the Making',
    year: '2024',
    videoUrl: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Soulmates%20in%20the%20Making%20%23preweddingteaser%20%23lovestory%20%23love%20%23shorts%20%23shortsfeed%20%23short%20%23youtubeshorts.mp4'
  },
  {
    id: 5,
    title: 'From Pheras To First Dance',
    category: 'Wedding Highlights',
    duration: '50 Seconds',
    thumbnail: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/%E2%80%9CFrom%20Pheras%20To%20First%20Dance%20-%20A%20Love%20Story%20In%2050%20Seconds%20%F0%9F%92%8D%F0%9F%94%A5%E2%80%9Dthumbnail.png',
    description: 'A Love Story in 50 Seconds - Complete wedding journey',
    year: '2024',
    videoUrl: 'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/%E2%80%9CFrom%20Pheras%20To%20First%20Dance%20-%20A%20Love%20Story%20In%2050%20Seconds%20%F0%9F%92%8D%F0%9F%94%A5%E2%80%9D.mp4'
  },
]

export default function Films() {
  const [hoveredFilm, setHoveredFilm] = useState<number | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [previewVideo, setPreviewVideo] = useState<number | null>(null)

  return (
    <section id="films" className="section-padding bg-gradient-luxury-soft relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primaryLight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">Cinematography</p>
          <SplitText
            text="Our Films"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
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
              onMouseEnter={() => {
                setHoveredFilm(film.id)
                setPreviewVideo(film.id)
              }}
              onMouseLeave={() => {
                setHoveredFilm(null)
                setPreviewVideo(null)
              }}
            >
              <GlowCard className="p-0 overflow-hidden rounded-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-video overflow-hidden bg-surfaceLight">
                  {playingVideo === film.videoUrl ? (
                    <video
                      src={film.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                      onEnded={() => setPlayingVideo(null)}
                    />
                  ) : (
                    <>
                      {/* Thumbnail / Preview Video */}
                      {previewVideo === film.id ? (
                        <video
                          src={film.videoUrl}
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <motion.div
                          className="absolute inset-0 bg-cover bg-center cursor-pointer"
                          style={{ backgroundImage: `url(${film.thumbnail})` }}
                          animate={{ scale: hoveredFilm === film.id ? 1.1 : 1 }}
                          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                          onClick={() => setPlayingVideo(film.videoUrl)}
                        />
                      )}
                      
                      {/* Netflix-style overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-luxuryDark/80 via-luxuryDark/40 to-transparent"
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: hoveredFilm === film.id ? 0.2 : 0.4 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Play Button - Netflix style */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={hoveredFilm === film.id ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setPlayingVideo(film.videoUrl)}
                      >
                        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center shadow-glow">
                          <Play className="text-white ml-2" size={40} fill="currentColor" />
                        </div>
                      </motion.div>
                    </>
                  )}

                  {/* Progress bar animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primaryDark"
                    initial={{ width: '0%' }}
                    animate={hoveredFilm === film.id ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 2, ease: 'linear' }}
                  />

                  {/* Duration Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/20 backdrop-blur-glass rounded-input text-xs text-white tracking-wider font-medium shadow-sm">
                    {film.duration}
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-primary to-primaryDark rounded-input text-xs text-white tracking-wider font-medium shadow-sm">
                    {film.year}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <motion.p
                    className="text-primaryLight text-xs tracking-[0.3em] uppercase mb-3 font-medium"
                  >
                    {film.category}
                  </motion.p>
                  <motion.h3
                    className="font-heading text-2xl text-text mb-3 font-light"
                  >
                    {film.title}
                  </motion.h3>
                  <p className="text-textLight text-base leading-relaxed">{film.description}</p>
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
          <MagneticButton className="px-16 py-5 border-2 border-primary/50 text-primary text-sm tracking-[0.25em] uppercase font-medium rounded-button hover:bg-primary hover:text-background hover:shadow-glow hover:-translate-y-1 hover:scale-105 transition-all duration-400">
            View All Films
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
