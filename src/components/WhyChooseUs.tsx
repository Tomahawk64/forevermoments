'use client'

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Award, MapPin, Star } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const features = [
  {
    icon: Heart,
    title: 'Emotion First Storytelling',
    description: 'We capture the raw, authentic emotions that make your wedding uniquely yours. Every tear, every smile, every moment of pure joy.',
  },
  {
    icon: Award,
    title: 'Luxury Cinematic Editing',
    description: 'Our post-production team transforms raw footage into cinematic masterpieces with Hollywood-grade color grading and artistic direction.',
  },
  {
    icon: Star,
    title: 'Natural Moments',
    description: 'We believe in being invisible observers, capturing candid moments as they naturally unfold without intrusion or staging.',
  },
  {
    icon: MapPin,
    title: 'Lifetime Memories',
    description: 'From destination weddings to intimate ceremonies, we travel worldwide to preserve your love story in timeless formats.',
  },
]

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
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">Why Couples Choose Us</p>
          <SplitText
            text="The Forever Difference"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            What sets us apart in the world of luxury wedding photography.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <GlowCard className="glass-card h-full hover:shadow-glow hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="font-heading text-xl text-text mb-4 font-light">{feature.title}</h3>
                  <p className="text-textLight leading-relaxed text-sm">{feature.description}</p>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
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
              <p className="text-textLight text-xs tracking-[0.2em] uppercase font-medium">
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
          className="text-center"
        >
          <p className="font-heading text-2xl md:text-3xl text-text italic max-w-3xl mx-auto leading-relaxed font-light">
            "Every wedding is unique, and every couple deserves a visual narrative as extraordinary as their love story."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
