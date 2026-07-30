'use client'

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import MagneticButton from './ui/MagneticButton'
import SplitText from './ui/SplitText'

const HERO_IMAGES = [
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero1.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero2.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero3.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero4.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero5.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero6.jpg',
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.12]), {
    stiffness: 100,
    damping: 25,
  })
  const textY = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 40]), {
    stiffness: 100,
    damping: 25,
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFilms = () => {
    document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      {/* Hero Image Slider with Ken Burns Effect */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_IMAGES[currentImageIndex]})` }}
            />
            {/* Dark Luxury Gradient Overlays */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(25,15,40,0.45), rgba(255,255,255,0.08))' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.15), transparent)' }} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse at center, transparent 0%, rgba(25,15,40,0.3) 100%)]" />

      {/* Gradient Blobs for depth */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primaryLight/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-primaryLight tracking-[0.35em] text-xs uppercase font-medium drop-shadow-lg">Luxury Wedding Photography & Cinematography</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="mb-12"
        >
          <SplitText
            text="FOREVER MOMENTS"
            className="font-heading text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light tracking-[0.15em] text-white leading-[0.9] drop-shadow-2xl"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="mb-16"
        >
          <p className="font-heading text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl leading-relaxed tracking-wide font-light drop-shadow-lg">
            Crafting timeless wedding stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <MagneticButton
            onClick={scrollToFilms}
            className="px-14 py-5 bg-gradient-to-r from-primary to-primaryDark text-white text-sm tracking-[0.25em] uppercase font-medium rounded-button shadow-luxury hover:shadow-glow hover:-translate-y-1 hover:scale-105 transition-all duration-400"
          >
            Watch Films
          </MagneticButton>
          <MagneticButton
            onClick={scrollToPortfolio}
            className="px-14 py-5 border-2 border-white/80 text-white text-sm tracking-[0.25em] uppercase font-medium rounded-button hover:bg-white/20 hover:border-white hover:shadow-glow hover:-translate-y-1 transition-all duration-400 backdrop-blur-sm"
          >
            View Portfolio
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />
    </section>
  )
}
