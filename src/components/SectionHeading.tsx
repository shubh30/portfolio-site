export function SectionHeading({ index, id, title, lede }: { index: string; id: string; title: string; lede?: string }) {
  return (
    <header className="section-head">
      <p className="eyebrow"><span aria-hidden="true">{index}</span> {title}</p>
      <h2 id={id}>{lede ?? title}</h2>
    </header>
  )
}
