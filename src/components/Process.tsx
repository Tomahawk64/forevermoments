'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Camera, Calendar, Sparkles, Scissors, Gift } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start with a proper conversation — about your day, your family, what matters to you and what doesn’t.',
    icon: Camera,
  },
  {
    number: '02',
    title: 'Planning',
    description: 'We map out the full day — venues, timings, light conditions — so nothing is left to chance on the actual day.',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Capture',
    description: 'We’re on the ground from the first ritual to the last dance. Quietly present, always paying attention.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Artistry',
    description: 'Every photo and frame is edited with care. This is the part that takes time — and it should.',
    icon: Scissors,
  },
  {
    number: '05',
    title: 'Legacy',
    description: 'Your gallery, film, and album — delivered in a way that’s easy to access, share, and keep forever.',
    icon: Gift,
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-gradient-luxury-soft relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primaryLight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-24"
        >
          <p className="text-primary tracking-[0.3em] text-sm uppercase font-medium mb-6">How We Work</p>
          <SplitText
            text="Our Process"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            Simple steps. No surprises.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Glowing Line - Animated */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: 'top' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Circle - Desktop - Animated */}
                  <motion.div 
                    className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primaryDark items-center justify-center z-10 shadow-glow"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.span 
                      className="font-heading text-lg text-background font-medium"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {step.number}
                    </motion.span>
                  </motion.div>

                  {/* Timeline Circle - Mobile - Animated */}
                  <motion.div 
                    className="lg:hidden w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center shadow-glow mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <motion.span 
                      className="font-heading text-lg text-background font-medium"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {step.number}
                    </motion.span>
                  </motion.div>

                  {/* Content Card - Enhanced */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-20' : 'lg:text-left lg:pl-20'}`}>
                    <GlowCard className="glass-card hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-700 group">
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center flex-shrink-0 shadow-sm"
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <Icon className="w-6 h-6 text-background" />
                        </motion.div>
                        <div>
                          <motion.h3 
                            className="font-heading text-2xl text-text mb-3 font-light group-hover:text-primary transition-colors duration-500"
                            whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.title}
                          </motion.h3>
                          <motion.p 
                            className="text-textLight leading-relaxed text-base"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.description}
                          </motion.p>
                        </div>
                      </div>
                    </GlowCard>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center">
                      <ArrowDown className="text-primary/40 w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
