'use client'

import { useEffect, useState } from 'react'
import type { Item, LanguageCode, Topic } from '@/lib/vocab/types'
import type { UserItemState } from '@/lib/vocab/leitner'
import { isMastered } from '@/lib/vocab/leitner'
import { loadStates } from '@/lib/vocab/store'
import { loadActiveLanguage, saveActiveLanguage } from '@/lib/vocab/activeLanguage'
import { computeLevelProgress, getUnlockedTopics } from '@/lib/vocab/levels'

interface Props {
  topicsByLang: Record<LanguageCode, Topic[]>
  itemsByLang: Record<LanguageCode, Item[]>
}

interface TopicStats {
  topic: Topic
  total: number
  mastered: number
  boxCounts: Record<number, number>
  accuracy: number
}

function computeStats(
  topics: Topic[],
  items: Item[],
  states: Map<string, UserItemState>,
): TopicStats[] {
  return topics.map((topic) => {
    const topicItems = items.filter((i) => i.topicId === topic.id)
    let correctTotal = 0
    let attemptTotal = 0
    const boxCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    let masteredCount = 0

    for (const item of topicItems) {
      const state = states.get(item.id)
      if (state) {
        boxCounts[state.box] = (boxCounts[state.box] ?? 0) + 1
        correctTotal += state.correctCount
        attemptTotal += state.correctCount + state.incorrectCount
        if (isMastered(state)) masteredCount++
      }
    }

    return {
      topic,
      total: topicItems.length,
      mastered: masteredCount,
      boxCounts,
      accuracy: attemptTotal > 0 ? Math.round((correctTotal / attemptTotal) * 100) : 0,
    }
  })
}

const BOX_COLORS = ['', 'bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-lime-400', 'bg-green-500']
const LANG_LABEL: Record<LanguageCode, string> = { en: 'Inglés', ja: 'Japonés' }

export default function DashboardClient({ topicsByLang, itemsByLang }: Props) {
  const [activeLang, setActiveLang] = useState<LanguageCode>('en')
  const [stats, setStats] = useState<TopicStats[]>([])
  const [levelProgress, setLevelProgress] = useState({ level: 0, masteredCount: 0, itemsToNextLevel: 5 })

  function load(lang: LanguageCode) {
    const stateMap = loadStates(lang)
    const statesArr = Array.from(stateMap.values())
    const topics = topicsByLang[lang] ?? []
    const items = itemsByLang[lang] ?? []
    const progress = computeLevelProgress(statesArr, lang)
    const level = progress.level
    const unlocked = getUnlockedTopics(topics, level)
    setStats(computeStats(unlocked, items, stateMap))
    setLevelProgress(progress)
    setActiveLang(lang)
  }

  useEffect(() => {
    const lang = loadActiveLanguage()
    load(lang)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function switchLang(lang: LanguageCode) {
    saveActiveLanguage(lang)
    load(lang)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10 flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dominio</h1>
        <div className="flex gap-2">
          {(['en', 'ja'] as LanguageCode[]).map((l) => (
            <button
              key={l}
              onClick={() => switchLang(l)}
              className={`px-3 py-1.5 rounded-lg font-semibold text-xs border-2 transition ${
                activeLang === l
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-primary'
              }`}
            >
              {LANG_LABEL[l]}
            </button>
          ))}
        </div>
      </div>

      {/* Level bar */}
      <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
        <div className="flex justify-between text-sm font-semibold">
          <span>Nivel {levelProgress.level}</span>
          <span className="text-gray-500">{levelProgress.masteredCount} dominados</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{
              width: `${Math.round(((5 - levelProgress.itemsToNextLevel) / 5) * 100)}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-400">
          Faltan {levelProgress.itemsToNextLevel} ítem{levelProgress.itemsToNextLevel !== 1 ? 's' : ''} para el nivel {levelProgress.level + 1}
        </p>
      </div>

      {/* Topic cards */}
      {stats.length === 0 ? (
        <p className="text-gray-400 text-sm text-center">No hay temas desbloqueados aún.</p>
      ) : (
        stats.map((s) => (
          <div key={s.topic.id} className="border-2 border-gray-100 rounded-xl p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">{s.topic.name}</h2>
              <span className="text-3xl font-bold text-primary">
                {s.mastered}/{s.total}
              </span>
            </div>

            {/* Box distribution */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((box) => {
                const count = s.boxCounts[box] ?? 0
                return (
                  <div key={box} className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className={`w-full rounded ${BOX_COLORS[box]}`}
                      style={{ height: `${Math.max(4, (count / Math.max(s.total, 1)) * 48)}px` }}
                    />
                    <span className="text-[10px] text-gray-400">{count}</span>
                  </div>
                )
              })}
            </div>

            {/* Accuracy secondary metric */}
            <p className="text-xs text-gray-400">{s.accuracy}% de aciertos</p>
          </div>
        ))
      )}

      <a
        href="/intercambia/vocab/practice/"
        className="text-center px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
      >
        Practicar
      </a>
    </div>
  )
}
