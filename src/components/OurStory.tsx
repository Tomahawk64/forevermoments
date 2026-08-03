'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Target, Eye, Heart } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import ImageReveal from './ui/ImageReveal'

export default function OurStory() {
  return (
    <section id="story" className="section-padding bg-gradient-luxury-soft relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primaryLight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-luxury shadow-luxury">
              <img
                src="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/6.jpg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-primary/20 rounded-luxury -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">Our Journey</p>
            <SplitText
              text="Our Story"
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-10"
              delay={0.1}
            />

            <div className="space-y-6 text-textLight leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Founded over a decade ago, 4ever Moments began with a simple belief: every love story deserves to be told with artistry, emotion, and timeless elegance.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                What started as a passion project has evolved into one of India's most sought-after luxury wedding photography studios. We've had the privilege of documenting over 500 weddings across 40 destinations worldwide.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-text"
              >
                Our approach is simple: we become invisible observers, capturing authentic moments that unfold naturally. We don't pose; we preserve.
              </motion.p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { icon: Target, title: 'Mission', desc: 'To create visual legacies that transcend generations.' },
                { icon: Eye, title: 'Vision', desc: 'To be the gold standard in wedding storytelling.' },
                { icon: Award, title: 'Experience', desc: '12+ years of capturing timeless moments.' },
                { icon: Heart, title: 'Values', desc: 'Authenticity, artistry, and excellence.' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primaryDark flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300"
                  >
                    <item.icon className="text-background w-6 h-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-heading text-lg text-text mb-2 font-light">{item.title}</h4>
                    <p className="text-textLight text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 p-10 border-l-4 border-primary/30 bg-white/50 backdrop-blur-glass rounded-r-luxury"
            >
              <p className="font-heading text-2xl md:text-3xl text-text italic leading-relaxed font-light">
                "We don't create photographs. We preserve legacies."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
