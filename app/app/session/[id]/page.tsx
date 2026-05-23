import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Sesión en curso — Intercambia' }

export default function SessionPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-36px)] bg-gray-900">
      {/* Video area */}
      <div className="flex-1 flex gap-2 p-3">
        {/* Partner video */}
        <div className="flex-1 bg-gray-800 rounded-2xl flex items-center justify-center relative">
          <div className="text-center text-gray-400">
            <div className="text-5xl mb-3">😊</div>
            <div className="text-sm font-medium text-gray-300">Emily Carter</div>
            <div className="text-xs text-gray-500">🇺🇸 Nueva York</div>
          </div>
          {/* Name badge */}
          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
            Emily Carter
          </div>
        </div>

        {/* Self preview + chat */}
        <div className="flex flex-col gap-2 w-72">
          {/* Self preview */}
          <div className="bg-gray-800 rounded-2xl h-40 flex items-center justify-center relative">
            <div className="text-3xl">😄</div>
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
              Martín (vos)
            </div>
          </div>

          {/* Session timer */}
          <div className="bg-[#1E40AF] rounded-2xl p-4 text-center">
            <div className="text-xs text-blue-200 mb-1">Español · 1er segmento</div>
            <div className="text-3xl font-bold text-white font-mono">28:45</div>
            <div className="text-xs text-blue-300 mt-1">Cambiás en 28 min</div>
          </div>

          {/* Side chat */}
          <div className="flex-1 bg-white rounded-2xl flex flex-col min-h-0 overflow-hidden">
            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-xs">
              <div className="flex gap-2">
                <span className="bg-gray-100 rounded-xl px-3 py-1.5 text-gray-700 max-w-[80%]">¡Hola! ¿Cómo estás?</span>
              </div>
              <div className="flex gap-2 justify-end">
                <span className="bg-[#DBEAFE] rounded-xl px-3 py-1.5 text-gray-700 max-w-[80%]">Hi! I&apos;m great, thanks! You?</span>
              </div>
              <div className="flex gap-2">
                <span className="bg-gray-100 rounded-xl px-3 py-1.5 text-gray-700 max-w-[80%]">Muy bien. Empezamos en español primero.</span>
              </div>
            </div>
            <div className="border-t border-gray-100 p-2 flex gap-2">
              <input type="text" placeholder="Escribir..." className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none" />
              <button className="bg-[#1E40AF] text-white text-xs px-3 py-2 rounded-lg">↑</button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800/80 backdrop-blur px-4 py-3 flex items-center justify-center gap-4">
        {[
          { icon: '🎤', label: 'Silenciar' },
          { icon: '📷', label: 'Cámara' },
          { icon: '🖥️', label: 'Pantalla' },
        ].map((btn) => (
          <button
            key={btn.label}
            title={btn.label}
            className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-xl transition-colors"
          >
            {btn.icon}
          </button>
        ))}
        <Link
          href="/app/session/demo/summary"
          className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-xl transition-colors"
          title="Finalizar sesión"
        >
          📵
        </Link>
      </div>
    </div>
  )
}
