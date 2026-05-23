import type { Metadata } from 'next'
import ProfileContent from './ProfileContent'

export const metadata: Metadata = { title: 'Mi perfil — Intercambia' }

export default function ProfilePage() {
  return <ProfileContent />
}
