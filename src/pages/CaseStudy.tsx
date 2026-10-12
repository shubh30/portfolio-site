import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { FlowDiagram } from '../components/FlowDiagram'
import { findProject, projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

export default function CaseStudy() {
  const { slug = '' } = useParams()
  const project = findProject(slug)
  const study = project?.caseStudy
  usePageMeta(project?.name, project?.summary)
  if (!project || !study) return <NotFound />

  const studies = projects.filter((p) => p.caseStudy)
  const next = studies[(studies.indexOf(project) + 1) % studies.length]

  return (
    <article className="section case">
      <div className="container case-grid">
        <Link to="/#work" className="back">
          <ArrowLeft size={16} aria-hidden="true" /> All work
        </Link>
        <header className="case-head">
          <p className="eyebrow">{project.kicker}</p>
          <h1>{project.name}</h1>
          <p className="lede">{project.summary}</p>
          <dl className="facts">
            <div><dt>Employer</dt><dd>{project.employer}</dd></div>
            <div><dt>Period</dt><dd>{project.period}</dd></div>
            <div><dt>My role</dt><dd>{study.role}</dd></div>
          </dl>
          {project.externalUrl && (
            <a href={project.externalUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Visit the live product <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </header>

        <section className="case-block" aria-labelledby="c-problem">
          <h2 id="c-problem">The problem</h2>
          <div className="prose">{study.problem.map((p) => <p key={p}>{p}</p>)}</div>
        </section>

        <section className="case-block" aria-labelledby="c-owner">
          <h2 id="c-owner">Ownership</h2>
          <div className="prose"><p>{study.ownership}</p></div>
        </section>

        <FlowDiagram diagram={study.diagram} label={`${project.name} architecture sketch`} />

        <section className="case-block" aria-labelledby="c-challenges">
          <h2 id="c-challenges">Technical challenges</h2>
          <ul className="titled">
            {study.challenges.map((c) => (
              <li key={c.title}><h3>{c.title}</h3><p>{c.body}</p></li>
            ))}
          </ul>
        </section>

        <section className="case-block" aria-labelledby="c-approach">
          <h2 id="c-approach">Approach</h2>
          <ul className="titled">
            {study.approach.map((c) => (
              <li key={c.title}><h3>{c.title}</h3><p>{c.body}</p></li>
            ))}
          </ul>
          <ul className="tag-row">{project.stack.map((s) => <li key={s} className="tag">{s}</li>)}</ul>
        </section>

        <section className="case-block" aria-labelledby="c-impact">
          <h2 id="c-impact">Impact</h2>
          {project.metrics.length > 0 && (
            <dl className="outcomes outcomes-inline">
              {project.metrics.map((m) => (
                <div key={m.label} className="outcome"><dt>{m.value}</dt><dd>{m.label}</dd></div>
              ))}
            </dl>
          )}
          <ul className="tick-list">{study.impact.map((i) => <li key={i}>{i}</li>)}</ul>
        </section>

        <section className="case-block" aria-labelledby="c-trade">
          <h2 id="c-trade">Trade-offs</h2>
          <ul className="tick-list">{study.tradeoffs.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>

        <Link to={`/work/${next.slug}`} className="next-case">
          <span>Next case study</span>
          <strong>{next.name}</strong>
          <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
