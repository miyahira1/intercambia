import type { Metadata } from 'next'
import SessionClient from './SessionClient'

export const metadata: Metadata = { title: 'Sesión en curso — Intercambia' }

export function generateStaticParams() {
  return [{ id: 'demo' }]
}

export default function SessionPage() {
  return <SessionClient />
}
