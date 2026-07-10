'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Target, Eye, Heart } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import ImageReveal from './ui/ImageReveal'

export default function OurStory() {
  return (
    <section id="story" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <ImageReveal src="/assets/IMG_1195.JPG.jpeg" alt="Our Story" className="w-full h-full" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30 rounded-lg -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Our Journey</p>
            <SplitText
              text="Our Story"
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-warmWhite mb-10"
              delay={0.1}
            />

            <div className="space-y-6 text-warmWhite/70 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Founded over a decade ago, Forever Moments began with a simple belief: every love story deserves to be told with artistry, emotion, and timeless elegance.
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
                className="text-warmWhite/90"
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
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0"
                  >
                    <item.icon className="text-gold w-6 h-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-heading text-lg text-warmWhite mb-2">{item.title}</h4>
                    <p className="text-warmWhite/60 text-sm">{item.desc}</p>
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
              className="mt-12 p-8 border-l-2 border-gold/30"
            >
              <p className="font-heading text-2xl text-warmWhite/90 italic leading-relaxed">
                "We don't create photographs. We preserve legacies."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
