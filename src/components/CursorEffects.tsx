'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorType, setCursorType] = useState<'default' | 'image' | 'video' | 'button' | 'gallery'>('default')
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check for different cursor types
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorType('button')
        setIsHovering(true)
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorType('button')
        setIsHovering(true)
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        setCursorType('image')
        setIsHovering(true)
      } else if (target.tagName === 'VIDEO' || target.closest('video')) {
        setCursorType('video')
        setIsHovering(true)
      } else if (target.closest('.group') || target.closest('[role="button"]')) {
        setCursorType('gallery')
        setIsHovering(true)
      } else {
        setCursorType('default')
        setIsHovering(false)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const getCursorSize = () => {
    switch (cursorType) {
      case 'image':
        return 80
      case 'video':
        return 90
      case 'gallery':
        return 70
      case 'button':
        return 50
      default:
        return 32
    }
  }

  const getCursorLabel = () => {
    switch (cursorType) {
      case 'image':
        return 'VIEW'
      case 'video':
        return 'PLAY'
      case 'gallery':
        return 'EXPLORE'
      case 'button':
        return ''
      default:
        return ''
    }
  }

  return (
    <>
      {/* Main Custom Cursor */}
      <AnimatePresence mode="wait">
        <motion.div
          ref={cursorRef}
          className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-difference"
          animate={{
            x: mousePosition.x - getCursorSize() / 2,
            y: mousePosition.y - getCursorSize() / 2,
            scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 800,
            damping: 25,
            mass: 0.5
          }}
        >
          <motion.div
            className="relative"
            animate={{
              width: getCursorSize(),
              height: getCursorSize(),
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-warmWhite/80"
              animate={{
                scale: isHovering ? [1, 1.1, 1] : 1,
                opacity: isHovering ? 1 : 0.8
              }}
              transition={{
                duration: 0.6,
                repeat: isHovering ? Infinity : 0,
                ease: 'easeInOut'
              }}
            />
            
            {/* Inner Dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-warmWhite rounded-full -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: isClicking ? 0.5 : 1,
                opacity: isHovering ? 0.6 : 1
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Cursor Label */}
            <AnimatePresence>
              {getCursorLabel() && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] tracking-[0.3em] text-warmWhite font-medium whitespace-nowrap"
                >
                  {getCursorLabel()}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Premium Cursor Glow - Follows with delay */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
          mass: 1
        }}
      >
        <motion.div
          className="w-[400px] h-[400px] rounded-full"
          animate={{
            scale: isHovering ? 1.2 : 1,
            opacity: isHovering ? 0.12 : 0.08
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'radial-gradient(circle, rgba(203, 148, 247, 0.15) 0%, rgba(203, 148, 247, 0.05) 30%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Secondary Glow - Different timing */}
      <motion.div
        className="fixed pointer-events-none z-[9997] hidden md:block"
        animate={{
          x: mousePosition.x - 120,
          y: mousePosition.y - 120,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 40,
          mass: 1.5
        }}
      >
        <motion.div
          className="w-[240px] h-[240px] rounded-full"
          animate={{
            scale: isHovering ? 1.3 : 1,
            opacity: isHovering ? 0.1 : 0.05
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'radial-gradient(circle, rgba(216, 175, 255, 0.12) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      {/* Premium Film Grain - Subtle */}
      <div className="fixed inset-0 pointer-events-none z-[9996] opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')]" />
    </>
  )
}
