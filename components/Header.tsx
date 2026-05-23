'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang, setLang } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#1E40AF]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3 8h16M3 8l4-4M3 8l4 4M19 14H3M19 14l-4-4M19 14l-4 4" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Intercambia
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-[#1E40AF] transition-colors">{t.header.home}</Link>
          <Link href="/como-funciona" className="hover:text-[#1E40AF] transition-colors">{t.header.howItWorks}</Link>
          <Link href="/precios" className="hover:text-[#1E40AF] transition-colors">{t.header.pricing}</Link>
          <Link href="/app/dashboard" className="hover:text-[#1E40AF] transition-colors">{t.header.login}</Link>
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="border border-gray-200 text-gray-600 px-3 py-1.5 rounded-lg hover:border-[#1E40AF] hover:text-[#1E40AF] transition-colors text-xs font-semibold"
            aria-label="Switch language"
          >
            {t.header.switchLang}
          </button>
          <Link
            href="/#waitlist"
            className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg hover:bg-[#1e3a8a] transition-colors"
          >
            {t.header.joinFree}
          </Link>
        </nav>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="border border-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-semibold"
          >
            {t.header.switchLang}
          </button>
          <button
            className="p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-4 pt-4 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-[#1E40AF]">{t.header.home}</Link>
            <Link href="/como-funciona" onClick={() => setMenuOpen(false)} className="hover:text-[#1E40AF]">{t.header.howItWorks}</Link>
            <Link href="/precios" onClick={() => setMenuOpen(false)} className="hover:text-[#1E40AF]">{t.header.pricing}</Link>
            <Link href="/app/dashboard" onClick={() => setMenuOpen(false)} className="hover:text-[#1E40AF]">{t.header.login}</Link>
            <Link
              href="/#waitlist"
              onClick={() => setMenuOpen(false)}
              className="bg-[#1E40AF] text-white px-4 py-2 rounded-lg text-center hover:bg-[#1e3a8a] transition-colors"
            >
              {t.header.joinFree}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
