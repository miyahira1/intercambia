'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, type Lang, type Translations } from '@/lib/translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  setLang: () => {},
  t: translations.es,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'es' || stored === 'en') setLangState(stored)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
