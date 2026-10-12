import type { Principle } from '../types'

export const principles: Principle[] = [
  {
    title: 'Components are contracts',
    statement: 'A shared component earns its place when several features need it. Until then it stays local, so the shared layer stays small and trustworthy.',
    evidence: 'At DET I build reusable Vue/Nuxt components and composables that features share, on top of Vuetify.',
  },
  {
    title: 'State lives close to where it is used',
    statement: 'Keep state in the smallest scope that works, derive everything you can, and reach for a store only when several parts of the screen must agree.',
    evidence: 'The Theme Generator keeps colours, variables and the dark flag in one Pinia store and derives the exported JSON from it.',
  },
  {
    title: 'Put a seam between the client and the services',
    statement: 'The UI should not absorb the shape of every upstream API. A thin layer that aggregates, reshapes and validates makes failures easier to contain.',
    evidence: 'At Housing.com a Node/Express BFF served the React app and handled SSR; 5XX errors fell 30%. In the Theme Generator, Zod validates payloads at the API edge.',
  },
  {
    title: 'Measure before and after',
    statement: 'Performance and conversion claims need a baseline. I instrument first so the result of a change is something I can show rather than assert.',
    evidence: 'CLS went from 0.48 to 0 on Premium. I integrated New Relic Browser on seller.housing.com and restructured URLs for Contentsquare analytics.',
  },
  {
    title: 'Design for locale from the first commit',
    statement: 'Internationalization and right-to-left support are cheap on day one and expensive to retrofit. Layout, copy and forms are built to flip.',
    evidence: 'The DET Unified Portal ships i18n and RTL support alongside authentication, API integration and dynamic forms.',
  },
  {
    title: 'Raise the floor for the team',
    statement: 'Conventions, structure and linting are written down and enforced, reviews teach rather than gate, and tests ship with the feature.',
    evidence: 'I review pull requests and set frontend standards for a team of 2–3 engineers, and wrote Jest and React Testing Library tests alongside features at Housing.com.',
  },
]
