import { ArrowDownToLine, ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TokenPanel } from '../components/TokenPanel'
import { outcomes, outcomesSource, profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow rise" style={{ '--d': 0 } as React.CSSProperties}>
            {profile.name} · {profile.title}
          </p>
          <h1 id="hero-title" className="rise" style={{ '--d': 1 } as React.CSSProperties}>
            Frontend engineering for <em>platforms people depend on.</em>
          </h1>
          <p className="lede rise" style={{ '--d': 2 } as React.CSSProperties}>{profile.intro}</p>
          <div className="cta-row rise" style={{ '--d': 3 } as React.CSSProperties}>
            <Link to="/#work" className="btn btn-primary">
              View my work <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/#contact" className="btn btn-secondary">Contact me</Link>
            <a href={profile.resumeUrl} className="btn btn-ghost" download>
              <ArrowDownToLine size={18} aria-hidden="true" /> Resume (PDF)
            </a>
          </div>
          <p className="meta rise" style={{ '--d': 4 } as React.CSSProperties}>
            <MapPin size={16} aria-hidden="true" /> {profile.availability}
          </p>
        </div>
        <div className="rise hero-side" style={{ '--d': 3 } as React.CSSProperties}>
          <TokenPanel />
        </div>
      </div>
      <div className="container">
        <dl className="outcomes" aria-label={outcomesSource}>
          {outcomes.map((o) => (
            <div key={o.value} className="outcome">
              <dt>{o.value}</dt>
              <dd>{o.label}</dd>
            </div>
          ))}
        </dl>
        <p className="outcomes-source">{outcomesSource}</p>
      </div>
    </section>
  )
}
