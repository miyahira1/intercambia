'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { Question } from '@/lib/vocab/question'
import { buildQuestion } from '@/lib/vocab/question'
import { applyCorrect, applyIncorrect, createInitialState } from '@/lib/vocab/leitner'
import { loadStates, saveState } from '@/lib/vocab/store'
import { buildSessionQueue } from '@/lib/vocab/session'
import type { Item, Topic } from '@/lib/vocab/types'

const AUTO_ADVANCE_MS = 600

type AnswerState = 'unanswered' | 'correct' | 'incorrect'

interface PracticeClientProps {
  topics: Topic[]
  items: Item[]
}

export default function PracticeClient({ topics, items }: PracticeClientProps) {
  const [queue, setQueue] = useState<Item[]>([])
  const [queueIndex, setQueueIndex] = useState(0)
  const [question, setQuestion] = useState<Question | null>(null)
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered')
  const [chosenIndex, setChosenIndex] = useState<number | null>(null)
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionTotal, setSessionTotal] = useState(0)
  const [finished, setFinished] = useState(false)
  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Build initial queue on mount
  useEffect(() => {
    const stateMap = loadStates('en')
    const q = buildSessionQueue(topics, items, stateMap, Date.now())
    if (q.length === 0) {
      setFinished(true)
      return
    }
    setQueue(q)
    setQuestion(buildQuestion(q[0]))
    setQueueIndex(0)
  }, [topics, items])

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

      // Persist Leitner state
      const stateMap = loadStates('en')
      const existing = stateMap.get(question.item.id) ?? createInitialState('local', question.item.id, 'en')
      const updated = isCorrect
        ? applyCorrect(existing, Date.now())
        : applyIncorrect(existing, Date.now())
      saveState(updated)

      advanceTimerRef.current = setTimeout(advance, AUTO_ADVANCE_MS)
    },
    [answerState, question, advance],
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

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4">
        <h2 className="text-2xl font-bold">¡Sesión completada!</h2>
        <p className="text-lg text-gray-600">
          {sessionCorrect} / {sessionTotal} correctas
        </p>
        <button
          onClick={() => window.location.reload()}
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
      {/* Progress */}
      <div className="w-full flex justify-between text-sm text-gray-500">
        <span>{queueIndex + 1} / {queue.length}</span>
        <span>{sessionCorrect} correctas</span>
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
