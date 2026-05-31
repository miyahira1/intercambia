import type { LanguageCode } from './types'

const STORAGE_KEY = 'srs_active_language'
const DEFAULT: LanguageCode = 'en'

export function loadActiveLanguage(): LanguageCode {
  if (typeof window === 'undefined') return DEFAULT
  const v = localStorage.getItem(STORAGE_KEY)
  return v === 'en' || v === 'ja' ? v : DEFAULT
}

export function saveActiveLanguage(lang: LanguageCode) {
  localStorage.setItem(STORAGE_KEY, lang)
}
