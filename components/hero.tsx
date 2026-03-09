import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
      {/* Minimal geometric accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-foreground rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-foreground -rotate-12 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground">
                <div className="w-12 h-px bg-accent"></div>
                Fashion Stylist
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] text-foreground tracking-tight">
                Style.<br />
                Refined.
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-xl">
               From red carpet moments to everyday elegance, I create distinctive styles experiences that reflect your unique personality and vision.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-accent transition-colors"
            >
              Explore Work
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary border border-border">
              <Image 
                src="/stylist-hero.jpg" 
                alt="Fashion Stylist" 
                fill
                className="object-cover"
                priority
              />
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-foreground/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
