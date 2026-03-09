import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-foreground p-12 sm:p-16 lg:p-20 relative overflow-hidden">
          {/* Accent elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-foreground/10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-muted-foreground mb-8">
              <div className="w-12 h-px bg-accent"></div>
              Let's Work Together
              <div className="w-12 h-px bg-accent"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Ready to Elevate<br />Your Style?
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a complimentary consultation to discuss your style goals and discover how we can transform your wardrobe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium hover:bg-accent hover:text-foreground transition-all"
              >
                Schedule Consultation
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground font-medium hover:bg-foreground hover:text-background transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
