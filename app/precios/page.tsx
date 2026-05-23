import type { Metadata } from 'next'
import Link from 'next/link'
import WaitlistForm from '@/components/landing/WaitlistForm'

export const metadata: Metadata = {
  title: 'Precios — Intercambia',
  description: 'Planes gratuito y Plus de Intercambia. Empezá gratis con 4 sesiones por mes o pasá a Plus para sesiones ilimitadas y funciones avanzadas.',
}

const comparisonRows = [
  { feature: 'Sesiones por mes', free: '4', plus: 'Ilimitadas' },
  { feature: 'Match inteligente por IA', free: 'Básico', plus: 'Prioritario' },
  { feature: 'Chat en sesión', free: '✓', plus: '✓' },
  { feature: 'Videollamada', free: '✓', plus: '✓ HD' },
  { feature: 'Resumen IA post-sesión', free: 'Básico', plus: 'Completo' },
  { feature: 'Exportar vocabulario (CSV)', free: '✗', plus: '✓' },
  { feature: 'Grabación de sesión', free: '✗', plus: '✓ (con consentimiento)' },
  { feature: 'Salas grupales', free: '✓', plus: '✓' },
  { feature: 'Publicidad', free: 'Sí', plus: 'Sin publicidad' },
]

const billingFaq = [
  {
    q: '¿Cuándo se cobra Plus?',
    a: 'Plus se cobra mensualmente. Podés cancelar cuando quieras, sin penalidades.',
  },
  {
    q: '¿En qué moneda pago?',
    a: 'Los usuarios argentinos pagan en ARS a través de Mercado Pago. Usuarios del exterior pueden pagar en USD con tarjeta internacional.',
  },
  {
    q: '¿Por qué el precio en ARS cambia?',
    a: 'Para mantener el precio en USD constante (~USD 5), el precio en pesos se ajusta trimestralmente al tipo de cambio oficial.',
  },
]

export default function PreciosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EFF6FF] to-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Precios</h1>
          <p className="text-lg text-gray-600">
            Empezá gratis. Pasá a Plus cuando necesites más.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-gray-200 p-8">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Gratis</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">
              ARS 0<span className="text-lg font-normal text-gray-400">/mes</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Para empezar a practicar sin compromisos.</p>
            <Link
              href="/#waitlist"
              className="block text-center bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-sm"
            >
              Comenzar gratis
            </Link>
          </div>

          {/* Plus */}
          <div className="rounded-2xl border-2 border-[#1E40AF] p-8 relative">
            <div className="absolute -top-3 left-6">
              <span className="bg-[#1E40AF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Recomendado
              </span>
            </div>
            <div className="text-sm font-medium text-[#1E40AF] uppercase tracking-wide mb-2">Plus</div>
            <div className="text-4xl font-bold text-gray-900 mb-1">
              ARS 4.900<span className="text-lg font-normal text-gray-400">/mes</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">≈ USD 5 · ajuste trimestral</p>
            <button
              disabled
              className="block w-full text-center bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold opacity-60 cursor-not-allowed text-sm"
            >
              Próximamente
            </button>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Comparación de planes</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-5 text-gray-500 font-medium">Función</th>
                  <th className="text-center py-4 px-5 text-gray-700 font-semibold">Gratis</th>
                  <th className="text-center py-4 px-5 text-[#1E40AF] font-semibold">Plus</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
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

      {/* Billing FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Preguntas sobre pagos</h2>
          <div className="space-y-4">
            {billingFaq.map((item) => (
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
