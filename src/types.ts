export type Accent = 'amber' | 'azure' | 'sage' | 'coral'
export type Theme = 'dark' | 'light'

export type TechFamily = 'react' | 'vue' | 'next' | 'node'

export interface Metric {
  value: string
  label: string
}

export interface DiagramColumn {
  title: string
  nodes: string[]
}

export interface Diagram {
  caption: string
  columns: DiagramColumn[]
}

export interface TitledText {
  title: string
  body: string
}

export interface CaseStudy {
  problem: string[]
  role: string
  ownership: string
  challenges: TitledText[]
  approach: TitledText[]
  impact: string[]
  tradeoffs: string[]
  diagram: Diagram
}

export interface Project {
  slug: string
  name: string
  kicker: string
  summary: string
  employer: string
  period: string
  involvement: 'Led' | 'Owned' | 'Built' | 'Contributed'
  families: TechFamily[]
  stack: string[]
  metrics: Metric[]
  externalUrl?: string
  caseStudy?: CaseStudy
}

export interface ExperienceEntry {
  employer: string
  employerUrl?: string
  title: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface SkillGroup {
  name: string
  note?: string
  tier: 'core' | 'working'
  items: string[]
}

export interface Principle {
  title: string
  statement: string
  evidence: string
}
