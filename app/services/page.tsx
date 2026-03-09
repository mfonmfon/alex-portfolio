import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Personal Styling Consultation',
    description: 'One-on-one session to understand your style, body type, and lifestyle needs',
    icon: '👔',
    price: '$150',
    duration: '90 minutes',
    features: [
      'Style Assessment',
      'Body Type Analysis',
      'Color & Fabric Analysis',
      'Personalized Recommendations',
      'Shopping List Provided',
      'Follow-up Email Support'
    ]
  },
  {
    id: 2,
    title: 'Wardrobe Transformation',
    description: 'Complete wardrobe overhaul with curated pieces that work together seamlessly',
    icon: '✨',
    price: '$1,500',
    duration: '4-6 weeks',
    features: [
      'Full Closet Audit',
      'Personal Shopping Sessions',
      'Mix & Match Guides',
      'Styling Booklet',
      'Outfit Combinations',
      '3 Follow-up Sessions',
      'Ongoing Support'
    ]
  },
  {
    id: 3,
    title: 'Occasion Styling',
    description: 'Specialized styling for weddings, galas, corporate events, and special occasions',
    icon: '💎',
    price: '$300',
    duration: '2 hours',
    features: [
      'Event Consultation',
      'Outfit Selection',
      'Accessory Coordination',
      'Styling Day Support',
      'Hair & Makeup Coordination',
      'Last-Minute Adjustments'
    ]
  },
  {
    id: 4,
    title: 'Online Styling Service',
    description: 'Remote styling sessions and virtual consultations for maximum convenience',
    icon: '💻',
    price: '$100-300',
    duration: 'Flexible',
    features: [
      'Video Consultation',
      'Virtual Closet Review',
      'Digital Lookbooks',
      'Virtual Shopping',
      'Style Guide Creation',
      'Email Styling Advice'
    ]
  },
  {
    id: 5,
    title: 'Color & Fabric Analysis',
    description: 'Discover your best colors and fabrics based on your complexion and features',
    icon: '🎨',
    price: '$200',
    duration: '60 minutes',
    features: [
      'Color Theory Analysis',
      'Seasonal Palette',
      'Undertone Identification',
      'Fabric Recommendations',
      'Shopping Guidelines',
      'Color Swatches Provided'
    ]
  },
  {
    id: 6,
    title: 'Corporate Image Coaching',
    description: 'Professional styling for executives and business professionals',
    icon: '🏢',
    price: '$250-400',
    duration: '90 minutes',
    features: [
      'Professional Wardrobe',
      'Image Consultation',
      'Corporate Etiquette',
      'Confidence Building',
      'Executive Presence',
      'Follow-up Sessions'
    ]
  },
]

export default function ServicesPage() {
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
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Professional Styling Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive styling solutions tailored to your unique lifestyle, goals, and aspirations. Choose the service that fits your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map(service => (
              <div
                key={service.id}
                className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary"
              >
                {/* Top Color Accent */}
                <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>

                <div className="p-8">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-2">
                    {service.price}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.duration}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    className="block w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Process */}
            <div className="bg-secondary rounded-xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">My Process</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Consultation</h3>
                    <p className="text-muted-foreground text-sm">We discuss your goals, lifestyle, and style preferences</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Analysis</h3>
                    <p className="text-muted-foreground text-sm">I analyze your body type, coloring, and personal style</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Curation</h3>
                    <p className="text-muted-foreground text-sm">I curate personalized recommendations and looks for you</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Implementation</h3>
                    <p className="text-muted-foreground text-sm">Together we create a wardrobe that works for you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-secondary rounded-xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Do you offer virtual services?</h3>
                  <p className="text-muted-foreground text-sm">Yes! I offer online styling consultations and virtual shopping sessions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What is your cancellation policy?</h3>
                  <p className="text-muted-foreground text-sm">Cancellations must be made 48 hours in advance for a full refund.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can you work with a budget?</h3>
                  <p className="text-muted-foreground text-sm">Absolutely! I work with clients at all budget levels and prioritize value.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Do you provide shopping assistance?</h3>
                  <p className="text-muted-foreground text-sm">Yes, many services include personal shopping sessions and recommendations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto text-lg">
              Choose a service and let's transform your wardrobe and boost your confidence.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
            >
              Schedule Your Service
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
