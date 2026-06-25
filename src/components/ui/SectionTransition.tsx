'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionTransitionProps {
  children: React.ReactNode
  delay?: number
}

export default function SectionTransition({ children, delay = 0 }: SectionTransitionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
