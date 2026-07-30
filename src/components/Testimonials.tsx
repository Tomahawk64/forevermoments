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
    text: 'Forever Moments transformed our wedding into a cinematic masterpiece. Every photo tells a story, every frame is a work of art. They didn\'t just capture our wedding; they captured our souls. The attention to detail was extraordinary.',
    image: 'https://ui-avatars.com/api/?name=Aarav+Priya&background=CB94F7&color=fff&size=200',
  },
  {
    name: 'Rohan & Ananya',
    location: 'Jaipur Royal Wedding',
    date: 'November 2024',
    rating: 5,
    text: 'Choosing Forever Moments was the best decision we made for our wedding. Their attention to detail, artistic vision, and professionalism exceeded all expectations. Absolutely world-class service and stunning results.',
    image: 'https://ui-avatars.com/api/?name=Rohan+Ananya&background=8A53FF&color=fff&size=200',
  },
  {
    name: 'Kabir & Meera',
    location: 'Goa Beach Wedding',
    date: 'October 2024',
    rating: 5,
    text: 'The team at Forever Moments are not just photographers; they are artists who understand emotion. Looking at our wedding album brings tears of joy every single time. Pure magic in every frame.',
    image: 'https://ui-avatars.com/api/?name=Kabir+Meera&background=E7C9FF&color=1C112D&size=200',
  },
  {
    name: 'Rahul & Sneha',
    location: 'Delhi Grand Wedding',
    date: 'September 2024',
    rating: 5,
    text: 'From our first meeting to the final delivery, the experience was seamless. They made us feel like royalty, and our wedding photos reflect that elegance. Truly the best in the industry.',
    image: 'https://ui-avatars.com/api/?name=Rahul+Sneha&background=F5EDFF&color=1C112D&size=200',
  },
  {
    name: 'Arjun & Ishita',
    location: 'Mumbai Luxury Wedding',
    date: 'August 2024',
    rating: 5,
    text: 'Forever Moments has an incredible eye for capturing the most intimate moments. Our wedding film is like a Bollywood movie - we watch it every anniversary. Worth every single rupee.',
    image: 'https://ui-avatars.com/api/?name=Arjun+Ishita&background=37215A&color=fff&size=200',
  },
  {
    name: 'Vivaan & Riya',
    location: 'Bangalore Garden Wedding',
    date: 'July 2024',
    rating: 5,
    text: 'The team\'s ability to blend into the background while capturing everything is remarkable. They anticipated moments before they happened. Our photos are timeless treasures we\'ll cherish forever.',
    image: 'https://ui-avatars.com/api/?name=Vivaan+Riya&background=24153D&color=fff&size=200',
  },
  {
    name: 'Aditya & Pari',
    location: 'Jodhpur Fort Wedding',
    date: 'June 2024',
    rating: 5,
    text: 'Our destination wedding in Jodhpur was captured with such elegance and artistry. The team understood our vision perfectly and delivered beyond our wildest dreams. Absolutely breathtaking work.',
    image: 'https://ui-avatars.com/api/?name=Aditya+Pari&background=CB94F7&color=fff&size=200',
  },
  {
    name: 'Vihaan & Zara',
    location: 'Goa Destination Wedding',
    date: 'May 2024',
    rating: 5,
    text: 'Forever Moments made our beach wedding look like a fairytale. The cinematic quality of our photos and film is unmatched. They have a unique ability to capture love in its purest form.',
    image: 'https://ui-avatars.com/api/?name=Vihaan+Zara&background=8A53FF&color=fff&size=200',
  },
]

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000 })])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <section id="testimonials" className="section-padding bg-gradient-luxury-soft relative overflow-hidden">
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
          <p className="text-primary tracking-[0.4em] text-xs uppercase font-medium mb-6">Love Letters</p>
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
                    <GlowCard className="max-w-4xl mx-auto p-0 overflow-hidden rounded-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white/80 to-surface/50 backdrop-blur-glass">
                          <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="text-primary fill-primary w-5 h-5" />
                            ))}
                          </div>

                          <p className="font-heading text-xl md:text-2xl text-text italic leading-relaxed mb-8 font-light">
                            "{testimonial.text}"
                          </p>

                          <div>
                            <h4 className="font-heading text-xl text-text mb-1 font-light">{testimonial.name}</h4>
                            <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-1">{testimonial.location}</p>
                            <p className="text-textSoft text-xs">{testimonial.date}</p>
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
              className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-400 hover:shadow-glow hover:-translate-y-1"
            >
              <ChevronLeft size={28} />
            </MagneticButton>
            <MagneticButton
              onClick={scrollNext}
              className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-400 hover:shadow-glow hover:-translate-y-1"
            >
              <ChevronRight size={28} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
