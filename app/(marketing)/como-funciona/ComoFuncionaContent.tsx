'use client'

import WaitlistForm from '@/components/landing/WaitlistForm'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ComoFuncionaContent() {
  const { t } = useLanguage()
  const c = t.comoFunciona

  return (
    <main>
      <section className="bg-gradient-to-br from-[#EFF6FF] to-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">{c.heroTitle}</h1>
          <p className="text-lg text-gray-600">{c.heroSub}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.model30Title}</h2>
          <div className="bg-[#F8FAFF] border border-[#DBEAFE] rounded-2xl p-8 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center">
              <div className="flex-1">
                <div className="text-4xl mb-3">🇦🇷</div>
                <div className="font-semibold text-gray-900">{c.first30}</div>
                <div className="text-gray-500 text-sm mt-1">{c.first30sub}</div>
              </div>
              <div className="text-3xl text-gray-300 font-light">⇄</div>
              <div className="flex-1">
                <div className="text-4xl mb-3">🌍</div>
                <div className="font-semibold text-gray-900">{c.second30}</div>
                <div className="text-gray-500 text-sm mt-1">{c.second30sub}</div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">{c.model30body}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.aiTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{c.aiBody}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {c.aiTags.map((item) => (
              <div key={item} className="bg-white rounded-xl p-4 border border-gray-100 text-sm text-gray-700 font-medium text-center shadow-sm">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{c.safetyTitle}</h2>
          <ul className="space-y-4 text-gray-600">
            {c.safetyItems.map((item) => (
              <li key={item.text} className="flex gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faqs.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl border border-gray-100 shadow-sm">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-gray-900 list-none">
                  {item.q}
                  <span className="text-[#1E40AF] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <WaitlistForm />
    </main>
  )
}
