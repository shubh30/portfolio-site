import { useCallback, useState } from 'react'

/**
 * A preference stored as a data-* attribute on <html> (so CSS can react to it)
 * and persisted to localStorage. The inline script in index.html applies the
 * stored value before first paint, so this hook only reads it back.
 */
export function usePreference<T extends string>(name: string, values: readonly T[], fallback: T) {
  const read = (): T => {
    const current = document.documentElement.dataset[name]
    return values.find((v) => v === current) ?? fallback
  }
  const [value, setValue] = useState<T>(read)

  const set = useCallback(
    (next: T) => {
      document.documentElement.dataset[name] = next
      try {
        localStorage.setItem(`pref-${name}`, next)
      } catch {
        // Storage can be unavailable (private mode); the preference then lasts for the session.
      }
      setValue(next)
    },
    [name],
  )

  return [value, set] as const
}
