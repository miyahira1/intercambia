import type { Topic, LanguageCode } from './types'
import type { UserItemState } from './leitner'
import { isMastered } from './leitner'

// Items required to level up (cumulative mastered items per level)
export const ITEMS_PER_LEVEL = 5

export function computePlayerLevel(states: UserItemState[], languageCode: LanguageCode): number {
  const masteredCount = states.filter(
    (s) => s.languageCode === languageCode && isMastered(s),
  ).length
  return Math.floor(masteredCount / ITEMS_PER_LEVEL)
}

export function getUnlockedTopics(topics: Topic[], playerLevel: number): Topic[] {
  return topics.filter((t) => t.requiredLevel <= playerLevel)
}

export interface LevelProgress {
  level: number
  masteredCount: number
  itemsToNextLevel: number
}

export function computeLevelProgress(
  states: UserItemState[],
  languageCode: LanguageCode,
): LevelProgress {
  const masteredCount = states.filter(
    (s) => s.languageCode === languageCode && isMastered(s),
  ).length
  const level = Math.floor(masteredCount / ITEMS_PER_LEVEL)
  const itemsToNextLevel = ITEMS_PER_LEVEL - (masteredCount % ITEMS_PER_LEVEL)
  return { level, masteredCount, itemsToNextLevel }
}
