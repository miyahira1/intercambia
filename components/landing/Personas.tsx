const personas = [
  {
    emoji: '💼',
    name: 'El Profesional',
    goal: 'Quiere llegar a B2 en inglés para conseguir trabajo remoto en USD.',
    languages: '🇦🇷 → 🇺🇸',
  },
  {
    emoji: '🇮🇹',
    name: 'La Heredera',
    goal: 'Aprende italiano o francés para tramitar la ciudadanía europea.',
    languages: '🇦🇷 → 🇮🇹',
  },
  {
    emoji: '🎓',
    name: 'El Estudiante',
    goal: 'Mejora su inglés para un intercambio universitario o para consumir contenido en inglés.',
    languages: '🇦🇷 → 🇺🇸',
  },
  {
    emoji: '🌍',
    name: 'El Nativo',
    goal: 'Hablante de inglés o portugués que quiere aprender el español argentino auténtico.',
    languages: '🇺🇸 → 🇦🇷',
  },
]

export default function Personas() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Para quién es Intercambia?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Si querés aprender un idioma hablándolo con alguien real, este lugar es tuyo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personas.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start"
            >
              <div className="text-4xl shrink-0">{p.emoji}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{p.name}</h3>
                  <span className="text-lg">{p.languages}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{p.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
