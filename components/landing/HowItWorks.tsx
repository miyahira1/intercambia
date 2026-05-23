'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const emojis = ['👤', '🤝', '💬']

export default function HowItWorks() {
  const { t } = useLanguage()
  const hw = t.howItWorks
  return (
    <section id="como-funciona" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{hw.title}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{hw.sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hw.steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#F8FAFF] border border-[#DBEAFE]"
            >
              <div className="text-4xl mb-4">{emojis[i]}</div>
              <div className="w-9 h-9 rounded-full bg-[#1E40AF] text-white text-sm font-bold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
