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
              className="group"
            >
              <GlowCard className="glass-card p-8 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-700 relative overflow-hidden">
                {/* Gradient Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-luxury border-2 border-primary/0"
                  whileHover={{ borderColor: 'rgba(203, 148, 247, 0.3)' }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Light Sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0"
                  whileHover={{ x: ['0%', '200%'], opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  initial={{ x: '-100%' }}
                />
                
                <motion.div
                  className="mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center shadow-sm group-hover:shadow-glow transition-all duration-500">
                    <service.icon className="text-background w-7 h-7" />
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="font-heading text-xl text-text mb-3 font-light group-hover:text-primary transition-colors duration-500 tracking-wide relative z-10"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-textLight text-sm leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
