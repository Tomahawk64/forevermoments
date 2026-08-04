'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [textReveal, setTextReveal] = useState(false)
  const [logoComplete, setLogoComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setLogoComplete(true)
          return 100
        }
        return prev + 0.6
      })
    }, 20)

    const textTimer = setTimeout(() => setTextReveal(true), 300)
    const exitTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    return () => {
      clearInterval(interval)
      clearTimeout(textTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  const text = '4EVER\nMOMENTS'

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(203, 148, 247, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 70%, rgba(216, 175, 255, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 30%, rgba(203, 148, 247, 0.08) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0
              }}
              animate={{
                y: [null, -Math.random() * 200 - 100],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}

          {/* Premium Film Grain */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />
          
          <div className="relative z-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.25em] text-gradient mb-4">
                  <span className="inline-block"><span className="text-[1.45em] relative -top-[0.15em] inline-block">4</span>EVER</span>
                </h1>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.25em] text-gradient mb-16">
                  <span className="inline-block">MOMENTS</span>
                </h1>
              </div>
              
              {/* Elegant Progress Bar */}
              <div className="relative w-80 h-1 bg-surface/50 rounded-full overflow-hidden mx-auto mb-10">
                <motion.div
                  className="absolute inset-0 h-full bg-gradient-to-r from-primary via-primaryLight to-primaryDark rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
              
              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-heading text-2xl text-primary/80 tracking-widest mb-8"
              >
                {Math.round(progress)}%
              </motion.div>
              
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xs tracking-[0.5em] text-primary/40 uppercase"
              >
                Crafting Timeless Stories
              </motion.p>
            </motion.div>
          </div>

          {/* Cinematic Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse at center, transparent 0%, rgba(13, 13, 13, 0.4) 100%)]" />
          
          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-primary/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-primary/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-primary/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-primary/20" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
