import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Resumen de sesión — Intercambia' }

export function generateStaticParams() {
  return [{ id: 'demo' }]
}

export default function SessionSummaryPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🎉</div>
        <h1 className="text-2xl font-bold text-gray-900">¡Sesión completada!</h1>
        <p className="text-gray-500 mt-1">Con Emily Carter · 60 minutos</p>
      </div>

      {/* Rating */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">⭐ Calificá a Emily</h2>
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} className={`text-3xl ${star <= 5 ? 'text-amber-400' : 'text-gray-200'}`}>★</button>
          ))}
        </div>
        <textarea
          rows={2}
          placeholder="Comentario opcional..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] resize-none"
        />
        <button className="mt-3 w-full bg-[#1E40AF] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#1e3a8a] transition-colors">
          Enviar calificación
        </button>
      </div>

      <Link href="/app/dashboard" className="block text-center text-[#1E40AF] text-sm font-medium hover:underline">
        ← Volver al dashboard
      </Link>
    </div>
  )
}
