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
    description: 'We’re not here to pose you or direct a show. We watch, we wait, and we catch what’s real.',
  },
  {
    icon: Award,
    title: 'Premium Cinematic Editing',
    description: 'Our editing is deliberate and unhurried. Colour, light, pacing — everything is worked on until it feels right.',
  },
  {
    icon: Star,
    title: 'Natural Moments',
    description: 'We move quietly through your day and try hard not to be noticed — which usually means better photos.',
  },
  {
    icon: MapPin,
    title: 'Lifetime Memories',
    description: 'Whether it’s a grand banquet hall in Delhi or a quiet mandap in the hills — we show up fully prepared.',
  },
]

const stats = [
  { number: 100, label: 'Premium Weddings', suffix: '+' },
  { number: 5, label: 'Years', suffix: '+' },
  { number: 20, label: 'Destinations', suffix: '+' },
  { number: 100, label: 'Client Satisfaction', suffix: '%' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-gradient-luxury relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#A855F7]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#B07CF0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-[#5B21B6] tracking-[0.3em] text-sm uppercase font-semibold mb-6">Why Forever Moments</p>
          <SplitText
            text="The Art of Storytelling"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            We don&apos;t just document events. We craft heirlooms.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full"
            >
              <GlowCard className="glass-card bg-white/12 border-[rgba(255,255,255,0.30)] p-8 md:p-10 flex flex-col justify-between h-full shadow-luxury hover:shadow-luxury-lg transition-all duration-500">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-[#BA88F8] via-[#A855F7] to-[#8225D4] flex items-center justify-center mb-6 shadow-[0_6px_20px_rgba(168,85,247,0.35)]"
                  >
                    <feature.icon className="text-white w-7 h-7" />
                  </motion.div>

                  <h3 className="font-heading text-2xl text-text mb-4 font-medium">{feature.title}</h3>
                  <p className="text-textLight text-base leading-relaxed">{feature.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 mt-20">
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
                <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gradient tracking-tight">
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
          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-text italic max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            &ldquo;Every wedding is unique, and every couple deserves a visual narrative as extraordinary as their love story.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}


