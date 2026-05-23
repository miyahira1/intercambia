'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const languages = ['Español', 'Inglés', 'Portugués', 'Italiano', 'Francés', 'Alemán']
const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const interestOptions = ['tecnología', 'música', 'viajes', 'cine', 'deportes', 'gastronomía', 'literatura', 'negocios', 'arte', 'ciencia']
const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const times = ['Mañana (8–12)', 'Tarde (12–18)', 'Noche (18–23)']

export default function EditProfilePage() {
  const { t } = useLanguage()
  const e = t.profileEdit

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/app/profile" className="text-gray-400 hover:text-gray-600 text-lg">←</Link>
        <h1 className="text-xl font-bold text-gray-900">{e.title}</h1>
      </div>

      <form className="space-y-6" onSubmit={(ev) => ev.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{e.photo}</label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center text-3xl">😊</div>
            <button type="button" className="text-sm text-[#1E40AF] border border-[#1E40AF] px-4 py-2 rounded-lg hover:bg-[#EFF6FF] transition-colors">
              {e.changePhoto}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{e.displayName}</label>
          <input type="text" defaultValue="Martín López" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{e.nativeLang}</label>
            <select defaultValue="Español" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]">
              {languages.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{e.targetLang}</label>
            <select defaultValue="Inglés" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]">
              {languages.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{e.cefr}</label>
          <div className="flex gap-2 flex-wrap">
            {levels.map((l) => (
              <label key={l} className="cursor-pointer">
                <input type="radio" name="level" value={l} defaultChecked={l === 'B1'} className="sr-only peer" />
                <span className="border border-gray-200 peer-checked:border-[#1E40AF] peer-checked:bg-[#EFF6FF] peer-checked:text-[#1E40AF] px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:border-[#1E40AF] transition-colors block">
                  {l}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{e.interests}</label>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map((i) => (
              <label key={i} className="cursor-pointer">
                <input type="checkbox" defaultChecked={['tecnología', 'cine'].includes(i)} className="sr-only peer" />
                <span className="border border-gray-200 peer-checked:border-[#1E40AF] peer-checked:bg-[#EFF6FF] peer-checked:text-[#1E40AF] px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 hover:border-gray-300 transition-colors block">
                  {i}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{e.bio}</label>
          <textarea
            rows={3}
            defaultValue="Desarrollador web de Buenos Aires. Quiero mejorar mi inglés para trabajar en empresas internacionales."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">{e.availability}</label>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="pb-2 pr-3 text-left text-gray-500 font-normal" />
                  {days.map((d) => <th key={d} className="pb-2 px-2 text-gray-500 font-medium">{d}</th>)}
                </tr>
              </thead>
              <tbody>
                {times.map((time) => (
                  <tr key={time}>
                    <td className="pr-3 py-1.5 text-gray-500 whitespace-nowrap">{time}</td>
                    {days.map((d) => (
                      <td key={d} className="px-2 py-1.5 text-center">
                        <input type="checkbox" className="accent-[#1E40AF] w-4 h-4" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button type="submit" className="flex-1 bg-[#1E40AF] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#1e3a8a] transition-colors">
            {e.save}
          </button>
          <Link href="/app/profile" className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold text-sm text-center hover:bg-gray-50 transition-colors">
            {e.cancel}
          </Link>
        </div>
      </form>
    </div>
  )
}
