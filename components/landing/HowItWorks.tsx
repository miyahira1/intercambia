const steps = [
  {
    number: '1',
    title: 'Creá tu perfil',
    description:
      'Contanos tu idioma nativo, qué querés aprender y tus intereses. Todo en menos de 3 minutos.',
    emoji: '👤',
  },
  {
    number: '2',
    title: 'Te encontramos el compañero ideal',
    description:
      'Nuestra IA te conecta con un hablante nativo que quiere aprender lo que vos hablás. Match perfecto.',
    emoji: '🤝',
  },
  {
    number: '3',
    title: 'Practicá en sesiones 50/50',
    description:
      '30 minutos en tu idioma, 30 en el de tu compañero. Los dos aprenden, los dos enseñan.',
    emoji: '💬',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Sin cuotas, sin maestros, sin aplicaciones externas. Solo dos personas que se necesitan mutuamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#F8FAFF] border border-[#DBEAFE]"
            >
              <div className="text-4xl mb-4">{step.emoji}</div>
              <div className="w-9 h-9 rounded-full bg-[#1E40AF] text-white text-sm font-bold flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
