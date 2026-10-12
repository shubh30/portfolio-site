import { profile } from '../data/profile'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p>© {year} {profile.name}</p>
        <p>Designed and built by me with React, TypeScript and Vite.</p>
      </div>
    </footer>
  )
}
