'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface LazyImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  sizes?: string
  quality?: number
  priority?: boolean
  objectFit?: 'cover' | 'contain'
  onLoad?: () => void
  onError?: () => void
}

/**
 * LazyImage — preloads images 800px before they enter the viewport
 * so they're ready by the time the user scrolls to them.
 */
export default function LazyImage({
  src,
  alt,
  fill = true,
  className = '',
  sizes,
  quality = 70,
  priority = false,
  objectFit = 'cover',
  onLoad,
  onError,
}: LazyImageProps) {
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return // already loading

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '1200px 0px', // start loading ~2 screens before entering viewport
        threshold: 0,
      }
    )

    if (wrapperRef.current) observer.observe(wrapperRef.current)

    return () => observer.disconnect()
  }, [priority])

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      {/* Shimmer skeleton shown while image hasn't loaded */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(90deg, #C9AAFA 25%, #E0CCFF 50%, #C9AAFA 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s ease-in-out infinite',
          }}
        />
      )}

      {shouldLoad && (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          className={`${objectFit === 'cover' ? 'object-cover' : 'object-contain'} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          sizes={sizes}
          quality={quality}
          onLoad={() => {
            setIsLoaded(true)
            onLoad?.()
          }}
          onError={onError}
        />
      )}
    </div>
  )
}
