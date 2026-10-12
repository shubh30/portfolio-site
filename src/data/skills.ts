import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    name: 'React ecosystem',
    note: 'Primary depth — my main stack since 2019.',
    tier: 'core',
    items: ['React', 'Next.js (SSR, SSG)', 'Redux', 'Apollo Client', 'Emotion', 'Linaria', 'Material UI', 'Ant Design'],
  },
  {
    name: 'Languages',
    note: 'TypeScript for 5+ years.',
    tier: 'core',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    name: 'Vue ecosystem',
    note: 'In production at DET since Nov 2025.',
    tier: 'core',
    items: ['Vue.js', 'Nuxt', 'Pinia', 'Vuetify'],
  },
  {
    name: 'APIs and the server boundary',
    tier: 'core',
    items: ['REST', 'GraphQL', 'Node.js and Express BFF', 'Authentication flows', 'Payment gateway integration'],
  },
  {
    name: 'Web platform and performance',
    tier: 'core',
    items: ['Server-side rendering', 'Static site generation', 'Core Web Vitals', 'Performance optimization', 'SEO', 'Internationalization (i18n)', 'Right-to-left layouts'],
  },
  {
    name: 'Quality, delivery and measurement',
    tier: 'core',
    items: ['Jest', 'React Testing Library', 'Git and GitHub', 'Jenkins CI/CD', 'New Relic Browser', 'Contentsquare', 'A/B testing', 'Agile'],
  },
  {
    name: 'Working knowledge',
    note: 'Used, but not where I would claim depth.',
    tier: 'working',
    items: ['Docker', 'PostgreSQL', 'MongoDB', 'Firebase', 'Azure'],
  },
]
