import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { familyLabels, projects } from '../data/projects'
import type { TechFamily } from '../types'

type Filter = 'all' | TechFamily
const filters: Filter[] = ['all', 'react', 'vue', 'next', 'node']

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = projects.filter((p) => filter === 'all' || p.families.includes(filter))

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading index="02" id="work-title" title="Selected work" lede="Work I owned, with the decisions behind it." />
        <p className="section-note">
          Employer products are described at the level of architecture and outcome, without internal detail. Diagrams are illustrative sketches, not screenshots.
        </p>
        <div className="filters" role="group" aria-label="Filter projects by technology">
          {filters.map((f) => (
            <button key={f} type="button" className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : familyLabels[f]}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">{visible.length} projects shown</p>
        <ol className="project-list">
          {visible.map((p) => {
            const index = String(projects.indexOf(p) + 1).padStart(2, '0')
            const body = (
              <>
                <span className="project-index" aria-hidden="true">{index}</span>
                <span className="project-main">
                  <span className="project-kicker">{p.kicker} · {p.involvement}</span>
                  <span className="project-name">{p.name}</span>
                  <span className="project-summary">{p.summary}</span>
                  <span className="tag-row">
                    {p.stack.slice(0, 5).map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </span>
                </span>
                <span className="project-metrics">
                  {p.metrics.slice(0, 2).map((m) => (
                    <span key={m.label} className="metric">
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </span>
                  ))}
                </span>
                <ArrowUpRight className="project-arrow" size={22} aria-hidden="true" />
              </>
            )
            return (
              <li key={p.slug}>
                {p.caseStudy ? (
                  <Link to={`/work/${p.slug}`} className="project" aria-label={`${p.name}: read case study`}>
                    {body}
                  </Link>
                ) : (
                  <a href={p.externalUrl} className="project" target="_blank" rel="noopener noreferrer" aria-label={`${p.name}: visit site (opens in a new tab)`}>
                    {body}
                  </a>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
