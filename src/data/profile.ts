export const profile = {
  name: 'Shubham Nagpal',
  title: 'Senior Frontend Engineer',
  location: 'Dubai, United Arab Emirates',
  availability: 'Based in Dubai · UAE resident · 30-day notice period',
  email: 'snagpal3004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shubham-nagpal-3004',
  github: 'https://github.com/shubh30',
  resumeUrl: '/Shubham-Nagpal-Resume.pdf',
  headline: 'Frontend engineering for platforms people depend on.',
  intro:
    'Senior Frontend Engineer with seven years in React, TypeScript, Next.js and Vue/Nuxt. I lead a small frontend team on Dubai’s Department of Economy and Tourism Unified Portal, and spent four years at Housing.com shipping checkout, monetization and performance work.',
  targetRoles: [
    'Senior Frontend Engineer',
    'Senior Software Engineer — Frontend',
    'Lead Frontend Engineer',
    'Frontend Platform Engineer',
  ],
  education: {
    degree: 'B.Tech, Information Technology',
    school: 'ADGITM, Guru Gobind Singh Indraprastha University',
    period: '2015 – 2019',
    location: 'New Delhi, India',
  },
} as const

export const outcomes = [
  { value: '+6%', label: 'checkout conversion from a custom payments flow' },
  { value: '+10% / +12%', label: 'Premium conversion from two monetization features' },
  { value: '−30%', label: '5XX errors after introducing a Node/Express BFF' },
  { value: '0.48 → 0', label: 'Cumulative Layout Shift on Housing Premium' },
]

export const outcomesSource = 'Selected results from my work at Housing.com'

export const about = {
  paragraphs: [
    'I started in 2019 as an engineer trainee at Sopra Steria, building an internal support dashboard in React. At Spark Eighteen I built React interfaces for client SaaS products, including Glide Health. In 2021 I joined Housing.com, where I grew into a Senior Software Engineer over four years.',
    'At Housing.com I owned frontend delivery for Housing Premium, engineered a custom payments checkout, and built the Node/Express backend-for-frontend layer that served the React app. I also did the unglamorous work that compounds: Core Web Vitals, browser monitoring, analytics-friendly URLs and tests that ship with features.',
    'In November 2025 I moved to Dubai as a Senior Software Engineer at the Department of Economy and Tourism. There I lead a team of two to three frontend engineers on the Unified Portal, work across Vue/Nuxt and Next.js, and built the Theme Generator used to theme multiple DET applications.',
  ],
  bring: [
    'Depth in React and TypeScript, plus working production experience in Vue/Nuxt and Next.js.',
    'Ownership that reaches past the component: BFF layers, SSR, performance budgets and monitoring.',
    'A habit of tying frontend work to a measurable result, then checking that it moved.',
    'Code review, mentoring and written standards that keep a team’s codebase consistent.',
  ],
}

export const beyond = {
  intro:
    'Outside delivery work I keep experimenting with the tools around frontend engineering. These are working habits, not credentials.',
  items: [
    {
      title: 'AI-assisted development',
      body: 'I use Cursor, Claude, ChatGPT, Gemini, v0 and Windsurf day to day, and have worked with the Model Context Protocol. I treat them as fast collaborators whose output still needs review and tests.',
    },
    {
      title: 'Tooling for my own workflows',
      body: 'I built a small Node tool that compiles my resume from a single verified source of facts, with automated checks before anything is sent. It is private, but it is how I like to work: one source of truth, validated.',
    },
    {
      title: 'Widening the stack',
      body: 'Moving from a React-centred career into Vue/Nuxt and Next.js at DET was a deliberate stretch. I keep learning the ecosystem rather than assuming React habits transfer.',
    },
  ],
}
