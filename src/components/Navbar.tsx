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
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Films', href: '#films' },
    { name: 'Services', href: '#services' },
    { name: 'Our Story', href: '#story' },
    { name: 'Forever Memories', href: '#memories' },
    { name: 'Testimonials', href: '#testimonials' },
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
            ? 'bg-background/85 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="font-heading text-xl md:text-2xl font-light tracking-[0.15em] text-gradient hover:opacity-80 transition-opacity duration-300"
            >
              FOREVER MOMENTS
            </motion.a>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3 + index * 0.05, duration: 0.8 }}
                  className="relative group"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                    className={cn(
                      'text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300 relative py-2',
                      activeSection === item.href.replace('#', '')
                        ? 'text-gold'
                        : 'text-warmWhite/60 hover:text-gold'
                    )}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <motion.div
                      className={cn(
                        'absolute bottom-0 left-0 h-px bg-gradient-to-r from-gold to-goldLight',
                        activeSection === item.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-warmWhite hover:text-gold transition-colors duration-300"
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
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden"
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
                    'font-heading text-3xl text-warmWhite hover:text-gold transition-colors duration-300',
                    activeSection === item.href.replace('#', '') && 'text-gold'
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
