import type { Item, Topic } from './types'
import type { UserItemState } from './leitner'

export interface SessionQueue {
  items: Item[]
  states: Map<string, UserItemState>
}

// Selects and orders items for a practice session.
// Priority:
//  1. Overdue items (dueAt <= now), sorted by box ASC then dueAt ASC
//  2. New items from the most-recently unlocked topic (no state yet)
// Prevents two consecutive occurrences of the same item.
export function buildSessionQueue(
  unlockedTopics: Topic[],
  allItems: Item[],
  stateMap: Map<string, UserItemState>,
  now: number,
  maxItems = 20,
): Item[] {
  if (unlockedTopics.length === 0) return []

  const unlockedTopicIds = new Set(unlockedTopics.map((t) => t.id))
  const eligible = allItems.filter((item) => unlockedTopicIds.has(item.topicId))

  // Split into overdue (seen before) and new (never seen)
  const overdue: Array<{ item: Item; state: UserItemState }> = []
  const newItems: Item[] = []

  for (const item of eligible) {
    const state = stateMap.get(item.id)
    if (state) {
      if (state.dueAt <= now) {
        overdue.push({ item, state })
      }
    } else {
      newItems.push(item)
    }
  }

  // Sort overdue: box ASC, then dueAt ASC
  overdue.sort((a, b) =>
    a.state.box !== b.state.box
      ? a.state.box - b.state.box
      : a.state.dueAt - b.state.dueAt,
  )

  // Fill from overdue first, then new items
  const pool: Item[] = [
    ...overdue.map((e) => e.item),
    ...newItems,
  ]

  // Prevent the same item appearing twice consecutively
  const queue: Item[] = []
  let lastId: string | null = null

  for (const item of pool) {
    if (queue.length >= maxItems) break
    if (item.id === lastId) {
      // Try to insert something else first
      const next = pool.find(
        (i) => i.id !== lastId && !queue.includes(i),
      )
      if (next) {
        queue.push(next)
        lastId = next.id
      }
      queue.push(item)
      lastId = item.id
    } else {
      queue.push(item)
      lastId = item.id
    }
  }

  return queue.slice(0, maxItems)
}

// Builds a review session using only items in box 1–2 that have been seen at least once.
// Uses the same Leitner scheduler (no parallel logic).
export function buildErrorReviewQueue(
  unlockedTopics: Topic[],
  allItems: Item[],
  stateMap: Map<string, UserItemState>,
  now: number,
  maxItems = 20,
): Item[] {
  if (unlockedTopics.length === 0) return []

  const unlockedTopicIds = new Set(unlockedTopics.map((t) => t.id))

  // Only items in box 1–2 that have been seen (lastSeenAt > 0)
  const errorItems = allItems.filter((item) => {
    if (!unlockedTopicIds.has(item.topicId)) return false
    const state = stateMap.get(item.id)
    return state !== undefined && state.lastSeenAt > 0 && state.box <= 2
  })

  // Reuse the standard queue builder on this filtered set
  // Pass all topics but only the filtered items so the overdue logic still applies
  const filteredStateMap = new Map<string, UserItemState>()
  for (const item of errorItems) {
    const s = stateMap.get(item.id)
    if (s) filteredStateMap.set(item.id, s)
  }

  return buildSessionQueue(unlockedTopics, errorItems, filteredStateMap, now, maxItems)
}
