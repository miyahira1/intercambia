import type { LanguageCode } from './types'

// Interval in milliseconds for each Leitner box (1-5)
export const BOX_INTERVALS_MS: Record<number, number> = {
  1: 0,                          // immediately / next session
  2: 24 * 60 * 60 * 1000,       // ~1 day
  3: 3 * 24 * 60 * 60 * 1000,   // ~3 days
  4: 7 * 24 * 60 * 60 * 1000,   // ~7 days
  5: 16 * 24 * 60 * 60 * 1000,  // ~16 days
}

// Items in box 4 or 5 are considered "mastered"
export const MASTERED_BOX_THRESHOLD = 4

export interface UserItemState {
  userId: string
  itemId: string
  languageCode: LanguageCode
  box: 1 | 2 | 3 | 4 | 5
  dueAt: number        // timestamp ms — when the item is next due
  lastSeenAt: number   // timestamp ms
  correctCount: number
  incorrectCount: number
}

export function isMastered(state: UserItemState): boolean {
  return state.box >= MASTERED_BOX_THRESHOLD
}

// Returns updated state after a correct answer (box moves up, max 5)
export function applyCorrect(state: UserItemState, now: number): UserItemState {
  const nextBox = Math.min(state.box + 1, 5) as 1 | 2 | 3 | 4 | 5
  return {
    ...state,
    box: nextBox,
    dueAt: now + BOX_INTERVALS_MS[nextBox],
    lastSeenAt: now,
    correctCount: state.correctCount + 1,
  }
}

// Returns updated state after an incorrect answer (box resets to 1)
export function applyIncorrect(state: UserItemState, now: number): UserItemState {
  return {
    ...state,
    box: 1,
    dueAt: now + BOX_INTERVALS_MS[1],
    lastSeenAt: now,
    incorrectCount: state.incorrectCount + 1,
  }
}

// Creates initial state for a new item (never seen)
export function createInitialState(
  userId: string,
  itemId: string,
  languageCode: LanguageCode,
): UserItemState {
  return {
    userId,
    itemId,
    languageCode,
    box: 1,
    dueAt: 0,    // due immediately
    lastSeenAt: 0,
    correctCount: 0,
    incorrectCount: 0,
  }
}
