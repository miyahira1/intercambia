import type { Metadata } from 'next'
import SummaryContent from './SummaryContent'

export const metadata: Metadata = { title: 'Resumen de sesión — Intercambia' }

export function generateStaticParams() {
  return [{ id: 'demo' }]
}

export default function SessionSummaryPage() {
  return <SummaryContent />
}
