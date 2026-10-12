import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="section notfound">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page doesn’t exist.</h1>
        <p className="lede">The link may be out of date, or the address mistyped.</p>
        <Link to="/" className="btn btn-primary">Back to the portfolio</Link>
      </div>
    </section>
  )
}
