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
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
          isScrolled
            ? 'bg-[#DDC5FC] backdrop-blur-xl border-[rgba(90,33,182,0.15)] shadow-[0_4px_20px_rgba(90,33,182,0.12)] py-3.5'
            : 'bg-[#DDC5FC] backdrop-blur-md border-[rgba(90,33,182,0.10)] py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-lg md:text-xl font-light tracking-[0.18em] hover:opacity-80 transition-all duration-500 text-[#1A0530] whitespace-nowrap"
          >
            <span className="text-[1.3em] relative -top-[0.15em] inline-block font-normal text-[#7C3AED]">4</span>EVER MOMENTS
          </motion.a>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.8 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={cn(
                    'text-[11px] tracking-[0.18em] uppercase transition-all duration-400 relative py-2 font-semibold whitespace-nowrap',
                    activeSection === item.href.replace('#', '')
                      ? 'text-[#7C3AED]'
                      : 'text-[#3B1060] hover:text-[#7C3AED]'
                  )}
                >
                  {item.name}
                  {/* Animated underline */}
                  <motion.div
                    className={cn(
                      'absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#A855F7] to-[#B07CF0]',
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
            className="lg:hidden text-[#1A0530] hover:text-[#7C3AED] transition-colors duration-300 z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#DDC5FC]/98 backdrop-blur-xl lg:hidden"
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
                    'font-heading text-3xl font-light tracking-[0.15em] text-[#2D1050] hover:text-[#7C3AED] transition-colors duration-400',
                    activeSection === item.href.replace('#', '') && 'text-[#7C3AED] font-semibold'
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




