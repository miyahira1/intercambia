import Link from 'next/link'

const freeFeatures = [
  '4 sesiones por mes',
  'Match inteligente por IA',
  'Chat + videollamada HD',
  'Resumen IA básico post-sesión',
  'Lista de vocabulario automática',
]

const plusFeatures = [
  'Sesiones ilimitadas',
  'Match prioritario',
  'Resumen IA completo + exportar vocabulario',
  'Video HD + grabación de sesión (con consentimiento)',
  'Sin publicidad',
  'Salas grupales',
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precios</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Empezá gratis. Pasá a Plus cuando quieras practicar más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <div className="rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div className="mb-6">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Gratis</div>
              <div className="text-4xl font-bold text-gray-900">
                ARS 0<span className="text-lg font-normal text-gray-400">/mes</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {freeFeatures.map((f) => (
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
              Comenzar gratis
            </Link>
          </div>

          {/* Plus */}
          <div className="rounded-2xl border-2 border-[#1E40AF] p-8 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#1E40AF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Recomendado
              </span>
            </div>
            <div className="mb-6">
              <div className="text-sm font-medium text-[#1E40AF] uppercase tracking-wide mb-2">Plus</div>
              <div className="text-4xl font-bold text-gray-900">
                ARS 4.900<span className="text-lg font-normal text-gray-400">/mes</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">≈ USD 5 · ajuste trimestral</div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plusFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#1E40AF] mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              disabled
              className="block w-full text-center bg-[#1E40AF] text-white px-6 py-3 rounded-xl font-semibold opacity-60 cursor-not-allowed"
            >
              Próximamente
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Precios en pesos ajustados trimestralmente al tipo de cambio oficial.
        </p>
      </div>
    </section>
  )
}
