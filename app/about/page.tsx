import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, Award, Users, Briefcase, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Personal Fashion Guide
            </p>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl border border-border mb-12 aspect-[16/9] bg-secondary">
              <Image
                src="/stylist-photo.jpg"
                alt="About Me"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 10 years of experience in the fashion and styling industry, I've had the privilege of working with hundreds of clients to transform their wardrobes and boost their confidence. My passion for helping people discover their unique style has driven me to develop a comprehensive approach to personal styling that considers every aspect of your life.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I believe that style is not about following trends blindly—it's about understanding yourself, your body, your lifestyle, and creating a wardrobe that works for YOU. Every person has a unique story, and I'm here to help you tell it through fashion.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My expertise spans from corporate professionals looking to establish authority and confidence in the boardroom, to creative individuals wanting to express their personality through bold fashion choices. I've worked with everyone from busy executives to event attendees, and I've learned that the foundation of great style is understanding what makes each individual feel their best.
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">My Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary rounded-xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={24} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Corporate Styling</h3>
                </div>
                <p className="text-muted-foreground">
                  Helping executives and professionals build wardrobes that command respect and project confidence in any boardroom setting.
                </p>
              </div>

              <div className="bg-secondary rounded-xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={24} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Special Occasions</h3>
                </div>
                <p className="text-muted-foreground">
                  Creating memorable looks for weddings, galas, and special events. I ensure you feel confident and beautiful on your big day.
                </p>
              </div>

              <div className="bg-secondary rounded-xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={24} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Personal Transformation</h3>
                </div>
                <p className="text-muted-foreground">
                  Complete wardrobe overhauls that align your clothing with your lifestyle, body type, and personal aesthetic.
                </p>
              </div>

              <div className="bg-secondary rounded-xl border border-border p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award size={24} className="text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Style Consultation</h3>
                </div>
                <p className="text-muted-foreground">
                  Personalized color analysis, fabric recommendations, and guidance to help you understand your unique style preferences.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto text-lg">
              Ready to start your styling journey? I'd love to help you discover your best self through fashion.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
