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
    name: 'Aarav & Priya',
    location: 'Udaipur Palace Wedding',
    date: 'December 2024',
    rating: 5,
    text: 'We’ve both looked at the photos a hundred times and still notice new things. They caught moments we didn’t even know were happening. Genuinely couldn’t have asked for more.',
    image: 'https://ui-avatars.com/api/?name=Aarav+Priya&background=A855F7&color=fff&size=200',
  },
  {
    name: 'Rohan & Ananya',
    location: 'Jaipur Royal Wedding',
    date: 'November 2024',
    rating: 5,
    text: 'They were on time, easy to work with, and the final album genuinely took our breath away. No drama, no chasing — just really good work delivered when they said it would be.',
    image: 'https://ui-avatars.com/api/?name=Rohan+Ananya&background=B07CF0&color=1F142E&size=200',
  },
  {
    name: 'Kabir & Meera',
    location: 'Dehradun Hill Wedding',
    date: 'October 2024',
    rating: 5,
    text: 'Our families had flown in from four different cities. Every single person in those photos looks real — not posed, not awkward. That’s harder to pull off than it sounds.',
    image: 'https://ui-avatars.com/api/?name=Kabir+Meera&background=8225D4&color=fff&size=200',
  },
  {
    name: 'Rahul & Sneha',
    location: 'Delhi Grand Wedding',
    date: 'September 2024',
    rating: 5,
    text: 'I was nervous about having cameras around all day but honestly forgot they were there. When I saw the photos I was shocked at what they’d captured without us noticing.',
    image: 'https://ui-avatars.com/api/?name=Rahul+Sneha&background=EDE1F9&color=1F142E&size=200',
  },
  {
    name: 'Arjun & Ishita',
    location: 'Agra Palace Wedding',
    date: 'August 2024',
    rating: 5,
    text: 'The film they made for us is the first thing we show people when they visit. It’s three minutes long and every time it feels like reliving the whole day. We watch it on every anniversary.',
    image: 'https://ui-avatars.com/api/?name=Arjun+Ishita&background=A855F7&color=fff&size=200',
  },
  {
    name: 'Vivaan & Riya',
    location: 'Chandigarh Garden Wedding',
    date: 'July 2024',
    rating: 5,
    text: 'They clearly prepared well because they knew the venue better than we did on the day. Every corner was covered and nothing was missed. Super reliable team.',
    image: 'https://ui-avatars.com/api/?name=Vivaan+Riya&background=B07CF0&color=1F142E&size=200',
  },
  {
    name: 'Aditya & Pari',
    location: 'Jodhpur Fort Wedding',
    date: 'June 2024',
    rating: 5,
    text: 'Fort backdrop, golden hour light, and a team that actually knew how to use both. The photos look like they belong in a magazine. Our guests still message us asking who the photographer was.',
    image: 'https://ui-avatars.com/api/?name=Aditya+Pari&background=8225D4&color=fff&size=200',
  },
  {
    name: 'Vihaan & Zara',
    location: 'Lucknow Heritage Wedding',
    date: 'May 2024',
    rating: 5,
    text: 'I was worried about the heritage venue being tricky to shoot but they handled the light beautifully. The pictures are warm and real — exactly what we wanted.',
    image: 'https://ui-avatars.com/api/?name=Vihaan+Zara&background=A855F7&color=fff&size=200',
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section id="testimonials" className="section-padding bg-[#C9AAFA] relative overflow-hidden">
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
          <p className="text-[#5B21B6] tracking-[0.3em] text-sm uppercase font-semibold mb-6">Love Letters</p>
          <SplitText
            text="Our Happy Couples"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            Every love story deserves to be remembered forever.
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
                    <GlowCard className="max-w-4xl mx-auto p-0 overflow-hidden rounded-luxury shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-[#E2D0F8]">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="aspect-square overflow-hidden bg-surfaceLight">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center bg-white/12 backdrop-blur-xl">
                          <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="text-[#6D28D9] fill-[#6D28D9] w-5 h-5" />
                            ))}
                          </div>

                          <p className="font-heading text-xl md:text-2xl text-text italic leading-relaxed mb-8 font-light">
                            &ldquo;{testimonial.text}&rdquo;
                          </p>

                          <div>
                            <h4 className="font-heading text-xl text-text mb-1 font-medium">{testimonial.name}</h4>
                            <p className="text-[#5B21B6] text-sm tracking-[0.2em] uppercase font-semibold mb-1">{testimonial.location}</p>
                            <p className="text-textMuted text-xs">{testimonial.date}</p>
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
              className="w-14 h-14 rounded-full border-2 border-[#A855F7]/40 flex items-center justify-center text-[#A855F7] hover:bg-[#A855F7] hover:text-white transition-all duration-400 shadow-sm hover:-translate-y-1"
            >
              <ChevronLeft size={26} />
            </MagneticButton>
            <MagneticButton
              onClick={scrollNext}
              className="w-14 h-14 rounded-full border-2 border-[#A855F7]/40 flex items-center justify-center text-[#A855F7] hover:bg-[#A855F7] hover:text-white transition-all duration-400 shadow-sm hover:-translate-y-1"
            >
              <ChevronRight size={26} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}






