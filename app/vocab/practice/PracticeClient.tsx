'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Question } from '@/lib/vocab/question'
import { buildQuestion } from '@/lib/vocab/question'
import { applyCorrect, applyIncorrect, createInitialState } from '@/lib/vocab/leitner'
import { loadStates, saveState } from '@/lib/vocab/store'
import { buildSessionQueue, buildErrorReviewQueue } from '@/lib/vocab/session'
import { loadActiveLanguage, saveActiveLanguage } from '@/lib/vocab/activeLanguage'
import { recordAnswer, loadGamification, type GamificationState } from '@/lib/vocab/gamification'
import type { Item, Topic, LanguageCode } from '@/lib/vocab/types'

const AUTO_ADVANCE_MS = 600

type AnswerState = 'unanswered' | 'correct' | 'incorrect'

interface PracticeClientProps {
  // All topics keyed by language code
  topicsByLang: Record<LanguageCode, Topic[]>
  // All items keyed by language code
  itemsByLang: Record<LanguageCode, Item[]>
}

type SessionMode = 'normal' | 'errors'

function buildQueue(lang: LanguageCode, topics: Topic[], items: Item[], mode: SessionMode) {
  const stateMap = loadStates(lang)
  return mode === 'errors'
    ? buildErrorReviewQueue(topics, items, stateMap, Date.now())
    : buildSessionQueue(topics, items, stateMap, Date.now())
}

