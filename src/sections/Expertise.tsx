import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export function Expertise() {
  return (
    <section id="expertise" className="section" aria-labelledby="expertise-title">
      <div className="container">
        <SectionHeading index="03" id="expertise-title" title="Technical expertise" lede="Deep in React and TypeScript, fluent in Vue/Nuxt, and comfortable at the server boundary." />
        <dl className="skills">
          {skillGroups.map((g) => (
            <div key={g.name} className="skill-row" data-tier={g.tier}>
              <dt>
                {g.name}
                {g.note && <span className="skill-note">{g.note}</span>}
              </dt>
              <dd>
                <ul className="chips">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
