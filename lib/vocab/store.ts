import type { UserItemState } from './leitner'
import type { LanguageCode } from './types'

const STORAGE_KEY = 'srs_item_states'

function loadAll(): Record<string, UserItemState> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

function saveAll(data: Record<string, UserItemState>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function loadStates(languageCode: LanguageCode): Map<string, UserItemState> {
  const all = loadAll()
  const map = new Map<string, UserItemState>()
  for (const state of Object.values(all)) {
    if (state.languageCode === languageCode) {
      map.set(state.itemId, state)
    }
  }
  return map
}

export function saveState(state: UserItemState) {
  const all = loadAll()
  all[`${state.languageCode}:${state.itemId}`] = state
  saveAll(all)
}
