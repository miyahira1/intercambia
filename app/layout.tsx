import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Intercambia — Intercambio de idiomas con nativos | Argentina',
  description: 'Aprendé inglés, italiano o portugués practicando con hablantes nativos. Gratis. Plataforma de intercambio de idiomas para Argentina.',
  openGraph: {
    title: 'Intercambia — Intercambio de idiomas con nativos | Argentina',
    description: 'Aprendé inglés, italiano o portugués practicando con hablantes nativos. Gratis.',
    url: 'https://miyahira1.github.io/intercambia',
    siteName: 'Intercambia',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  )
}
