'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import GlowCard from './ui/GlowCard'
import SplitText from './ui/SplitText'
import MagneticButton from './ui/MagneticButton'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  eventDate: z.string().min(1, 'Event date is required'),
  eventType: z.string().min(1, 'Event type is required'),
  venue: z.string().min(1, 'Venue is required'),
  budget: z.string().min(1, 'Budget range is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted:', data)
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="section-padding bg-charcoal/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <p className="text-gold tracking-[0.4em] text-xs uppercase mb-6">Get In Touch</p>
          <SplitText
            text="Contact Us"
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-warmWhite mb-8"
            delay={0.1}
          />
          <p className="text-warmWhite/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's create something beautiful together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <GlowCard className="p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite placeholder-warmWhite/30 focus:border-gold/50 focus:outline-none transition-all duration-500"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite placeholder-warmWhite/30 focus:border-gold/50 focus:outline-none transition-all duration-500"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                    Phone
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite placeholder-warmWhite/30 focus:border-gold/50 focus:outline-none transition-all duration-500"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-2">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                    Event Date
                  </label>
                  <input
                    {...register('eventDate')}
                    type="date"
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite focus:border-gold/50 focus:outline-none transition-all duration-500"
                  />
                  {errors.eventDate && (
                    <p className="text-red-400 text-xs mt-2">{errors.eventDate.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                    Event Type
                  </label>
                  <select
                    {...register('eventType')}
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite focus:border-gold/50 focus:outline-none transition-all duration-500"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="pre-wedding">Pre-Wedding</option>
                    <option value="destination">Destination Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.eventType && (
                    <p className="text-red-400 text-xs mt-2">{errors.eventType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                    Venue
                  </label>
                  <input
                    {...register('venue')}
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite placeholder-warmWhite/30 focus:border-gold/50 focus:outline-none transition-all duration-500"
                    placeholder="Wedding venue location"
                  />
                  {errors.venue && (
                    <p className="text-red-400 text-xs mt-2">{errors.venue.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                  Budget Range
                </label>
                <select
                  {...register('budget')}
                  className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite focus:border-gold/50 focus:outline-none transition-all duration-500"
                >
                  <option value="">Select budget range</option>
                  <option value="1-3">₹1-3 Lakhs</option>
                  <option value="3-5">₹3-5 Lakhs</option>
                  <option value="5-10">₹5-10 Lakhs</option>
                  <option value="10-15">₹10-15 Lakhs</option>
                  <option value="15+">₹15+ Lakhs</option>
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-xs mt-2">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <label className="block text-warmWhite/80 text-xs tracking-[0.2em] uppercase mb-3">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full bg-background/50 border border-white/10 rounded-sm px-5 py-4 text-warmWhite placeholder-warmWhite/30 focus:border-gold/50 focus:outline-none transition-all duration-500 resize-none"
                  placeholder="Tell us about your dream wedding..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-2">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-gold to-goldLight text-background py-5 text-sm tracking-[0.3em] uppercase font-medium rounded-sm hover:shadow-[0_0_40px_rgba(201,169,98,0.3)] transition-all duration-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  )
}
