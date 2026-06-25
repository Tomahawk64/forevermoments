'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 30,
        }}
      >
        <div className="w-8 h-8 rounded-full border border-warmWhite/80" />
      </motion.div>

      {/* Cursor Glow - Premium Spotlight */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 25,
        }}
      >
        <div
          className="w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201, 169, 98, 0.06) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Film Grain - Subtle */}
      <div className="fixed inset-0 pointer-events-none z-[9997] opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />
    </>
  )
}
