'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg ring-1 ring-border">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/johaan-iKLgEHvCMZxk8fHaW9AtqoB8IlQRom.jpg"
              alt="Johaan Liju James"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 order-1 md:order-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Johaan Liju James
            </h1>
            <p className="text-xl text-muted-foreground">
              Computer Science Student & Full-Stack Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Passionate about blending code with creativity. Specializing in AI, web development, and electronics.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  )
}
