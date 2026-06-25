'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your vision, preferences, and the unique story you want to tell.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Meticulous planning of shots, timelines, and creative direction to ensure nothing is missed.',
  },
  {
    number: '03',
    title: 'Shoot',
    description: 'Our team becomes invisible observers, capturing authentic moments as they naturally unfold.',
  },
  {
    number: '04',
    title: 'Editing',
    description: 'Artistic post-production where raw footage transforms into cinematic masterpieces.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Presentation of your complete visual legacy in premium formats and luxury albums.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-charcoal/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">How We Work</p>
          <SplitText
            text="Our Process"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <p className="text-warmWhite/60 max-w-2xl mx-auto text-lg leading-relaxed">
            A carefully crafted journey from vision to legacy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold to-gold/50 transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Number Badge */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-background border-2 border-gold items-center justify-center z-10">
                  <span className="font-heading text-xl text-gold">{step.number}</span>
                </div>

                {/* Mobile Number Badge */}
                <div className="lg:hidden w-20 h-20 rounded-full bg-background border-2 border-gold flex items-center justify-center">
                  <span className="font-heading text-xl text-gold">{step.number}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                  <GlowCard className="group">
                    <h3 className="font-heading text-2xl text-warmWhite mb-3 group-hover:text-gold transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-warmWhite/60 leading-relaxed">{step.description}</p>
                  </GlowCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center">
                    <ArrowDown className="text-gold/50 w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
