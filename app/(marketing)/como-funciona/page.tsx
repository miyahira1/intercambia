import type { Metadata } from 'next'
import ComoFuncionaContent from './ComoFuncionaContent'

export const metadata: Metadata = {
  title: 'Cómo funciona — Intercambia',
  description: 'Descubrí cómo funciona el intercambio de idiomas en Intercambia: el modelo 30/30, el match por IA, la seguridad y las preguntas frecuentes.',
}

export default function ComoFunciona() {
  return <ComoFuncionaContent />
}
