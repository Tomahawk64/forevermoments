'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle')
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      event_date: data.eventDate,
      event_type: data.eventType,
      venue: data.venue,
      budget: data.budget,
      message: data.message,
    }
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      // Send auto-reply to the client
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-[#C9AAFA] relative overflow-hidden">
      {/* Floating Gradient Blobs */}
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
          <p className="text-[#5B21B6] tracking-[0.3em] text-sm uppercase font-semibold mb-6">Get In Touch</p>
          <SplitText
            text="Contact Us"
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-text mb-8"
            delay={0.1}
          />
          <p className="text-textLight max-w-2xl mx-auto text-lg leading-relaxed">
            Let&apos;s create something beautiful together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <GlowCard className="glass-card bg-white/15 border-[rgba(255,255,255,0.30)] p-8 md:p-12 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 relative overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text placeholder:text-[#4A2875] focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text placeholder:text-[#4A2875] focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Phone
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text placeholder:text-[#4A2875] focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400"
                    placeholder="+91 89205 57478"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Event Date
                  </label>
                  <input
                    {...register('eventDate')}
                    type="date"
                    className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400"
                  />
                  {errors.eventDate && (
                    <p className="text-red-500 text-xs mt-2">{errors.eventDate.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Event Type
                  </label>
                  <select
                    {...register('eventType')}
                    className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400"
                  >
                    <option value="" className="bg-white text-text">Select event type</option>
                    <option value="wedding" className="bg-white text-text">Wedding</option>
                    <option value="pre-wedding" className="bg-white text-text">Pre-Wedding</option>
                    <option value="destination" className="bg-white text-text">Destination Wedding</option>
                    <option value="engagement" className="bg-white text-text">Engagement</option>
                    <option value="other" className="bg-white text-text">Other</option>
                  </select>
                  {errors.eventType && (
                    <p className="text-red-500 text-xs mt-2">{errors.eventType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Venue
                  </label>
                  <input
                    {...register('venue')}
                    className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text placeholder:text-[#4A2875] focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400"
                    placeholder="Wedding venue location"
                  />
                  {errors.venue && (
                    <p className="text-red-500 text-xs mt-2">{errors.venue.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                  Budget Range
                </label>
                <select
                  {...register('budget')}
                  className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400"
                >
                  <option value="" className="bg-white text-text">Select budget range</option>
                  <option value="1-3" className="bg-white text-text">₹1-3 Lakhs</option>
                  <option value="3-5" className="bg-white text-text">₹3-5 Lakhs</option>
                  <option value="5-10" className="bg-white text-text">₹5-10 Lakhs</option>
                  <option value="10-15" className="bg-white text-text">₹10-15 Lakhs</option>
                  <option value="15+" className="bg-white text-text">₹15+ Lakhs</option>
                </select>
                {errors.budget && (
                  <p className="text-red-500 text-xs mt-2">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <label className="block text-text text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full bg-white/15 backdrop-blur-sm border border-[rgba(255,255,255,0.35)] rounded-input px-5 py-4 text-text placeholder:text-[#4A2875] focus:border-[#A855F7] focus:shadow-[0_0_20px_rgba(168,85,247,0.25)] focus:outline-none transition-all duration-400 resize-none"
                  placeholder="Tell us about your dream wedding..."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-2">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#BA88F8] via-[#A855F7] to-[#8225D4] text-white py-5 text-sm tracking-[0.25em] uppercase font-semibold rounded-button shadow-[0_10px_35px_rgba(168,85,247,0.45)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.65)] transition-all duration-400 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-input text-green-600"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Message sent! We&apos;ll be in touch soon.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-input text-red-500"
                >
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Something went wrong. Please try again or contact us directly.</p>
                </motion.div>
              )}
            </form>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  )
}






