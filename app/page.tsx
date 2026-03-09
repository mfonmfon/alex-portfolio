import Header from '@/components/header'
import Hero from '@/components/hero'
import PortfolioPreview from '@/components/portfolio-preview'
import About from '@/components/about'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <PortfolioPreview />
      <About />
      <Footer />
    </main>
  )
}
