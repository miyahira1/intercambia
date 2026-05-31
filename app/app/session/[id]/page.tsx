import type { Metadata } from 'next'
import SessionClient from './SessionClient'

export const metadata: Metadata = {
  title: 'Sesión en curso — Intercambia',
  description: 'Sesión de intercambio de idiomas en curso. Practicá con tu compañero nativo en tiempo real.',
}

export function generateStaticParams() {
  return [{ id: 'demo' }]
}

export default function SessionPage() {
  return <SessionClient />
}
