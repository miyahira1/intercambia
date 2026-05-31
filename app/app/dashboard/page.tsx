import type { Metadata } from 'next'
import DashboardContent from './DashboardContent'

export const metadata: Metadata = {
  title: 'Dashboard — Intercambia',
  description: 'Tus matches recomendados, próximas sesiones y progreso de aprendizaje en Intercambia.',
}

export default function Dashboard() {
  return <DashboardContent />
}
