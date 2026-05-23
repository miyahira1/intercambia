'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()
  const p = t.pricing
  return (
    <section id="precios" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{p.title}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{p.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{p.freeLabel}</div>
              <div className="text-4xl font-bold text-gray-900">
                {p.freePrice}<span className="text-lg font-normal text-gray-400">{p.perMonth}</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/#waitlist"
              className="block text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              {p.startFree}
            </Link>
          </div>

          {/* Plus */}
          <div className="rounded-2xl border-2 border-[#1E40AF] p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#1E40AF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {p.recommended}
              </span>
            </div>
            <div className="mb-6">
              <div className="text-sm font-medium text-[#1E40AF] uppercase tracking-wide mb-2">{p.plusLabel}</div>
              <div className="text-4xl font-bold text-gray-900">
                {p.plusPrice}<span className="text-lg font-normal text-gray-400">{p.perMonth}</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">{p.plusNote}</div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.plusFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#1E40AF] mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button disabled className="block w-full text-center bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold opacity-60 cursor-not-allowed">
              {p.comingSoon}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">{p.footnote}</p>
      </div>
    </section>
  )
}
