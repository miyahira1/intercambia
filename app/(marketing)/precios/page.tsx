import type { Metadata } from 'next'
import PreciosContent from './PreciosContent'

export const metadata: Metadata = {
  title: 'Precios — Intercambia',
  description: 'Planes gratuito y Plus de Intercambia. Empezá gratis con 4 sesiones por mes o pasá a Plus para sesiones ilimitadas y funciones avanzadas.',
}

export default function PreciosPage() {
  return <PreciosContent />
}
