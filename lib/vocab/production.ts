import type { Item } from './types'
import type { UserItemState } from './leitner'
import { isMastered } from './leitner'

// Every N times a mastered item appears, it becomes a production challenge.
export const PRODUCTION_FREQUENCY = 4

// Returns true if this appearance of a mastered item should be a production challenge.
// Uses correctCount to stay deterministic across sessions.
export function isProductionChallenge(state: UserItemState): boolean {
  if (!isMastered(state)) return false
  return state.correctCount > 0 && state.correctCount % PRODUCTION_FREQUENCY === 0
}

// A production challenge asks the user to type (or select the letters of) the answer.
// For now we implement it as a "reverse" multiple-choice: show the meaning, pick the word.
export interface ProductionQuestion {
  item: Item
  prompt: string   // shown in the target language (e.g. the Spanish meaning)
  options: string[]
  correctIndex: number
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Builds a reverse question: show the correct answer as prompt, options are the item prompts.
// Requires sibling items (all items in the same topic) to generate distractors.
export function buildProductionQuestion(
  item: Item,
  siblingItems: Item[],
): ProductionQuestion | null {
  // Need at least 3 other items to make 3 distractors
  const others = siblingItems.filter((i) => i.id !== item.id)
  if (others.length < 3) return null

  const distractors = shuffle(others)
    .slice(0, 3)
    .map((i) => i.prompt)
  const options = shuffle([item.prompt, ...distractors])
  const correctIndex = options.indexOf(item.prompt)

  return {
    item,
    prompt: item.correctAnswer,
    options,
    correctIndex,
  }
}
