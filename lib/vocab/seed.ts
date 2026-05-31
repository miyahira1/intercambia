import type { Item, Topic, LanguageCode } from './types'
import seedEn from '@/data/seed-en.json'
import seedJa from '@/data/seed-ja.json'

interface SeedFile {
  topics: Topic[]
  items: Item[]
}

const seeds: Record<LanguageCode, SeedFile> = {
  en: seedEn as SeedFile,
  ja: seedJa as SeedFile,
}

export function getSeedTopics(lang: LanguageCode): Topic[] {
  return seeds[lang]?.topics ?? []
}

export function getSeedItems(lang: LanguageCode): Item[] {
  return seeds[lang]?.items ?? []
}

export function getAllSeedTopics(): Record<LanguageCode, Topic[]> {
  return { en: getSeedTopics('en'), ja: getSeedTopics('ja') }
}

export function getAllSeedItems(): Record<LanguageCode, Item[]> {
  return { en: getSeedItems('en'), ja: getSeedItems('ja') }
}
