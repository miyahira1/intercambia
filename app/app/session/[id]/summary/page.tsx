import type { Metadata } from 'next'
import SummaryContent from './SummaryContent'

export const metadata: Metadata = {
  title: 'Resumen de sesión — Intercambia',
  description: 'Resumen de tu sesión de intercambio: vocabulario aprendido, frases clave y calificación de tu compañero.',
}

export function generateStaticParams() {
  return [{ id: 'demo' }]
}

export default function SessionSummaryPage() {
  return <SummaryContent />
}
