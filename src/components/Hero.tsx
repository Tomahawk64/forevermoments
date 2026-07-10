'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import MagneticButton from './ui/MagneticButton'
import SplitText from './ui/SplitText'

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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ x: string; y: string; duration: number; delay: number; distance: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    setParticles(
      [...Array(15)].map(() => ({
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        duration: Math.random() * 12 + 12,
        delay: Math.random() * 5,
        distance: Math.random() * -80,
      }))
    )
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToFilms = () => {
    document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={ref} className="relative h-screen overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0"
      >
        <motion.div
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0 bg-gradient-to-br from-background via-charcoal to-background"
        >
          <div className="absolute inset-0 bg-[url('/assets/IMG_1194.JPG.jpeg')] bg-cover bg-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        </motion.div>
      </motion.div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse at center, transparent 0%, rgba(13, 13, 13, 0.35) 70%, rgba(13, 13, 13, 0.7) 100%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gold/15 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
            }}
            animate={{
              y: [null, particle.distance + '%'],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.2 }}
          className="mb-8"
        >
          <p className="text-gold tracking-[0.35em] text-[0.7rem] uppercase">Luxury Wedding Photography & Cinematography</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.4 }}
          className="mb-12"
        >
          <SplitText
            text="FOREVER MOMENTS"
            className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.2em] text-warmWhite leading-tight"
            delay={0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.6 }}
          className="mb-16"
        >
          <p className="font-heading text-lg md:text-xl lg:text-2xl text-warmWhite/70 max-w-3xl leading-relaxed tracking-wide">
            Crafting timeless wedding stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.8 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <MagneticButton
            onClick={scrollToFilms}
            className="px-12 py-4 bg-gradient-to-r from-gold to-goldLight text-background text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:shadow-[0_0_35px_rgba(201,169,98,0.25)] transition-shadow duration-500"
          >
            Watch Films
          </MagneticButton>
          <MagneticButton
            onClick={scrollToPortfolio}
            className="px-12 py-4 border border-gold/40 text-gold text-xs tracking-[0.25em] uppercase font-medium rounded-sm hover:bg-gold/10 transition-colors duration-500"
          >
            View Portfolio
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[0.65rem] tracking-[0.25em] text-warmWhite/40 uppercase">Scroll</span>
          <ChevronDown className="text-gold/50" size={18} />
        </motion.div>
      </motion.div>

      {/* Film Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />
    </section>
  )
}
