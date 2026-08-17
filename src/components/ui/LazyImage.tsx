'use client'

import { useState } from 'react'
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
 * LazyImage — loads instantly with browser async decoding and smooth fade-in
 * backed by shimmer placeholder.
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
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="absolute inset-0">
      {/* Shimmer skeleton shown while image hasn't loaded */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, #F3ECF8 25%, #FAF7FD 50%, #F3ECF8 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s ease-in-out infinite',
          }}
        />
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`${objectFit === 'cover' ? 'object-cover' : 'object-contain'} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        quality={quality}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => {
          setIsLoaded(true)
          onLoad?.()
        }}
        onError={onError}
      />
    </div>
  )
}

