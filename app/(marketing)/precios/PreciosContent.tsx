'use client'

import Link from 'next/link'
import WaitlistForm from '@/components/landing/WaitlistForm'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PreciosContent() {
  const { t } = useLanguage()
  const p = t.precios
  const pr = t.pricing

  return (
    <main>
      <section className="bg-gradient-to-br from-[#EFF6FF] to-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">{p.heroTitle}</h1>
          <p className="text-lg text-gray-600">{p.heroSub}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 p-8">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{pr.freeLabel}</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">
              {pr.freePrice}<span className="text-lg font-normal text-gray-400">{pr.perMonth}</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{p.freeSub}</p>
            <Link
              href="/#waitlist"
              className="block text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm"
            >
              {p.startFree}
            </Link>
          </div>

          <div className="rounded-2xl border-2 border-[#1E40AF] p-8 relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-[#1E40AF] text-white text-xs font-semibold px-3 py-1 rounded-full">{p.recommended}</span>
            </div>
            <div className="text-sm font-medium text-[#1E40AF] uppercase tracking-wide mb-2">{pr.plusLabel}</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">
              {pr.plusPrice}<span className="text-lg font-normal text-gray-400">{pr.perMonth}</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{p.plusSub}</p>
            <button disabled className="block w-full text-center bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold opacity-60 cursor-not-allowed text-sm">
              {p.comingSoon}
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">{p.comparisonTitle}</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-5 text-gray-500 font-medium">{p.feature}</th>
                  <th className="text-center py-4 px-5 text-gray-700 font-semibold">{pr.freeLabel}</th>
                  <th className="text-center py-4 px-5 text-[#1E40AF] font-semibold">{pr.plusLabel}</th>
                </tr>
              </thead>
              <tbody>
                {p.rows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="py-3 px-5 text-gray-700">{row.feature}</td>
                    <td className="py-3 px-5 text-center text-gray-500">{row.free}</td>
                    <td className="py-3 px-5 text-center text-[#1E40AF] font-medium">{row.plus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">{p.billingTitle}</h2>
          <div className="space-y-4">
            {p.billingFaqs.map((item) => (
              <details key={item.q} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-gray-900 list-none text-sm">
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
