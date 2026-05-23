'use client'

import { useState } from 'react'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'placeholder'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Ingresá un email válido.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg('Algo salió mal. Intentá de nuevo.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Sin conexión. Intentá de nuevo.')
    }
  }

  return (
    <section id="waitlist" className="py-20 px-4 bg-[#1E40AF]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Anotate antes del lanzamiento
        </h2>
        <p className="text-blue-200 text-lg mb-10">
          Estamos en lista de espera. Dejá tu email y te avisamos cuando abramos.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 text-white text-lg font-medium">
            ¡Listo! 🎉 Te avisamos cuando abramos.
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-5 py-4 rounded-xl text-gray-900 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-white text-[#1E40AF] px-7 py-4 rounded-xl font-semibold text-base hover:bg-blue-50 transition-colors disabled:opacity-60 disabled:cursor-wait whitespace-nowrap"
              >
                {status === 'loading' ? 'Enviando…' : 'Quiero unirme'}
              </button>
            </div>
            {errorMsg && (
              <p className="text-red-300 text-sm mt-3">{errorMsg}</p>
            )}
          </form>
        )}

        <p className="text-blue-300 text-xs mt-6">
          Sin spam. Solo te escribimos cuando abramos. Podés darte de baja cuando quieras.
        </p>
      </div>
    </section>
  )
}
