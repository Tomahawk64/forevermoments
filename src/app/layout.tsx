import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollBackground from '@/components/ScrollBackground'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '4ever Moments | Luxury Wedding Photography & Cinematography',
  description: 'Crafting timeless wedding stories. India\'s most premium wedding photography studio capturing your 4ever moments with elegance and artistry.',
  keywords: ['luxury wedding photography', 'wedding cinematography', 'destination wedding photography', 'premium wedding films', 'wedding photography India'],
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
    <html lang="en" className="dark">
      <head>
        {/* Preload the first hero image so it renders before React hydrates */}
        <link rel="preload" as="image" href="https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/hero1.jpg" fetchPriority="high" />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-body bg-background text-warmWhite antialiased`}>
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
