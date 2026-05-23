import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mensajes — Intercambia' }

const conversations = [
  { name: 'Emily Carter', preview: 'Sure! Saturday works great for me.', time: '19:42', unread: 2, avatar: '😊' },
  { name: 'Marco Rossi', preview: 'Ciao! Possiamo parlare domani?', time: 'Ayer', unread: 0, avatar: '😄' },
  { name: 'João Silva', preview: '¡Estuvo muy buena la sesión!', time: 'Lun', unread: 0, avatar: '🙂' },
]

const messages = [
  { from: 'other', text: 'Hola Martín! Cómo andás?', time: '19:30' },
  { from: 'self', text: '¡Muy bien! ¿Y vos?', time: '19:31' },
  { from: 'other', text: 'Great! Ready for our session on Saturday?', time: '19:35' },
  { from: 'self', text: 'Sí, ya tengo agendado. ¿A las 19hs te viene bien?', time: '19:38' },
  { from: 'other', text: 'Sure! Saturday works great for me.', time: '19:42' },
]

export default function MessagesPage() {
  return (
    <div className="flex h-[calc(100vh-36px)]">
      {/* Conversation list */}
      <div className="w-full md:w-72 border-r border-gray-100 bg-white flex flex-col shrink-0">
        <div className="p-4 border-b border-gray-100">
          <h1 className="font-bold text-gray-900">Mensajes</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((c) => (
            <div
              key={c.name}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer ${c.name === 'Emily Carter' ? 'bg-[#EFF6FF]' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#DBEAFE] flex items-center justify-center text-xl shrink-0">
                {c.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 text-sm">{c.name}</span>
                  <span className="text-xs text-gray-400">{c.time}</span>
                </div>
                <div className="text-xs text-gray-500 truncate mt-0.5">{c.preview}</div>
              </div>
              {c.unread > 0 && (
                <span className="bg-[#1E40AF] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                  {c.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div className="hidden md:flex flex-1 flex-col bg-white">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#DBEAFE] flex items-center justify-center">😊</div>
          <div>
            <div className="font-medium text-gray-900 text-sm">Emily Carter</div>
            <div className="text-xs text-gray-400">🇺🇸 Nueva York · B1 Español</div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === 'self' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] group relative`}>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm ${
                    m.from === 'self'
                      ? 'bg-[#1E40AF] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {/* Translation tooltip mockup on hover */}
                  <span className="relative cursor-pointer hover:underline hover:decoration-dotted">
                    {m.text}
                  </span>
                </div>
                <div className={`text-xs text-gray-400 mt-1 ${m.from === 'self' ? 'text-right' : 'text-left'}`}>
                  {m.time} {m.from === 'self' && '✓✓'}
                </div>
              </div>
            </div>
          ))}

          {/* Static tooltip demo */}
          <div className="flex justify-center">
            <div className="bg-gray-800 text-white text-xs rounded-xl px-4 py-3 max-w-xs text-center shadow-lg">
              <div className="font-medium mb-1">works (inglés → español)</div>
              <div className="text-gray-300">funciona · &quot;That works for me&quot; = &quot;Eso me funciona&quot;</div>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="px-4 py-3 border-t border-gray-100 flex gap-3 items-end">
          <input
            type="text"
            placeholder="Escribir un mensaje..."
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
          <button className="bg-[#1E40AF] text-white p-3 rounded-xl hover:bg-[#1e3a8a] transition-colors">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
