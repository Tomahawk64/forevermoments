'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SplitText from './ui/SplitText'

const stats = [
  { number: 500, label: 'Luxury Weddings', suffix: '+' },
  { number: 12, label: 'Years', suffix: '+' },
  { number: 40, label: 'Destinations', suffix: '+' },
  { number: 100, label: 'Client Satisfaction', suffix: '%' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Our Impact</p>
          <SplitText
            text="Why Choose Us"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <p className="text-warmWhite/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Numbers that speak volumes about our commitment to excellence.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-6"
              >
                <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-gradient tracking-tight">
                  {stat.number}
                  {stat.suffix}
                </span>
              </motion.div>
              <p className="text-warmWhite/50 text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="font-heading text-2xl md:text-3xl text-warmWhite/70 italic max-w-3xl mx-auto leading-relaxed">
            "Every wedding is unique, and every couple deserves a visual narrative as extraordinary as their love story."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