export default function PracticeClient({ topicsByLang, itemsByLang }: PracticeClientProps) {
  const [activeLang, setActiveLangState] = useState<LanguageCode>('en')
  const [sessionMode, setSessionMode] = useState<SessionMode>('normal')
  const [queue, setQueue] = useState<Item[]>([])
  const [queueIndex, setQueueIndex] = useState(0)
  const [question, setQuestion] = useState<Question | null>(null)
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered')
  const [chosenIndex, setChosenIndex] = useState<number | null>(null)
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionTotal, setSessionTotal] = useState(0)
  const [finished, setFinished] = useState(false)
  const [gamification, setGamification] = useState<GamificationState | null>(null)
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function startSession(lang: LanguageCode, mode: SessionMode = sessionMode) {
    const topics = topicsByLang[lang] ?? []
    const items = itemsByLang[lang] ?? []
    const q = buildQueue(lang, topics, items, mode)
    setQueue(q)
    setQueueIndex(0)
    setQuestion(q.length > 0 ? buildQuestion(q[0]) : null)
    setAnswerState('unanswered')
    setChosenIndex(null)
    setSessionCorrect(0)
    setSessionTotal(0)
    setFinished(q.length === 0)
  }

  // Load active language, gamification state, and build queue on mount
  useEffect(() => {
    const lang = loadActiveLanguage()
    setActiveLangState(lang)
    startSession(lang)
    setGamification(loadGamification())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function switchLang(lang: LanguageCode) {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current)
    saveActiveLanguage(lang)
    setActiveLangState(lang)
    startSession(lang, sessionMode)
  }

  function switchMode(mode: SessionMode) {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current)
    setSessionMode(mode)
    startSession(activeLang, mode)
  }

  const advance = useCallback(() => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current)
    const nextIndex = queueIndex + 1
    if (nextIndex >= queue.length) {
      setFinished(true)
      return
    }
    setQueueIndex(nextIndex)
    setQuestion(buildQuestion(queue[nextIndex]))
    setAnswerState('unanswered')
    setChosenIndex(null)
  }, [queue, queueIndex])

  const handleAnswer = useCallback(
    (index: number) => {
      if (answerState !== 'unanswered' || !question) return
      const isCorrect = index === question.correctIndex
      setChosenIndex(index)
      setAnswerState(isCorrect ? 'correct' : 'incorrect')
      setSessionTotal((n) => n + 1)
      if (isCorrect) setSessionCorrect((n) => n + 1)

      const stateMap = loadStates(activeLang)
      const existing = stateMap.get(question.item.id) ?? createInitialState('local', question.item.id, activeLang)
      const updated = isCorrect
        ? applyCorrect(existing, Date.now())
        : applyIncorrect(existing, Date.now())
      saveState(updated)
      setGamification(recordAnswer(isCorrect))

      advanceTimerRef.current = setTimeout(advance, AUTO_ADVANCE_MS)
    },
    [answerState, question, advance, activeLang],
  )

  // Keyboard handler: 1–4, A–D, Enter/Space
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (answerState !== 'unanswered') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          advance()
        }
        return
      }
      const keyMap: Record<string, number> = {
        '1': 0, a: 0, A: 0,
        '2': 1, b: 1, B: 1,
        '3': 2, c: 2, C: 2,
        '4': 3, d: 3, D: 3,
      }
      const idx = keyMap[e.key]
      if (idx !== undefined) handleAnswer(idx)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [answerState, handleAnswer, advance])

  const langLabel: Record<LanguageCode, string> = { en: 'Inglés', ja: 'Japonés' }

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
        {/* Language selector */}
        <div className="flex gap-2">
          {(['en', 'ja'] as LanguageCode[]).map((l) => (
            <button
              key={l}
              onClick={() => switchLang(l)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm border-2 transition ${
                activeLang === l
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
              }`}
            >
              {langLabel[l]}
            </button>
          ))}
        </div>
        <h2 className="text-2xl font-bold">¡Sesión completada!</h2>
        <p className="text-lg text-gray-600">
          {sessionCorrect} / {sessionTotal} correctas
        </p>
        <button
          onClick={() => startSession(activeLang)}
          className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
        >
          Nueva sesión
        </button>
      </div>
    )
  }

  if (!question) return null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-4 max-w-xl mx-auto">
      {/* Gamification bar */}
      {gamification && (
        <div className="w-full flex items-center gap-4 text-sm">
          <span className="font-bold text-accent">{gamification.xp} XP</span>
          <span className="text-gray-500">🔥 {gamification.streak}</span>
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all"
              style={{ width: `${Math.min(100, Math.round((gamification.todayCount / gamification.dailyGoal) * 100))}%` }}
            />
          </div>
          <span className="text-gray-400 text-xs">{gamification.todayCount}/{gamification.dailyGoal}</span>
        </div>
      )}

      {/* Language selector + progress */}
      <div className="w-full flex items-center justify-between">
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
              {langLabel[l]}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          {queueIndex + 1} / {queue.length} · {sessionCorrect} correctas
        </div>
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2 self-center">
        {(['normal', 'errors'] as SessionMode[]).map((m) => (
          <button
            key={m}
            onClick={() => switchMode(m)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold border-2 transition ${
              sessionMode === m
                ? 'bg-accent text-white border-accent'
                : 'bg-white text-gray-500 border-gray-200 hover:border-accent'
            }`}
          >
            {m === 'normal' ? 'Normal' : 'Errores recientes'}
          </button>
        ))}
      </div>

      {/* Prompt */}
      <div className="w-full text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-2">
          {question.item.itemType === 'vocab_meaning' && 'Significado'}
          {question.item.itemType === 'vocab_reading' && 'Lectura'}
          {question.item.itemType === 'grammar' && 'Gramática'}
          {question.item.itemType === 'production' && 'Producción'}
        </p>
        <p className="text-3xl font-bold leading-snug">{question.item.prompt}</p>
      </div>

      {/* Options */}
      <div className="w-full flex flex-col gap-3">
        {question.options.map((opt, i) => {
          let bg = 'bg-white border-gray-200 hover:border-primary hover:bg-blue-50'
          if (answerState !== 'unanswered') {
            if (i === question.correctIndex) {
              bg = 'bg-green-100 border-green-500'
            } else if (i === chosenIndex && i !== question.correctIndex) {
              bg = 'bg-red-100 border-red-500'
            } else {
              bg = 'bg-white border-gray-200 opacity-50'
            }
          }
          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className={`w-full flex items-center gap-4 px-5 py-4 border-2 rounded-xl text-left font-medium transition ${bg}`}
            >
              <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-base">{opt}</span>
            </button>
          )
        })}
      </div>

      <p className="text-xs text-gray-400">
        Teclas 1–4 · Enter para avanzar
      </p>
    </div>
  )
}
