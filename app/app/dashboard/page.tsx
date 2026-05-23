import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Dashboard — Intercambia' }

const matches = [
  { name: 'Emily Carter', from: '🇺🇸', to: '🇦🇷', level: 'B1', interests: ['viajes', 'música'], avatar: '😊' },
  { name: 'Marco Rossi', from: '🇮🇹', to: '🇦🇷', level: 'A2', interests: ['cine', 'gastronomía'], avatar: '😄' },
  { name: 'João Silva', from: '🇧🇷', to: '🇦🇷', level: 'B2', interests: ['tecnología', 'deporte'], avatar: '🙂' },
]

const sessions = [
  { partner: 'Emily Carter', date: 'Mié 28 Mayo', time: '19:00', languages: '🇺🇸 ⇄ 🇦🇷', avatar: '😊' },
  { partner: 'Marco Rossi', date: 'Vie 30 Mayo', time: '20:30', languages: '🇮🇹 ⇄ 🇦🇷', avatar: '😄' },
]

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">¡Hola, Martín! 👋</h1>
        <p className="text-gray-500 mt-1">Tenés 3 nuevos matches recomendados.</p>
      </div>

      {/* Progress widget */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: 'XP total', value: '340' },
          { label: 'Sesiones', value: '7' },
          { label: 'Racha', value: '3 sem.' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
            <div className="text-2xl font-bold text-[#1E40AF]">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recommended matches */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Matches recomendados</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {matches.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center text-xl">{m.avatar}</div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{m.name}</div>
                  <div className="text-xs text-gray-400">{m.from} → {m.to} · {m.level}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {m.interests.map((i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{i}</span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 text-xs bg-[#1E40AF] text-white py-2 rounded-lg hover:bg-[#1e3a8a] transition-colors">Conectar</button>
                <button className="flex-1 text-xs border border-gray-200 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition-colors">Ver perfil</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming sessions */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Próximas sesiones</h2>
        <div className="space-y-3">
          {sessions.map((s) => (
            <div key={s.partner} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center text-xl shrink-0">{s.avatar}</div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">{s.partner}</div>
                <div className="text-xs text-gray-400">{s.date} · {s.time} · {s.languages}</div>
              </div>
              <Link href="/app/session/demo" className="text-xs bg-[#1E40AF] text-white px-4 py-2 rounded-lg hover:bg-[#1e3a8a] transition-colors">
                Unirse
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
