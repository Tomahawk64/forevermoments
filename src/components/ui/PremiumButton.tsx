'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PremiumButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export default function PremiumButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: PremiumButtonProps) {
  const baseStyles = 'relative overflow-hidden rounded-button font-medium tracking-[0.25em] uppercase transition-all duration-500'
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary to-primaryDark text-white shadow-luxury hover:shadow-glow',
    secondary: 'bg-gradient-to-r from-[#C9ABF5] to-[#8845D6] text-text shadow-luxury hover:shadow-glow border border-[#E2D0F8]',
    outline: 'bg-transparent border-2 border-primary/50 text-primary hover:bg-primary hover:text-white'
  }
  
  const sizeStyles = {
    sm: 'px-8 py-3 text-xs',
    md: 'px-12 py-4 text-sm',
    lg: 'px-16 py-5 text-base'
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {/* Light Sweep Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      
      {/* Ripple Effect Container */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-button"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
      
      {/* Button Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}



