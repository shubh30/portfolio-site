import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { to: '/#about', label: 'About' },
  { to: '/#work', label: 'Work' },
  { to: '/#expertise', label: 'Expertise' },
  { to: '/#philosophy', label: 'Approach' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#contact', label: 'Contact' },
]

export function Header() {
  // The menu counts as open only for the location it was opened on, so navigating closes it.
  const location = useLocation()
  const [openFor, setOpenFor] = useState<string | null>(null)
  const open = openFor === location.key
  const setOpen = (value: boolean) => setOpenFor(value ? location.key : null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenFor(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="wordmark" aria-label="Shubham Nagpal, home">
          <span className="wordmark-mark" aria-hidden="true">S</span>
          <span>Shubham Nagpal</span>
        </Link>
        <nav id="primary-nav" className="nav" data-open={open} aria-label="Primary">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}
