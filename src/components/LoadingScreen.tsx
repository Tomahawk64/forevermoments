'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [textReveal, setTextReveal] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 0.8
      })
    }, 16)

    const textTimer = setTimeout(() => setTextReveal(true), 500)
    const exitTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(textTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  const text = 'FOREVER MOMENTS'

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          {/* Subtle film grain */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />
          
          <div className="relative z-10">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.3em] text-gradient mb-12">
                {text.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: textReveal ? index * 0.05 : 0,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
              
              {/* Elegant progress line */}
              <div className="w-64 h-px bg-charcoal overflow-hidden mx-auto mb-8">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold via-goldLight to-gold"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0 }}
                />
              </div>
              
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xs tracking-[0.4em] text-gold/50 uppercase"
              >
                Crafting Timeless Stories
              </motion.p>
            </motion.div>
          </div>

          {/* Vignette effect */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle at center, transparent 0%, rgba(13, 13, 13, 0.3) 100%)]" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
