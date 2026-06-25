import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
  title: 'Forever Moments | Luxury Wedding Photography & Cinematography',
  description: 'Crafting timeless wedding stories. India\'s most premium wedding photography studio capturing your forever moments with elegance and artistry.',
  keywords: ['luxury wedding photography', 'wedding cinematography', 'destination wedding photography', 'premium wedding films', 'wedding photography India'],
  openGraph: {
    title: 'Forever Moments | Luxury Wedding Photography',
    description: 'Crafting timeless wedding stories. We don\'t just capture your wedding. We capture your forever.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forever Moments | Luxury Wedding Photography',
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
      <body className={`${cormorant.variable} ${inter.variable} font-body bg-background text-warmWhite antialiased`}>
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
