import type { Metadata } from 'next'
import PracticeClient from './PracticeClient'
import type { Item, Topic } from '@/lib/vocab/types'

export const metadata: Metadata = {
  title: 'Práctica — SRS Vocabulario',
  description: 'Practica vocabulario e inglés con repetición espaciada.',
}

// Minimal demo seed — replaced by full seed in SRS-013
const EN_TOPICS: Topic[] = [
  { id: 't-en-basic', languageCode: 'en', name: 'Vocabulario básico', requiredLevel: 0, order: 1 },
]

const EN_ITEMS: Item[] = [
  { id: 'en-001', topicId: 't-en-basic', itemType: 'vocab_meaning', prompt: 'apple', correctAnswer: 'manzana', distractors: ['naranja', 'uva', 'pera'] },
  { id: 'en-002', topicId: 't-en-basic', itemType: 'vocab_meaning', prompt: 'book', correctAnswer: 'libro', distractors: ['mesa', 'silla', 'puerta'] },
  { id: 'en-003', topicId: 't-en-basic', itemType: 'vocab_meaning', prompt: 'house', correctAnswer: 'casa', distractors: ['coche', 'árbol', 'río'] },
  { id: 'en-004', topicId: 't-en-basic', itemType: 'grammar', prompt: 'She ___ to school every day.', correctAnswer: 'goes', distractors: ['go', 'going', 'went'] },
  { id: 'en-005', topicId: 't-en-basic', itemType: 'vocab_meaning', prompt: 'water', correctAnswer: 'agua', distractors: ['fuego', 'tierra', 'aire'] },
  { id: 'en-006', topicId: 't-en-basic', itemType: 'grammar', prompt: 'I ___ born in 1990.', correctAnswer: 'was', distractors: ['were', 'am', 'be'] },
]

const JA_TOPICS: Topic[] = [
  { id: 't-ja-basic', languageCode: 'ja', name: 'Vocabulario básico', requiredLevel: 0, order: 1 },
]

const JA_ITEMS: Item[] = [
  { id: 'ja-001', topicId: 't-ja-basic', itemType: 'vocab_meaning', prompt: '猫', correctAnswer: 'gato', distractors: ['perro', 'pájaro', 'pez'], baseWordId: 'neko' },
  { id: 'ja-002', topicId: 't-ja-basic', itemType: 'vocab_reading', prompt: '猫', correctAnswer: 'ねこ', distractors: ['いぬ', 'とり', 'さかな'], baseWordId: 'neko' },
  { id: 'ja-003', topicId: 't-ja-basic', itemType: 'vocab_meaning', prompt: '水', correctAnswer: 'agua', distractors: ['fuego', 'aire', 'tierra'] },
  { id: 'ja-004', topicId: 't-ja-basic', itemType: 'vocab_meaning', prompt: '本', correctAnswer: 'libro', distractors: ['mesa', 'silla', 'puerta'] },
  { id: 'ja-005', topicId: 't-ja-basic', itemType: 'grammar', prompt: 'わたし___ がくせいです。', correctAnswer: 'は', distractors: ['が', 'を', 'に'] },
]

export default function PracticePage() {
  return (
    <PracticeClient
      topicsByLang={{ en: EN_TOPICS, ja: JA_TOPICS }}
      itemsByLang={{ en: EN_ITEMS, ja: JA_ITEMS }}
    />
  )
}
