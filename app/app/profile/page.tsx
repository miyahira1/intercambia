import type { Metadata } from 'next'
import ProfileContent from './ProfileContent'

export const metadata: Metadata = {
  title: 'Mi perfil — Intercambia',
  description: 'Tu perfil en Intercambia: idiomas, nivel CEFR, intereses y estadísticas de sesiones.',
}

export default function ProfilePage() {
  return <ProfileContent />
}
