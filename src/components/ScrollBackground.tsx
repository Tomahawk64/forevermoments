'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const decorativeWords = [
  'LOVE', 'FOREVER', 'MEMORIES', 'TIMELINE', 'CINEMATIC', 
  'STORIES', 'EMOTION', 'TOGETHER', 'LEGACY', 'SOUL', 
  'ETERNITY', 'MOMENTS', 'ROMANCE', 'CELEBRATION', 'TIMELESS'
]

export default function ScrollBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const gradientRotation = useSpring(useTransform(scrollYProgress, [0, 1], [0, 360]), {
    stiffness: 100,
    damping: 30
  })
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 0.4])
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -800]), {
    stiffness: 100,
    damping: 30
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Animated Gradient Background */}
      <motion.div
        style={{
          rotate: gradientRotation,
          opacity: gradientOpacity
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primaryLight/5 to-primaryDark/8 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-luxuryCream/20 via-transparent to-luxuryLavender/15 blur-2xl" />
      </motion.div>

      {/* Floating Decorative Typography - Side Spaces */}
      <motion.div style={{ y: textY }} className="absolute inset-0">
        {decorativeWords.map((word, index) => {
          const xPos = index % 2 === 0 ? 'left' : 'right'
          const yPos = (index * 7) % 100
          
          return (
            <motion.div
              key={word}
              initial={{ opacity: 0, x: xPos === 'left' ? -100 : 100 }}
              animate={{
                opacity: [0, 0.03, 0],
                x: xPos === 'left' ? [-50, -30, -50] : [50, 30, 50],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: index * 0.8,
                ease: 'easeInOut'
              }}
              className={`absolute font-heading text-[10rem] md:text-[14rem] font-light tracking-[0.25em] text-primary/3 whitespace-nowrap select-none`}
              style={{
                [xPos]: `${Math.random() * 15}%`,
                top: `${yPos}%`,
                transform: `translateX(${mousePosition.x * (index % 3 + 1)}px)`
              }}
            >
              {word}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Dynamic Gradient Orbs - Parallax Layers */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 400]),
          x: useTransform(scrollYProgress, [0, 1], [0, -300])
        }}
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/6 rounded-full blur-[200px]"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -500]),
          x: useTransform(scrollYProgress, [0, 1], [0, 400])
        }}
        className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primaryLight/5 rounded-full blur-[180px]"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 300]),
          x: useTransform(scrollYProgress, [0, 1], [0, -200])
        }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-luxuryCream/30 rounded-full blur-[150px]"
      />
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -250]),
          x: useTransform(scrollYProgress, [0, 1], [0, 150])
        }}
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-luxuryLavender/20 rounded-full blur-[120px]"
      />

      {/* Floating Particles - Subtle Shimmer */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut'
          }}
          className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      {/* Subtle Mesh Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(203, 148, 247, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 0%, rgba(216, 175, 255, 0.2) 0px, transparent 50%),
            radial-gradient(at 0% 50%, rgba(237, 216, 255, 0.25) 0px, transparent 50%),
            radial-gradient(at 80% 50%, rgba(247, 244, 255, 0.3) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(203, 148, 247, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 100%, rgba(216, 175, 255, 0.25) 0px, transparent 50%)
          `
        }}
      />

      {/* Premium Grain Texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />

      {/* Cinematic Light Leaks */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.15, 0.08, 0]),
          rotate: useTransform(scrollYProgress, [0, 1], [-15, 15])
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent blur-[100px]"
      />
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0.12, 0.06, 0]),
          rotate: useTransform(scrollYProgress, [0, 1], [15, -15])
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-luxuryLavender/10 via-transparent to-transparent blur-[80px]"
      />
    </div>
  )
}
