'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const emojis = ['💼', '🇮🇹', '🎓', '🌍']
const langPairs = ['🇦🇷 → 🇺🇸', '🇦🇷 → 🇮🇹', '🇦🇷 → 🇺🇸', '🇺🇸 → 🇦🇷']

export default function Personas() {
  const { t } = useLanguage()
  const p = t.personas
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{p.title}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{p.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {p.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start"
            >
              <div className="text-4xl shrink-0">{emojis[i]}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg">{langPairs[i]}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
