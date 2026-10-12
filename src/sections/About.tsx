import { SectionHeading } from '../components/SectionHeading'
import { about, profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="01" id="about-title" title="About" lede="From a React dashboard to leading a government portal team." />
        <div className="about-grid">
          <div className="prose">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="about-aside">
            <h3 className="mini-title">What I bring to a senior team</h3>
            <ul className="tick-list">
              {about.bring.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h3 className="mini-title">Education</h3>
            <p className="small">
              {profile.education.degree}
              <br />
              {profile.education.school}, {profile.education.location} · {profile.education.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
