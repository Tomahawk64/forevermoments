'use client'

import { motion } from 'framer-motion'
import { Camera, Video, MapPin, Heart, Plane, Radio, Book, Instagram as InstagramIcon } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Capturing every precious moment with artistic precision and emotional depth.',
  },
  {
    icon: Video,
    title: 'Wedding Cinematography',
    description: 'Cinematic films that tell your love story with Hollywood-quality production.',
  },
  {
    icon: MapPin,
    title: 'Destination Weddings',
    description: 'Traveling worldwide to capture your dream wedding in exotic locations.',
  },
  {
    icon: Heart,
    title: 'Pre Wedding',
    description: 'Romantic pre-wedding shoots that celebrate your journey together.',
  },
  {
    icon: Plane,
    title: 'Drone Coverage',
    description: 'Breathtaking aerial perspectives that add grandeur to your wedding film.',
  },
  {
    icon: Radio,
    title: 'Live Streaming',
    description: 'Broadcast your celebration to loved ones across the world in real-time.',
  },
  {
    icon: Book,
    title: 'Luxury Albums',
    description: 'Handcrafted premium albums that preserve your memories for generations.',
  },
  {
    icon: InstagramIcon,
    title: 'Social Media Reels',
    description: 'Trendy, shareable content perfect for modern social media storytelling.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-luxury-soft relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primaryLight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">What We Offer</p>
          <SplitText
            text="Signature Services"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive photography and cinematography solutions for your special day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <GlowCard className="glass-card p-8 group hover:shadow-glow hover:-translate-y-2 transition-all duration-500">
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-background w-7 h-7" />
                  </div>
                </motion.div>
                <h3 className="font-heading text-xl text-text mb-3 font-light group-hover:text-primary transition-colors duration-500 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-textLight text-sm leading-relaxed">
                  {service.description}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
