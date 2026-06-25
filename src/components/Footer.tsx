import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal/50 border-t border-white/5">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <h3 className="font-heading text-3xl font-light tracking-wider text-gradient mb-6">
                FOREVER MOMENTS
              </h3>
              <p className="text-warmWhite/60 text-sm leading-relaxed">
                Crafting timeless wedding stories that transcend generations. 
                We don't just capture your wedding. We capture your forever.
              </p>
            </div>

            <div>
              <h4 className="font-heading text-lg mb-6 text-gold">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Portfolio', 'Films', 'Services', 'Our Story', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      className="text-warmWhite/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg mb-6 text-gold">Services</h4>
              <ul className="space-y-3">
                {['Wedding Photography', 'Cinematography', 'Destination Weddings', 'Pre-Wedding', 'Drone Coverage', 'Luxury Albums'].map((item) => (
                  <li key={item}>
                    <span className="text-warmWhite/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg mb-6 text-gold">Connect</h4>
              <div className="space-y-4">
                <a
                  href="mailto:hello@forevermoments.com"
                  className="flex items-center space-x-3 text-warmWhite/60 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span className="text-sm">hello@forevermoments.com</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 text-warmWhite/60 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span className="text-sm">+91 98765 43210</span>
                </a>
                <div className="flex items-center space-x-3 text-warmWhite/60">
                  <MapPin size={18} />
                  <span className="text-sm">Mumbai, India</span>
                </div>
                <a
                  href="https://instagram.com/forevermoments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-warmWhite/60 hover:text-gold transition-colors duration-300"
                >
                  <Instagram size={18} />
                  <span className="text-sm">@forevermoments</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-warmWhite/40 text-sm">
              © {currentYear} Forever Moments. All rights reserved.
            </p>
            <p className="text-warmWhite/40 text-sm mt-4 md:mt-0">
              Crafted with passion for timeless love stories
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
