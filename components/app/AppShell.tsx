import Link from 'next/link'
import DemoBanner from './DemoBanner'

const navItems = [
  { href: '/app/dashboard', label: 'Dashboard', icon: '🏠' },
  { href: '/app/messages', label: 'Mensajes', icon: '💬' },
  { href: '/app/sessions', label: 'Sesiones', icon: '📅' },
  { href: '/app/vocabulary', label: 'Vocabulario', icon: '📖' },
  { href: '/app/profile', label: 'Perfil', icon: '👤' },
]

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DemoBanner />

      <div className="flex flex-1">
        {/* Sidebar — desktop */}
        <aside className="hidden md:flex flex-col w-56 bg-white border-r border-gray-100 py-6 shrink-0">
          <div className="px-4 mb-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-[#1E40AF]">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <path d="M3 8h16M3 8l4-4M3 8l4 4M19 14H3M19 14l-4-4M19 14l-4 4" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Intercambia
            </Link>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-[#EFF6FF] hover:text-[#1E40AF] transition-colors"
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#DBEAFE] flex items-center justify-center text-sm">👤</div>
              <div>
                <div className="text-xs font-medium text-gray-800">Martín López</div>
                <div className="text-xs text-gray-400">Plan gratuito</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto pb-20 md:pb-0">
          {children}
        </main>
      </div>

      {/* Bottom nav — mobile */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 flex justify-around py-2 z-40">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-0.5 text-xs text-gray-500 hover:text-[#1E40AF] px-2 py-1"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
