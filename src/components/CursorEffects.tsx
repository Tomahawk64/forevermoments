'use client'

import { useEffect, useRef } from 'react'

export default function CursorEffects() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only run on desktop devices with fine pointer
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let isHovering = false
    let isClicking = false
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]')
      ) {
        isHovering = true
      } else {
        isHovering = false
      }
    }

    const handleMouseDown = () => { isClicking = true }
    const handleMouseUp = () => { isClicking = false }

    const updateRing = () => {
      ringX += (mouseX - ringX) * 0.22
      ringY += (mouseY - ringY) * 0.22

      if (ringRef.current) {
        const size = isHovering ? 44 : isClicking ? 18 : 28
        const half = size / 2
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.transform = `translate3d(${ringX - half}px, ${ringY - half}px, 0)`
        ringRef.current.style.borderColor = isHovering ? 'rgba(176, 124, 240, 0.8)' : 'rgba(168, 85, 247, 0.4)'
        ringRef.current.style.backgroundColor = isHovering ? 'rgba(176, 124, 240, 0.12)' : 'transparent'
      }

      animationFrameId = requestAnimationFrame(updateRing)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })

    animationFrameId = requestAnimationFrame(updateRing)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Precision center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#A855F7] pointer-events-none z-[9999] hidden md:block will-change-transform shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Smooth trailing glow ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border border-[#A855F7]/40 pointer-events-none z-[9998] hidden md:block will-change-transform transition-[width,height,border-color,background-color] duration-150 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  )
}
