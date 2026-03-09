'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-foreground flex items-center justify-center relative">
              <span className="text-background font-bold text-xl tracking-tighter">A</span>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-foreground tracking-tight leading-none">ALEXANDER</div>
              <div className="text-xs text-muted-foreground tracking-widest">PORTFOLIO</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              About
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              My Work
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              Reach Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-border mt-4 pt-4">
            <Link href="/" className="block text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              Home
            </Link>
            <Link href="/about" className="block text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              About
            </Link>
            <Link href="/portfolio" className="block text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              My Work
            </Link>
            <Link href="/contact" className="block text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide uppercase">
              Reach Me
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
