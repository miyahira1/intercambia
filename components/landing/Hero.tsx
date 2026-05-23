import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#EFF6FF] to-white py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#DBEAFE] text-[#1E40AF] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <span>🇦🇷</span>
          <span>Hecho en Argentina para argentinos</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Aprendé inglés con{' '}
          <span className="text-[#1E40AF]">nativos reales.</span>
          <br />
          Gratis.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Intercambiá 30 minutos de español por 30 minutos de inglés, italiano o portugués.
          Conectamos argentinos con hablantes nativos de todo el mundo, sin costo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#waitlist"
            className="bg-[#1E40AF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#1e3a8a] transition-colors shadow-md"
          >
            Unirme a la lista de espera
          </Link>
          <Link
            href="#como-funciona"
            className="bg-white text-[#1E40AF] border border-[#1E40AF] px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#EFF6FF] transition-colors"
          >
            Ver cómo funciona ↓
          </Link>
        </div>

        {/* Social proof numbers */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-500 mt-1">gratis para empezar</div>
          </div>
          <div className="hidden sm:block w-px bg-gray-200" />
          <div>
            <div className="text-3xl font-bold text-gray-900">30/30</div>
            <div className="text-sm text-gray-500 mt-1">minutos por idioma</div>
          </div>
        </div>
      </div>
    </section>
  )
}
