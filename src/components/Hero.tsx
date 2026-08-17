'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Play, Camera } from 'lucide-react'
import Image from 'next/image'

const HERO_IMAGES = [
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero1.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero2.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero3.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero4.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero5.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero6.jpg',
]

const STATS = [
  { value: '500+', label: 'Weddings' },
  { value: '12+', label: 'Years' },
  { value: '50+', label: 'Cities' },
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.08]), { stiffness: 80, damping: 20 })
  const textY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 60]), { stiffness: 80, damping: 20 })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden bg-[#130A1F]">
      {/* Background slideshow */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            animate={{ opacity: i === currentImageIndex ? 1 : 0, scale: i === currentImageIndex ? 1 : 1.04 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image src={src} alt="" fill className="object-cover object-center" priority={i < 3} quality={85} sizes="100vw" />
          </motion.div>
        ))}
        {/* Natural Photography Overlays — keeping images vivid, bright and clearly visible */}
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(105deg, rgba(19,10,31,0.48) 0%, rgba(19,10,31,0.18) 50%, rgba(19,10,31,0.05) 100%)' }} />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(19,10,31,0.40) 0%, transparent 40%)' }} />
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(19,10,31,0.30) 0%, transparent 30%)' }} />
      </motion.div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#B07CF0]/15 rounded-full blur-[130px] pointer-events-none z-10" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#BA88F8]/15 rounded-full blur-[100px] pointer-events-none z-10" />

      {/* Main Content Container */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-[1400px] mx-auto pt-16"
      >
        <div className="flex items-center justify-between gap-12 w-full">

          {/* LEFT: Typography & CTAs */}
          <div className="flex-1 max-w-2xl">
            {/* Headline line 1 */}
            <div className="overflow-hidden mb-2">
              <motion.p
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.1em] text-white/90 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              >
                Where Every Frame
              </motion.p>
            </div>

            {/* Headline line 2 */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-semibold tracking-tight text-white leading-[0.88] drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]"
              >
                Becomes{' '}
                <span className="relative italic font-light text-[#B07CF0] drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
                  <span className="relative inline-block -top-[0.1em] not-italic font-semibold text-white">4</span>ever
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 1.3 }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B07CF0] via-[#A855F7] to-transparent origin-left"
                  />
                </span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="text-white/85 text-sm tracking-[0.15em] uppercase font-light mb-12 max-w-xs drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              Crafting timeless wedding stories across India
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B07CF0] via-[#A855F7] to-[#8225D4] text-white text-[11px] tracking-[0.28em] uppercase font-semibold rounded-full shadow-[0_10px_35px_rgba(168,85,247,0.45)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.65)] transition-all duration-400 overflow-hidden relative group"
              >
                <Play size={13} fill="currentColor" />
                <span>Watch Films</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 skew-x-12" />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-8 py-4 border border-white/40 text-white text-[11px] tracking-[0.28em] uppercase font-medium rounded-full backdrop-blur-sm hover:border-[#B07CF0] hover:bg-white/10 transition-all duration-400"
              >
                <Camera size={13} />
                <span>View Portfolio</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="flex items-center gap-10 mt-16 pt-8 border-t border-white/15"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-semibold text-white leading-none mb-1">{stat.value}</p>
                  <p className="text-white/60 text-[10px] tracking-[0.25em] uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Ultra-Luxury Frosted Glass Camera Viewfinder Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex flex-col items-center flex-shrink-0 relative"
          >
            {/* Cinematic Camera Viewfinder Frame */}
            <div className="relative w-[300px] sm:w-[330px] h-[430px] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.7)] ring-1 ring-white/30 backdrop-blur-xl group">
              {/* Dynamic Live Wedding Slide */}
              {HERO_IMAGES.map((src, i) => (
                <motion.div
                  key={src + '-viewfinder'}
                  className="absolute inset-0"
                  animate={{
                    opacity: i === currentImageIndex ? 1 : 0,
                    scale: i === currentImageIndex ? 1.05 : 1,
                  }}
                  transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Image
                    src={src}
                    alt="Featured Wedding Story"
                    fill
                    className="object-cover object-center"
                    priority={i < 2}
                    quality={85}
                    sizes="330px"
                  />
                </motion.div>
              ))}

              {/* Viewfinder Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130A1F]/90 via-black/20 to-[#130A1F]/40 z-10" />

              {/* Camera Viewfinder Crosshair Corners (HUD) */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#B07CF0]/80 z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#B07CF0]/80 z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#B07CF0]/80 z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#B07CF0]/80 z-20" />

              {/* Top Viewfinder HUD info */}
              <div className="absolute top-5 inset-x-6 z-20 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-white text-[9px] tracking-[0.2em] font-semibold uppercase">REC • 4K HDR</span>
                </div>
                <span className="text-white/90 text-[10px] tracking-widest font-mono">f/1.2 • 85mm</span>
              </div>

              {/* Center Interactive Play Reel Trigger */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <motion.button
                  onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-[0_0_30px_rgba(176,124,240,0.5)] group-hover:bg-[#A855F7]/70 group-hover:border-[#B07CF0] transition-all duration-300"
                  aria-label="Play Featured Films"
                >
                  <Play size={22} className="ml-1 fill-white" />
                </motion.button>
              </div>

              {/* Bottom Glass Badge */}
              <div className="absolute bottom-5 inset-x-5 z-20 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/25 shadow-lg">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-[#B07CF0]" />
                    <p className="text-white text-[10px] tracking-[0.25em] uppercase font-semibold">Cinematic Lens</p>
                  </div>
                  <span className="text-[#B07CF0] text-[10px] tracking-wider font-mono">
                    {String(currentImageIndex + 1).padStart(2, '0')} / {String(HERO_IMAGES.length).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-white/80 text-xs font-light leading-relaxed">
                  Real emotions captured through master optics.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Vertical dot indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-[10px]"
      >
        {HERO_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setCurrentImageIndex(i)} className="relative flex items-center justify-center">
            <div
              className={`rounded-full transition-all duration-500 ${
                i === currentImageIndex
                  ? 'w-[3px] h-8 bg-[#B07CF0] shadow-[0_0_12px_rgba(176,124,240,0.9)]'
                  : 'w-[3px] h-[10px] bg-white/30 hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-white/35 text-[9px] tracking-[0.45em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

    </section>
  )
}

