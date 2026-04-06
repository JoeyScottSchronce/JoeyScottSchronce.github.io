import { useState } from 'react'
import type { ProjectImage } from '../data/projects'

type ProjectImageCarouselProps = {
  images: ProjectImage[]
  className?: string
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function ProjectImageCarousel({ images, className }: ProjectImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const n = images.length

  if (n === 0) {
    return null
  }

  const slide = images[index]!
  const goNext = () => setIndex((i) => (i + 1) % n)
  const goPrev = () => setIndex((i) => (i - 1 + n) % n)

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      className={[
        'relative aspect-[11/8] w-full max-w-[550px] shrink-0 overflow-hidden rounded-[15px] mx-auto lg:mx-0',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {n}
      </p>
      {n > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-primary/40 bg-background/90 text-primary shadow-sm backdrop-blur-sm transition hover:bg-background hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-primary/40 bg-background/90 text-primary shadow-sm backdrop-blur-sm transition hover:bg-background hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  )
}
