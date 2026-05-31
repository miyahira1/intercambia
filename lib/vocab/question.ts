import type { Item } from './types'

export interface Question {
  item: Item
  options: string[]        // 4 shuffled options (1 correct + 3 distractors)
  correctIndex: number     // index of the correct option in `options`
}

// Fisher-Yates shuffle (returns a new array)
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Builds a Question from an Item.
// Distractors come from the curated item.distractors list (exactly 3 expected).
// The 4 options are shuffled each call.
export function buildQuestion(item: Item): Question {
  const distractors = item.distractors.slice(0, 3)
  const all = shuffle([item.correctAnswer, ...distractors])
  const correctIndex = all.indexOf(item.correctAnswer)
  return { item, options: all, correctIndex }
}
