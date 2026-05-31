import type { Metadata } from 'next'
import EditProfileContent from './EditProfileContent'

export const metadata: Metadata = {
  title: 'Editar perfil — Intercambia',
  description: 'Editá tu perfil en Intercambia: nombre, idiomas, nivel CEFR, intereses, bio y disponibilidad.',
}

export default function EditProfilePage() {
  return <EditProfileContent />
}
