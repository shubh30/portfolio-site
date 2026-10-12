import { Fragment } from 'react'
import type { Diagram } from '../types'

export function FlowDiagram({ diagram, label }: { diagram: Diagram; label: string }) {
  return (
    <figure className="flow">
      <div className="flow-grid" role="group" aria-label={label}>
        {diagram.columns.map((col, i) => (
          <Fragment key={col.title}>
            {i > 0 && <span className="flow-arrow" aria-hidden="true">→</span>}
            <div className="flow-col">
              <h4 className="flow-title">{col.title}</h4>
              <ul>
                {col.nodes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </div>
      <figcaption>{diagram.caption}</figcaption>
    </figure>
  )
}
