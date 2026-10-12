import { useEffect, useState } from 'react'
import { usePreference } from '../hooks/usePreference'
import type { Accent } from '../types'

const ACCENTS = ['amber', 'azure', 'sage', 'coral'] as const
const TOKENS = ['--bg', '--ink', '--accent'] as const

/** An interactive nod to my Theme Generator work: the accent is a real design token that re-themes this site. */
export function TokenPanel() {
  const [accent, setAccent] = usePreference<Accent>('accent', ACCENTS, 'amber')
  const [values, setValues] = useState<Record<string, string>>({})

  useEffect(() => {
    const read = () => {
      const css = getComputedStyle(document.documentElement)
      setValues(Object.fromEntries(TOKENS.map((t) => [t, css.getPropertyValue(t).trim()])))
    }
    read()
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-accent'] })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="tokens" aria-labelledby="tokens-title">
      <h2 id="tokens-title" className="tokens-title">Design tokens</h2>
      <p className="tokens-note">This page runs on tokens. Pick an accent, or use the theme toggle, and the whole site follows.</p>
      <div className="swatches" role="radiogroup" aria-label="Accent colour">
        {ACCENTS.map((a) => (
          <button
            key={a}
            type="button"
            role="radio"
            aria-checked={accent === a}
            aria-label={a}
            data-swatch={a}
            className="swatch"
            onClick={() => setAccent(a)}
          />
        ))}
      </div>
      <dl className="token-list">
        {TOKENS.map((t) => (
          <div key={t}>
            <dt>{t}</dt>
            <dd>
              <span className="chip-dot" style={{ background: `var(${t})` }} aria-hidden="true" />
              {values[t]}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
