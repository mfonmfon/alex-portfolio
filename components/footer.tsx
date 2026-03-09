import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-background flex items-center justify-center relative">
                <span className="text-foreground font-bold text-xl tracking-tighter">A</span>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent"></div>
              </div>
              <div>
                <div className="text-sm font-bold tracking-tight leading-none">ALEXANDER</div>
                <div className="text-xs text-background/60 tracking-widest">PORTFOLIO</div>
              </div>
            </Link>
            <p className="text-background/70 text-sm max-w-sm leading-relaxed">
              Fashion stylist portfolio showcasing contemporary men's style and wardrobe design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-background/20 hover:border-accent hover:bg-accent transition-all flex items-center justify-center text-sm">
                IG
              </a>
              <a href="#" className="w-10 h-10 border border-background/20 hover:border-accent hover:bg-accent transition-all flex items-center justify-center text-sm">
                LI
              </a>
              <a href="#" className="w-10 h-10 border border-background/20 hover:border-accent hover:bg-accent transition-all flex items-center justify-center text-sm">
                TW
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm tracking-widest uppercase mb-6">Contact</h3>
            <div className="space-y-4 text-sm text-background/70">
              <p>
                <a href="mailto:alexawharota723@gmail.com" className="hover:text-accent transition-colors">
                  alexawharota723@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+2348178288205" className="hover:text-accent transition-colors">
                  +234 817 828 8205
                </a>
              </p>
              <p className="leading-relaxed">
                Ogudu Ojota, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>
            © {currentYear} Fashion Stylist Portfolio
          </p>

          <div className="flex gap-6">
            <Link href="/portfolio" className="hover:text-accent transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
