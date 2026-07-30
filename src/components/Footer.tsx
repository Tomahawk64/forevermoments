import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#24153D] border-t border-primary/30">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <h3 className="font-heading text-3xl font-light tracking-wider text-gradient-luxury mb-6">
                FOREVER MOMENTS
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Crafting timeless wedding stories that transcend generations. 
                We don't just capture your wedding. We capture your forever.
              </p>
              <p className="text-white/60 text-xs tracking-wider">
                Luxury Wedding Photography & Cinematography
              </p>
            </div>

            <div>
              <h4 className="font-heading text-lg mb-6 text-primaryLight font-medium">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Portfolio', 'Films', 'Pre Wedding', 'Family', 'Services', 'Our Story', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      className="text-white/80 hover:text-primaryLight transition-colors duration-300 text-sm tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg mb-6 text-primaryLight font-medium">Services</h4>
              <ul className="space-y-3">
                {['Wedding Photography', 'Cinematography', 'Destination Weddings', 'Pre-Wedding', 'Drone Coverage', 'Luxury Albums'].map((item) => (
                  <li key={item}>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg mb-6 text-primaryLight font-medium">Connect</h4>
              <div className="space-y-4">
                <a
                  href="mailto:mohityv14@gmail.com"
                  className="flex items-center space-x-3 text-white/80 hover:text-primaryLight transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span className="text-sm">mohityv14@gmail.com</span>
                </a>
                <a
                  href="tel:+918920557478"
                  className="flex items-center space-x-3 text-white/80 hover:text-primaryLight transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span className="text-sm">+91 89205 57478</span>
                </a>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin size={18} />
                  <span className="text-sm">Serving Globally</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Forever Moments. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Crafted with passion for timeless love stories
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
