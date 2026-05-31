import type { Metadata } from 'next'
import PracticeClient from './PracticeClient'
import type { Item, Topic } from '@/lib/vocab/types'

export const metadata: Metadata = {
  title: 'Práctica — SRS Vocabulario',
  description: 'Practica vocabulario e inglés con repetición espaciada.',
}

// Minimal demo seed — replaced by full seed in SRS-013
const DEMO_TOPICS: Topic[] = [
  { id: 't-en-basic', languageCode: 'en', name: 'Vocabulario básico', requiredLevel: 0, order: 1 },
]

const DEMO_ITEMS: Item[] = [
  {
    id: 'en-001', topicId: 't-en-basic', itemType: 'vocab_meaning',
    prompt: 'apple', correctAnswer: 'manzana',
    distractors: ['naranja', 'uva', 'pera'],
  },
  {
    id: 'en-002', topicId: 't-en-basic', itemType: 'vocab_meaning',
    prompt: 'book', correctAnswer: 'libro',
    distractors: ['mesa', 'silla', 'puerta'],
  },
  {
    id: 'en-003', topicId: 't-en-basic', itemType: 'vocab_meaning',
    prompt: 'house', correctAnswer: 'casa',
    distractors: ['coche', 'árbol', 'río'],
  },
  {
    id: 'en-004', topicId: 't-en-basic', itemType: 'grammar',
    prompt: 'She ___ to school every day.',
    correctAnswer: 'goes',
    distractors: ['go', 'going', 'went'],
  },
  {
    id: 'en-005', topicId: 't-en-basic', itemType: 'vocab_meaning',
    prompt: 'water', correctAnswer: 'agua',
    distractors: ['fuego', 'tierra', 'aire'],
  },
  {
    id: 'en-006', topicId: 't-en-basic', itemType: 'grammar',
    prompt: 'I ___ born in 1990.',
    correctAnswer: 'was',
    distractors: ['were', 'am', 'be'],
  },
]

export default function PracticePage() {
  return <PracticeClient topics={DEMO_TOPICS} items={DEMO_ITEMS} />
}
