'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const distance = 25

      const newX = (e.clientX - rect.left - rect.width / 2) / distance
      const newY = (e.clientY - rect.top - rect.height / 2) / distance

      x.set(newX)
      y.set(newY)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    const element = ref.current
    element?.addEventListener('mousemove', handleMouseMove)
    element?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element?.removeEventListener('mousemove', handleMouseMove)
      element?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [x, y])

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}
