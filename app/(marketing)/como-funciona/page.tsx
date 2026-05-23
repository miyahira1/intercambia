import type { Metadata } from 'next'
import Link from 'next/link'
import WaitlistForm from '@/components/landing/WaitlistForm'

export const metadata: Metadata = {
  title: 'Cómo funciona — Intercambia',
  description: 'Descubrí cómo funciona el intercambio de idiomas en Intercambia: el modelo 50/50, el match por IA, la seguridad y las preguntas frecuentes.',
}

const faqItems = [
  {
    q: '¿Es realmente gratis?',
    a: 'Sí. El plan gratuito incluye 4 sesiones por mes, match inteligente, chat y videollamada. No hace falta tarjeta de crédito para empezar.',
  },
  {
    q: '¿Cómo me aseguro de que mi compañero sea serio?',
    a: 'Todos los usuarios tienen un perfil verificado por email. Los usuarios argentinos pueden además verificar su DNI para obtener una insignia de "Verificado". Después de cada sesión, ambos se califican mutuamente.',
  },
  {
    q: '¿Qué idiomas puedo aprender?',
    a: 'Cualquier idioma para el que existan hablantes nativos dispuestos a aprender español argentino. En el lanzamiento: inglés, portugués, italiano y francés.',
  },
  {
    q: '¿Necesito instalar algo?',
    a: 'No. Intercambia funciona 100% en el navegador. Las videollamadas usan WebRTC nativo: sin Zoom, sin Meet, sin aplicaciones externas.',
  },
  {
    q: '¿Qué pasa si mi nivel es muy básico?',
    a: 'Nuestro sistema de match usa el nivel CEFR (A1 a C2) y empareja personas con niveles similares o complementarios. También podés practicar principalmente en tu idioma nativo mientras el otro practica el suyo.',
  },
  {
    q: '¿Puedo cancelar una sesión?',
    a: 'Sí, podés cancelar hasta 1 hora antes. Tu compañero recibe una notificación automática.',
  },
]

export default function ComoFunciona() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EFF6FF] to-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Cómo funciona Intercambia
          </h1>
          <p className="text-lg text-gray-600">
            Una plataforma de intercambio de idiomas sin costos, sin intermediarios y con IA que te hace el laburo pesado.
          </p>
        </div>
      </section>

      {/* Exchange model */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">El modelo 50/50</h2>
          <div className="bg-[#F8FAFF] border border-[#DBEAFE] rounded-2xl p-8 mb-6">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center">
              <div className="flex-1">
                <div className="text-4xl mb-3">🇦🇷</div>
                <div className="font-semibold text-gray-900">Primeros 30 minutos</div>
                <div className="text-gray-500 text-sm mt-1">En el idioma de tu compañero</div>
              </div>
              <div className="text-3xl text-gray-300 font-light">⇄</div>
              <div className="flex-1">
                <div className="text-4xl mb-3">🌍</div>
                <div className="font-semibold text-gray-900">Segundos 30 minutos</div>
                <div className="text-gray-500 text-sm mt-1">En tu idioma nativo</div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Cada sesión dura 1 hora. Los primeros 30 minutos practican en el idioma que vos querés aprender; los segundos 30 en el tuyo. Un timer inteligente recuerda cuándo cambiar. Ambos ganan, ambos enseñan.
          </p>
        </div>
      </section>

      {/* AI matching */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Match por inteligencia artificial</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            No hace falta buscar compañero manualmente. Nuestra IA analiza tu nivel, tus intereses, tu disponibilidad horaria y tu estilo de comunicación para recomendarte los mejores matches cada vez que entrás.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {['Nivel CEFR compatible', 'Intereses en común', 'Horarios que coinciden'].map((item) => (
              <div key={item} className="bg-white rounded-xl p-4 border border-gray-100 text-sm text-gray-700 font-medium text-center shadow-sm">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seguridad y confianza</h2>
          <ul className="space-y-4 text-gray-600">
            {[
              { icon: '✉️', text: 'Verificación de email obligatoria para todos los usuarios.' },
              { icon: '🪪', text: 'Verificación opcional de DNI para usuarios argentinos — obtienen la insignia "Verificado".' },
              { icon: '⭐', text: 'Calificación mutua después de cada sesión (1–5 estrellas).' },
              { icon: '🤖', text: 'Moderación automática por IA: reportes revisados en menos de 5 minutos.' },
              { icon: '🚫', text: 'Sistema de bloqueo instantáneo disponible desde cualquier pantalla.' },
            ].map((item) => (
              <li key={item.text} className="flex gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
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

      {/* CTA */}
      <WaitlistForm />
    </main>
  )
}
