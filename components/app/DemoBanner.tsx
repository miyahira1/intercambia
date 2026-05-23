'use client'

import { useState } from 'react'

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null
  return (
    <div className="bg-amber-100 text-amber-800 text-sm font-medium px-4 py-2 flex items-center justify-between gap-4">
      <span>⚠️ Vista previa — esta demo no tiene funcionalidad aún</span>
      <button
        onClick={() => setDismissed(true)}
        className="text-amber-600 hover:text-amber-900 shrink-0 font-bold"
        aria-label="Cerrar"
      >
        ✕
      </button>
    </div>
  )
}
