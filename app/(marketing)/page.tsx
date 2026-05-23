import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import Personas from '@/components/landing/Personas'
import Pricing from '@/components/landing/Pricing'
import WaitlistForm from '@/components/landing/WaitlistForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Personas />
      <Pricing />
      <WaitlistForm />
    </main>
  )
}
