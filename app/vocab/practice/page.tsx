import type { Metadata } from 'next'
import PracticeClient from './PracticeClient'
import { getAllSeedTopics, getAllSeedItems } from '@/lib/vocab/seed'

export const metadata: Metadata = {
  title: 'Práctica — SRS Vocabulario',
  description: 'Practica vocabulario e inglés con repetición espaciada.',
}

export default function PracticePage() {
  return (
    <PracticeClient
      topicsByLang={getAllSeedTopics()}
      itemsByLang={getAllSeedItems()}
    />
  )
}
