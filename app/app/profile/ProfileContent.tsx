'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProfileContent() {
  const { t } = useLanguage()
  const p = t.profile

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-20 h-20 rounded-full bg-[#DBEAFE] flex items-center justify-center text-4xl shrink-0">😊</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-gray-900">Martín López</h1>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">{p.verified}</span>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
              <span>🇦🇷 Español ({p.native})</span>
              <span>→</span>
              <span>🇺🇸 Inglés (B1)</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Desarrollador web de Buenos Aires. Quiero mejorar mi inglés para trabajar en empresas internacionales. Me gustan la tecnología, el fútbol y el cine.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {['tecnología', 'fútbol', 'cine', 'música', 'viajes'].map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-[#1E40AF]">7</div>
            <div className="text-xs text-gray-400 mt-0.5">{p.sessions}</div>
          </div>
          <div>
            <div className="text-xl font-bold text-[#1E40AF]">4.8 ⭐</div>
            <div className="text-xs text-gray-400 mt-0.5">{p.rating}</div>
          </div>
          <div>
            <div className="text-xl font-bold text-[#1E40AF]">340 XP</div>
            <div className="text-xs text-gray-400 mt-0.5">{p.xp}</div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/app/profile/edit"
            className="inline-block bg-[#1E40AF] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1e3a8a] transition-colors"
          >
            {p.editProfile}
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="font-semibold text-gray-900 mb-4">{p.badges}</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { icon: '🥇', label: p.badgeFirst },
            { icon: '🔥', label: p.badgeStreak },
            { icon: '⭐', label: p.badgeTop },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-sm">
              <span>{b.icon}</span>
              <span className="text-amber-800 font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
