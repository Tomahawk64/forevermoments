'use client'

import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import MagneticButton from './ui/MagneticButton'

const testimonials = [
  {
    name: 'Priya & Rahul',
    location: 'Udaipur Wedding',
    rating: 5,
    text: 'Forever Moments transformed our wedding into a cinematic masterpiece. Every photo tells a story, every frame is a work of art. They didn\'t just capture our wedding; they captured our souls.',
    image: '/assets/6797344ddd248_2gx7ek35mmee1-jpeg__700.webp',
  },
  {
    name: 'Ananya & Vikram',
    location: 'Destination Wedding - Maldives',
    rating: 5,
    text: 'Choosing Forever Moments was the best decision we made for our wedding. Their attention to detail, artistic vision, and professionalism exceeded all expectations. Absolutely world-class.',
    image: '/assets/67974a46729b5_wildlife-photography.webp',
  },
  {
    name: 'Meera & Arjun',
    location: 'Mumbai Royal Wedding',
    rating: 5,
    text: 'The team at Forever Moments are not just photographers; they are artists who understand emotion. Looking at our wedding album brings tears of joy every single time.',
    image: '/assets/After-The-Rain-by-Nikita-Chicherin-The-Nature-Photography-Contest-2025-Birds-Finalist.webp',
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section id="testimonials" className="section-padding bg-charcoal/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Love Letters</p>
          <SplitText
            text="Testimonials"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <p className="text-warmWhite/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Words from couples who trusted us with their forever moments.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                  >
                    <GlowCard className="max-w-4xl mx-auto p-0 overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex gap-1 mb-8">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="text-gold fill-gold w-5 h-5" />
                            ))}
                          </div>

                          <p className="font-heading text-xl md:text-2xl text-warmWhite/90 italic leading-relaxed mb-8">
                            "{testimonial.text}"
                          </p>

                          <div>
                            <h4 className="font-heading text-xl text-warmWhite mb-2">{testimonial.name}</h4>
                            <p className="text-gold text-sm tracking-[0.2em] uppercase">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <MagneticButton
              onClick={scrollPrev}
              className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-500"
            >
              <ChevronLeft size={24} />
            </MagneticButton>
            <MagneticButton
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-500"
            >
              <ChevronRight size={24} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
