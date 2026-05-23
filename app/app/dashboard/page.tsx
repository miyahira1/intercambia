import type { Metadata } from 'next'
import DashboardContent from './DashboardContent'

export const metadata: Metadata = { title: 'Dashboard — Intercambia' }

export default function Dashboard() {
  return <DashboardContent />
}
