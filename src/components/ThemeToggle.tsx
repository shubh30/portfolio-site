import { Moon, Sun } from 'lucide-react'
import { usePreference } from '../hooks/usePreference'
import type { Theme } from '../types'

const THEMES = ['dark', 'light'] as const

export function ThemeToggle() {
  const [theme, setTheme] = usePreference<Theme>('theme', THEMES, 'dark')
  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
