'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram as InstagramIcon } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import MagneticButton from './ui/MagneticButton'

const posts = [
  { id: 1, src: '/assets/6797344ddd248_2gx7ek35mmee1-jpeg__700.webp', likes: '2.4k' },
  { id: 2, src: '/assets/67974a46729b5_wildlife-photography.webp', likes: '3.1k' },
  { id: 3, src: '/assets/A-Different-Perspective-by-Bingqian-Gao-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', likes: '1.8k' },
  { id: 4, src: '/assets/After-The-Rain-by-Nikita-Chicherin-The-Nature-Photography-Contest-2025-Birds-Finalist.webp', likes: '2.9k' },
  { id: 5, src: '/assets/Amplified-Intimidation-by-Tom-Hendrickson-The-Nature-Photography-Contest-2025-Wildlife-Finalist.webp', likes: '4.2k' },
  { id: 6, src: '/assets/Bret-Saalwaechter_I-Just-Cant-Wait-To-Be-King.webp', likes: '2.7k' },
]

export default function Instagram() {
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
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Follow Us</p>
          <SplitText
            text="@forevermoments"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <p className="text-warmWhite/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Join our community of love stories on Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group cursor-pointer"
            >
              <GlowCard className="p-0 overflow-hidden aspect-square">
                <Image
                  src={post.src}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <InstagramIcon className="text-gold w-8 h-8" />
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <MagneticButton className="inline-flex items-center gap-3 px-10 py-4 border border-gold/50 text-gold text-sm tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-gold hover:text-background hover:shadow-[0_0_40px_rgba(201,169,98,0.3)] transition-all duration-500">
            <InstagramIcon className="w-5 h-5" />
            Follow on Instagram
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
