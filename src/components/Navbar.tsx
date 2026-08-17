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
            ? 'bg-white backdrop-blur-xl border-[rgba(90,33,182,0.15)] shadow-[0_4px_20px_rgba(90,33,182,0.12)] py-3.5'
            : 'bg-white backdrop-blur-md border-[rgba(90,33,182,0.10)] py-5'
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
            <span className="text-[1.35em] relative -top-[0.25em] inline-block font-medium text-[#7C3AED]">4</span>EVER MOMENTS
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-white flex flex-col justify-between p-6 sm:p-8 lg:hidden"
          >
            {/* Top Bar inside mobile menu */}
            <div className="flex items-center justify-between pb-6 border-b border-purple-100/60">
              <span className="font-heading text-xl font-light tracking-[0.18em] text-[#130B1E]">
                <span className="text-[1.35em] relative -top-[0.25em] inline-block font-medium text-[#8225D4]">4</span>EVER MOMENTS
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-purple-50 flex items-center justify-center text-[#130B1E] hover:text-[#8225D4] hover:bg-purple-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-5 my-auto py-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={cn(
                    'font-heading text-2xl sm:text-3xl tracking-[0.08em] text-[#130B1E] hover:text-[#8225D4] transition-all flex items-center justify-between py-2 border-b border-gray-50',
                    activeSection === item.href.replace('#', '')
                      ? 'text-[#8225D4] font-medium pl-2'
                      : 'text-[#1F142E]'
                  )}
                >
                  <span>{item.name}</span>
                  {activeSection === item.href.replace('#', '') && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8225D4]" />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Bottom Contact quick CTA */}
            <div className="pt-6 border-t border-purple-100/60 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#8225D4] via-[#9333EA] to-[#A855F7] text-white text-center font-medium text-xs tracking-[0.2em] uppercase shadow-lg shadow-purple-500/25"
              >
                Book Your Wedding
              </a>
              <div className="flex justify-between items-center text-xs text-gray-500 px-2 pt-1">
                <a href="tel:+918920557478" className="hover:text-[#8225D4]">+91 89205 57478</a>
                <span>Delhi &amp; Worldwide</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}





