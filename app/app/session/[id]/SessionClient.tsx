'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const languageOptions = [
  { label: 'Inglés ↔ Español', first: 'Inglés', second: 'Español', flag1: '🇺🇸', flag2: '🇦🇷' },
  { label: 'Portugués ↔ Español', first: 'Portugués', second: 'Español', flag1: '🇧🇷', flag2: '🇦🇷' },
  { label: 'Italiano ↔ Español', first: 'Italiano', second: 'Español', flag1: '🇮🇹', flag2: '🇦🇷' },
  { label: 'Francés ↔ Español', first: 'Francés', second: 'Español', flag1: '🇫🇷', flag2: '🇦🇷' },
]

export default function SessionClient() {
  const { t } = useLanguage()
  const s = t.session
  const [selectedLang, setSelectedLang] = useState(0)
  const lang = languageOptions[selectedLang]

  return (
    <div className="flex flex-col h-[calc(100vh-88px)] bg-gray-900">
      {/* Video + side panel */}
      <div className="flex flex-1 gap-2 p-3 min-h-0">
        {/* Partner video */}
        <div className="flex-1 bg-gray-800 rounded-2xl flex items-center justify-center relative min-w-0">
          <div className="text-center text-gray-400">
            <div className="text-5xl mb-3">😊</div>
            <div className="text-sm font-medium text-gray-300">Emily Carter</div>
            <div className="text-xs text-gray-500">🇺🇸 Nueva York</div>
          </div>
          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
            Emily Carter
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-2 w-64 shrink-0 min-h-0">
          {/* Self preview */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl h-32 flex items-center justify-center relative shrink-0">
            <div className="text-3xl">😄</div>
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
              Martín (vos)
            </div>
          </div>

          {/* Language selector */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3 shrink-0">
            <div className="text-xs text-gray-400 mb-1.5">{s.languageLabel}</div>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(Number(e.target.value))}
              className="w-full bg-gray-700 text-white text-xs rounded-lg px-2 py-2 border border-gray-600 focus:outline-none focus:border-blue-400"
            >
              {languageOptions.map((l, i) => (
                <option key={l.label} value={i}>{l.flag1} {l.label} {l.flag2}</option>
              ))}
            </select>
          </div>

          {/* Session timer */}
          <div className="bg-[#1E40AF] rounded-2xl p-3 text-center shrink-0">
            <div className="text-xs text-blue-200 mb-1">{lang.first} · {s.segment}</div>
            <div className="text-2xl font-bold text-white font-mono">28:45</div>
            <div className="text-xs text-blue-300 mt-1">{s.switchIn(28)}</div>
          </div>

          {/* Chat */}
          <div className="flex-1 bg-white rounded-2xl flex flex-col min-h-0 overflow-hidden">
            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-xs min-h-0">
              <div className="flex gap-2">
                <span className="bg-gray-100 rounded-xl px-3 py-1.5 text-gray-700 max-w-[85%]">¡Hola! ¿Cómo estás?</span>
              </div>
              <div className="flex gap-2 justify-end">
                <span className="bg-[#DBEAFE] rounded-xl px-3 py-1.5 text-gray-700 max-w-[85%]">Hi! I&apos;m great, thanks! You?</span>
              </div>
              <div className="flex gap-2">
                <span className="bg-gray-100 rounded-xl px-3 py-1.5 text-gray-700 max-w-[85%]">
                  Muy bien. Empezamos en {lang.first.toLowerCase()} primero.
                </span>
              </div>
            </div>
            <div className="border-t border-gray-100 p-2 flex gap-2 shrink-0">
              <input
                type="text"
                placeholder={s.write}
                className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none"
              />
              <button className="bg-[#1E40AF] text-white text-xs px-3 py-2 rounded-lg">↑</button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800/80 backdrop-blur px-4 py-3 flex items-center justify-center gap-4 shrink-0">
        {[
          { icon: '🎤', label: s.mute },
          { icon: '📷', label: s.camera },
          { icon: '🖥️', label: s.screen },
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
          title={s.end}
        >
          📵
        </Link>
      </div>
    </div>
  )
}
