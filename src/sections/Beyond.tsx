import { SectionHeading } from '../components/SectionHeading'
import { beyond } from '../data/profile'

export function Beyond() {
  return (
    <section id="beyond" className="section" aria-labelledby="beyond-title">
      <div className="container">
        <SectionHeading index="06" id="beyond-title" title="Beyond the code" lede="Tools, experiments and learning." />
        <p className="section-note">{beyond.intro}</p>
        <div className="beyond-grid">
          {beyond.items.map((i) => (
            <article key={i.title} className="beyond-item">
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
