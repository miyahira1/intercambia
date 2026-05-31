import type { Metadata } from 'next'
import DashboardClient from './DashboardClient'
import { getAllSeedTopics, getAllSeedItems } from '@/lib/vocab/seed'

export const metadata: Metadata = {
  title: 'Dominio — SRS Vocabulario',
  description: 'Tu progreso de dominio por tema.',
}

export default function VocabDashboardPage() {
  return (
    <DashboardClient
      topicsByLang={getAllSeedTopics()}
      itemsByLang={getAllSeedItems()}
    />
  )
}
