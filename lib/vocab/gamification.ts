const STORAGE_KEY = 'srs_gamification'
const DEFAULT_DAILY_GOAL = 20
const XP_PER_CORRECT = 10
const XP_PER_INCORRECT = 2

export interface GamificationState {
  xp: number
  streak: number
  lastPracticedDate: string  // ISO date string YYYY-MM-DD
  todayCount: number         // items answered today
  dailyGoal: number
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10)
}

function load(): GamificationState {
  if (typeof window === 'undefined') return defaultState()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as GamificationState) : defaultState()
  } catch {
    return defaultState()
  }
}

function defaultState(): GamificationState {
  return {
    xp: 0,
    streak: 0,
    lastPracticedDate: '',
    todayCount: 0,
    dailyGoal: DEFAULT_DAILY_GOAL,
  }
}

function save(state: GamificationState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

// Call after each answered item. Returns the updated state.
export function recordAnswer(isCorrect: boolean): GamificationState {
  const state = load()
  const today = todayISO()

  // Reset daily count if it's a new day
  if (state.lastPracticedDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    state.streak = state.lastPracticedDate === yesterday ? state.streak : 0
    state.todayCount = 0
  }

  state.xp += isCorrect ? XP_PER_CORRECT : XP_PER_INCORRECT
  state.todayCount += 1
  state.lastPracticedDate = today

  // Extend streak when daily goal first reached today
  if (state.todayCount === state.dailyGoal) {
    state.streak += 1
  }

  save(state)
  return state
}

export function loadGamification(): GamificationState {
  return load()
}

export function setDailyGoal(goal: number): GamificationState {
  const state = load()
  state.dailyGoal = goal
  save(state)
  return state
}
