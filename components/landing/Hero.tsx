'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero
  return (
    <section className="bg-gradient-to-br from-[#EFF6FF] to-white py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span>🇦🇷</span>
          <span>{h.badge}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {h.headline1}
          <span className="text-[#1E40AF]">{h.headline2}</span>
          <br />
          {h.headline3}
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {h.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#waitlist"
            className="bg-[#1E40AF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#1e3a8a] transition-colors shadow-md"
          >
            {h.ctaJoin}
          </Link>
          <Link
            href="#como-funciona"
            className="bg-white text-[#1E40AF] border border-[#1E40AF] px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#EFF6FF] transition-colors"
          >
            {h.ctaHow}
          </Link>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">{h.stat1v}</div>
            <div className="text-sm text-gray-500 mt-1">{h.stat1l}</div>
          </div>
          <div className="hidden sm:block w-px bg-gray-200" />
          <div>
            <div className="text-3xl font-bold text-gray-900">{h.stat2v}</div>
            <div className="text-sm text-gray-500 mt-1">{h.stat2l}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
