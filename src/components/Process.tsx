'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Camera, Calendar, Sparkles, Scissors, Gift } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your vision, preferences, and the unique story you want to tell through intimate conversations.',
    icon: Camera,
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Meticulous planning of shots, timelines, and creative direction to ensure every precious moment is captured flawlessly.',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Capture',
    description: 'Our team becomes invisible observers, capturing authentic emotions and candid moments as they naturally unfold.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Artistry',
    description: 'Artistic post-production where raw footage transforms into cinematic masterpieces with luxury color grading.',
    icon: Scissors,
  },
  {
    number: '05',
    title: 'Legacy',
    description: 'Presentation of your complete visual legacy in premium formats, luxury albums, and timeless digital galleries.',
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
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">How We Work</p>
          <SplitText
            text="Our Process"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            A carefully crafted journey from vision to legacy.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 transform -translate-x-1/2 shadow-glow" />

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
                  {/* Timeline Circle - Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primaryDark items-center justify-center z-10 shadow-glow">
                    <span className="font-heading text-lg text-background font-medium">{step.number}</span>
                  </div>

                  {/* Timeline Circle - Mobile */}
                  <div className="lg:hidden w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center shadow-glow mb-4">
                    <span className="font-heading text-lg text-background font-medium">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-20' : 'lg:text-left lg:pl-20'}`}>
                    <GlowCard className="glass-card hover:shadow-glow hover:-translate-y-1 transition-all duration-500 group">
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl text-text mb-3 font-light group-hover:text-primary transition-colors duration-500">
                            {step.title}
                          </h3>
                          <p className="text-textLight leading-relaxed text-base">{step.description}</p>
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
