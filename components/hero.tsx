import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero/third-hero.jpeg" 
          alt="Fashion Stylist" 
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 -ml-4">
            <span className="text-sm tracking-widest uppercase text-white font-medium">Fashion Stylist</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white tracking-tight max-w-4xl">
            Style.<br />
            Refined.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
            From red carpet moments to everyday elegance, I create distinctive styles experiences that reflect your unique personality and vision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-white text-foreground rounded-lg font-semibold hover:bg-white/90 transition-all inline-flex items-center gap-2 text-lg"
            >
              Explore Work
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-foreground transition-all text-lg"
            >
              Reach Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
