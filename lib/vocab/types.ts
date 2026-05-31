// Supported target languages
export type LanguageCode = 'en' | 'ja'

export interface Language {
  code: LanguageCode
  name: string        // display name in Spanish
  flagEmoji: string
}

// Item type enum — extensible (add new values without breaking existing state)
export type ItemType =
  | 'vocab_meaning'  // show word → pick meaning in Spanish
  | 'vocab_reading'  // show word → pick kana/rōmaji reading
  | 'grammar'        // fill-in-the-blank grammar choice
  | 'production'     // produce the word/phrase (phase 2)

// A topic belongs to one language and unlocks at a given player level
export interface Topic {
  id: string
  languageCode: LanguageCode
  name: string              // display name in Spanish
  requiredLevel: number     // minimum player level to unlock (0 = always unlocked)
  order: number             // sort order within the language
}

// A single quiz item
export interface Item {
  id: string
  topicId: string
  itemType: ItemType
  prompt: string            // the question text shown to the user
  correctAnswer: string     // the correct option
  distractors: string[]     // exactly 3 curated wrong options
  // For Japanese vocabulary items that share a base word across layers
  baseWordId?: string
}
