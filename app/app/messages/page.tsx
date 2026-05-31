import type { Metadata } from 'next'
import MessagesContent from './MessagesContent'

export const metadata: Metadata = {
  title: 'Mensajes — Intercambia',
  description: 'Tus conversaciones con compañeros de intercambio en Intercambia.',
}

export default function MessagesPage() {
  return <MessagesContent />
}
