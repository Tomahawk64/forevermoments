'use client'

import { motion } from 'framer-motion'
import { Baby, Calendar, Cake, Users, Sparkles, Baby as BabyIcon, Sparkles as FestivalIcon, HeartHandshake } from 'lucide-react'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'

const memories = [
  {
    icon: Baby,
    title: 'Baby Shower',
    description: 'Celebrating new beginnings with joy and anticipation.',
    stage: 'New Beginnings'
  },
  {
    icon: Calendar,
    title: 'First Anniversary',
    description: 'Commemorating your first year of togetherness.',
    stage: 'Milestone'
  },
  {
    icon: Cake,
    title: 'Birthday Celebrations',
    description: 'Capturing milestone birthdays with elegance.',
    stage: 'Celebration'
  },
  {
    icon: Users,
    title: 'Family Rituals',
    description: 'Documenting sacred family traditions and ceremonies.',
    stage: 'Tradition'
  },
  {
    icon: Sparkles,
    title: 'Naming Ceremony',
    description: 'Preserving the beautiful moment of welcoming your little one.',
    stage: 'Ceremony'
  },
  {
    icon: BabyIcon,
    title: 'Maternity Shoot',
    description: 'Celebrating the miracle of life with artistic maternity photography.',
    stage: 'Anticipation'
  },
  {
    icon: FestivalIcon,
    title: 'Festivals',
    description: 'Capturing the joy and colors of festive celebrations.',
    stage: 'Festival'
  },
  {
    icon: HeartHandshake,
    title: 'Family Portraits',
    description: 'Timeless family portraits that become heirlooms.',
    stage: 'Legacy'
  },
]

export default function ForeverMemories() {
  return (
    <section id="memories" className="section-padding bg-charcoal/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Beyond The Wedding</p>
          <SplitText
            text="Forever Memories"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-warmWhite/60 max-w-3xl mx-auto text-lg leading-relaxed mb-6"
          >
            "We don't just capture your wedding. We capture your forever."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-warmWhite/50 max-w-2xl mx-auto"
          >
            Our relationship doesn't end after marriage. We're here to document every milestone of your journey together.
          </motion.p>
        </motion.div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold to-gold/30 transform -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <GlowCard className="p-8 group h-full">
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-500">
                      <memory.icon className="text-gold w-7 h-7" />
                    </div>
                  </motion.div>
                  <p className="text-gold/60 text-xs tracking-[0.3em] uppercase mb-3">{memory.stage}</p>
                  <h3 className="font-heading text-xl text-warmWhite mb-3 group-hover:text-gold transition-colors duration-500 tracking-wide">
                    {memory.title}
                  </h3>
                  <p className="text-warmWhite/60 text-sm leading-relaxed">
                    {memory.description}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="font-heading text-2xl md:text-3xl text-warmWhite/70 italic max-w-3xl mx-auto leading-relaxed">
            "From 'I do' to 'I still do' and every beautiful moment in between."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
