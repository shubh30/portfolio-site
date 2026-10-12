import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading index="05" id="experience-title" title="Experience" lede="Seven years, with scope that has widened each time." />
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.employer + e.period} className="job">
              <div className="job-when">
                <p className="job-period">{e.period}</p>
                <p className="job-where">{e.location}</p>
              </div>
              <div className="job-body">
                <h3>
                  {e.title},{' '}
                  {e.employerUrl ? (
                    <a href={e.employerUrl} target="_blank" rel="noopener noreferrer">{e.employer}</a>
                  ) : (
                    e.employer
                  )}
                </h3>
                <p className="job-summary">{e.summary}</p>
                <ul className="job-points">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tag-row">
                  {e.stack.map((s) => (
                    <li key={s} className="tag">{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
