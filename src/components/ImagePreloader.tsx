'use client'

import { useEffect } from 'react'

const CRITICAL_IMAGES = [
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed4.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1495.JPG.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed1.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1176.JPG.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed6.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1520.JPG.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/wed2.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/IMG_1195.JPG.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img1.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img2.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img3.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/Family%20time/img10.jpg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre1.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre2.jpeg',
  'https://pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev/prewedding/pre3.jpeg',
]

/**
 * Prewarms browser HTTP/memory cache in idle background time
 * so that when the user scrolls, images render instantly (0ms delay).
 */
export default function ImagePreloader() {
  useEffect(() => {
    const preload = () => {
      CRITICAL_IMAGES.forEach((url) => {
        const img = new window.Image()
        img.src = url
      })
    }

    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(preload, { timeout: 2000 })
      return () => (window as any).cancelIdleCallback(id)
    } else {
      const timer = setTimeout(preload, 300)
      return () => clearTimeout(timer)
    }
  }, [])

  return null
}
