import type { Metadata } from 'next'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollBackground from '@/components/ScrollBackground'

export const metadata: Metadata = {
  title: '4ever Moments | Luxury Wedding Photography & Cinematography',
  description: 'Crafting timeless wedding stories. India\'s most premium wedding photography studio capturing your 4ever moments with elegance and artistry.',
  keywords: ['luxury wedding photography', 'wedding cinematography', 'destination wedding photography', 'premium wedding films', 'wedding photography India'],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: '4ever Moments | Luxury Wedding Photography',
    description: 'Crafting timeless wedding stories. We don\'t just capture your wedding. We capture your 4ever.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4ever Moments | Luxury Wedding Photography',
    description: 'Crafting timeless wedding stories.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <head>
        {/* Cloudflare R2 CDN Preconnect & DNS-Prefetch */}
        <link rel="dns-prefetch" href="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev" />
        <link rel="preconnect" href="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev" crossOrigin="anonymous" />
        
        {/* Preload the first three hero images so they render instantly before React hydrates */}
        <link rel="preload" as="image" href="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero1.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero2.jpg" />
        <link rel="preload" as="image" href="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero3.jpg" />
        
        {/* Google Fonts loaded via HTML header to support robust offline development compilation */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-text antialiased">
        <ScrollBackground />
        <LoadingScreen />
        <SmoothScroll />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
