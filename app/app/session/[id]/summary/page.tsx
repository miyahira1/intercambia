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

      {/* AI Summary */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <h2 className="font-semibold text-gray-900 mb-4">📋 Resumen IA</h2>
        <div className="space-y-4">
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Vocabulario nuevo</div>
            <div className="flex flex-wrap gap-2">
              {['overwhelmed', 'handful', 'deadline', 'seamlessly'].map((w) => (
                <span key={w} className="bg-[#EFF6FF] text-[#1E40AF] text-xs px-3 py-1 rounded-full font-medium">{w}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Frases clave</div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <em>&quot;It&apos;s a bit much for me&quot;</em> — expresar que algo es difícil</li>
              <li>• <em>&quot;Let&apos;s take it step by step&quot;</em> — ir de a poco</li>
              <li>• <em>&quot;Does that make sense?&quot;</em> — verificar comprensión</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Para practicar</div>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>→ Practicá el uso de <strong>present perfect</strong> con &quot;have/has + verb&quot;</li>
              <li>→ Ampliá vocabulario de <strong>trabajo y tecnología</strong></li>
            </ul>
          </div>
        </div>
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
