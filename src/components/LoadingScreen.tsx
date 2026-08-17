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
        return prev + 1.8
      })
    }, 16)

    const textTimer = setTimeout(() => setTextReveal(true), 200)
    const exitTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1600)

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
                'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 70%, rgba(176, 124, 240, 0.12) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#A855F7]/40 rounded-full"
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
              <div className="relative w-80 h-1 bg-[#E2D0F8] rounded-full overflow-hidden mx-auto mb-10">
                <motion.div
                  className="absolute inset-0 h-full bg-gradient-to-r from-[#8225D4] via-[#A855F7] to-[#BA88F8] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
              
              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xs tracking-[0.5em] text-[#A855F7] uppercase font-semibold"
              >
                Crafting Timeless Stories
              </motion.p>
            </motion.div>
          </div>

          {/* Cinematic Corner Accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#A855F7]/25" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#A855F7]/25" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#A855F7]/25" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#A855F7]/25" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

