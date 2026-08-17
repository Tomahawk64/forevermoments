'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Target, Eye, Heart } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import ImageReveal from './ui/ImageReveal'

export default function OurStory() {
  return (
    <section id="story" className="section-padding bg-white relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#A855F7]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#B07CF0]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-luxury shadow-luxury-lg border border-[rgba(255,255,255,0.30)]">
              <Image
                src="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed6.jpg"
                alt="Our Story"
                fill
                className="object-cover"
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-[#A855F7]/30 rounded-luxury -z-10"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#5B21B6] tracking-[0.3em] text-sm uppercase font-semibold mb-6">Our Journey</p>
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
                4EVER MOMENTS started with one simple idea — that your wedding day deserves more than just good photos. It deserves someone who actually cares about what those moments mean to you.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Over the past 5 years we&apos;ve had the honour of being trusted by over 100 couples across North India and beyond. Every wedding has taught us something new — and that curiosity is what keeps our work feeling fresh and personal.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-text font-medium"
              >
                We stay out of the way, move quietly through the day, and pay attention to the small things — a glance, a held hand, the way someone laughs when they&apos;re truly happy. That&apos;s what we&apos;re here to capture.
              </motion.p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-12">
              {[
                { icon: Target, title: 'Mission', desc: 'To craft visual legacies so vivid, future generations feel present.' },
                { icon: Eye, title: 'Vision', desc: 'To redefine premium wedding storytelling across India.' },
                { icon: Award, title: 'Experience', desc: '5+ years. 100+ weddings. Zero compromises.' },
                { icon: Heart, title: 'Values', desc: 'Discretion, artistry, and an obsession with excellence.' },
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
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-[#BA88F8] via-[#A855F7] to-[#8225D4] flex items-center justify-center flex-shrink-0 shadow-[0_6px_20px_rgba(168,85,247,0.35)]"
                  >
                    <item.icon className="text-white w-6 h-6" />
                  </motion.div>
                  <div>
                    <h4 className="font-heading text-lg text-text mb-1 font-medium">{item.title}</h4>
                    <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
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
              className="mt-12 p-8 sm:p-10 border-l-4 border-[#A855F7] bg-white/12 backdrop-blur-md rounded-r-luxury shadow-luxury border border-l-0 border-[rgba(255,255,255,0.30)]"
            >
              <p className="font-heading text-2xl md:text-3xl text-text italic leading-relaxed font-light">
                &ldquo;Every frame we take is a promise kept.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}






