import { SectionHeading } from '../components/SectionHeading'
import { principles } from '../data/philosophy'

export function Philosophy() {
  return (
    <section id="philosophy" className="section" aria-labelledby="philosophy-title">
      <div className="container">
        <SectionHeading index="04" id="philosophy-title" title="Engineering approach" lede="Principles, each tied to work I have actually done." />
        <ol className="principles">
          {principles.map((p, i) => (
            <li key={p.title} className="principle">
              <span className="principle-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.statement}</p>
                <p className="evidence"><span>In practice</span> {p.evidence}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
