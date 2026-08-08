'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Wedding', href: '#portfolio' },
    { name: 'Film/Aerial Shoots', href: '#films' },
    { name: 'Family/Birthdays', href: '#family' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
          isScrolled
            ? 'bg-white/85 backdrop-blur-luxury border-b border-primary/20 shadow-luxury py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={cn(
                "font-heading text-2xl md:text-3xl font-bold tracking-[0.12em] hover:opacity-80 transition-all duration-500",
                isScrolled
                  ? "text-gradient"
                  : "text-white [text-shadow:0_0_20px_rgba(203,148,247,0.8),0_2px_8px_rgba(0,0,0,0.4)]"
              )}
            >
              <span className="text-[1.45em] relative -top-[0.15em] inline-block">4</span>EVER MOMENTS
            </motion.a>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.8 }}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className={cn(
                      'text-xs tracking-[0.2em] uppercase transition-all duration-400 relative py-2 font-medium',
                      activeSection === item.href.replace('#', '')
                        ? 'text-primary'
                        : isScrolled ? 'text-textLight hover:text-primary' : 'text-primary hover:text-primaryLight'
                    )}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <motion.div
                      className={cn(
                        'absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary to-primaryDark',
                        activeSection === item.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-text hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-luxury lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    'font-heading text-3xl text-text hover:text-primary transition-colors duration-400 font-light',
                    activeSection === item.href.replace('#', '') && 'text-primary'
                  )}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
