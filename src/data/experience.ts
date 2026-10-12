import type { ExperienceEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    employer: 'Department of Economy and Tourism (DET), Government of Dubai',
    title: 'Senior Software Engineer',
    period: 'Nov 2025 – Present',
    location: 'Dubai, UAE',
    summary: 'Technical lead for a small frontend team on an enterprise government portal.',
    highlights: [
      'Lead a team of 2–3 frontend engineers building the Unified Portal, an enterprise application for complaint and violation management.',
      'Review pull requests, mentor engineers and define frontend standards: coding conventions, project structure and linting.',
      'Implemented authentication, API integration, dynamic forms, internationalization and right-to-left layout support.',
      'Designed and built the Theme Generator, giving multiple DET applications configurable, reusable UI theming.',
      'Developed features for Invest in Dubai with Next.js, using server-side rendering and static site generation.',
    ],
    stack: ['Vue.js', 'Nuxt', 'Next.js', 'Pinia', 'TypeScript', 'Vuetify', 'Azure'],
  },
  {
    employer: 'Housing.com',
    employerUrl: 'https://housing.com/',
    title: 'Senior Software Engineer',
    period: 'Jun 2021 – Nov 2025',
    location: 'Delhi, India',
    summary: 'Promoted during the role; owned frontend delivery across payments, monetization and owner supply.',
    highlights: [
      'Engineered a custom checkout for cards, net banking, UPI (Intent, Collect, QR), wallets and Pay Later; checkout conversion up 6%.',
      'Owned frontend development for Housing Premium: gamified discounts lifted conversion by 10%, smaller “sachet” packages by 12%.',
      'Built and maintained a Node/Express BFF that shaped APIs for the React app and handled SSR; 5XX errors down 30%.',
      'Cut Cumulative Layout Shift from 0.48 to 0 on Premium and from 0.24 to 0 on edge landing pages.',
      'Delivered Rent Until Sell and the Listing Flow revamp, contributing to 20% month-over-month growth in owner listings from organic traffic.',
      'Shipped Pay on Credit and Rent Agreement, integrated New Relic Browser on seller.housing.com, and wrote Jest and React Testing Library tests with features.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Apollo Client', 'Node.js', 'Express', 'Linaria', 'Emotion'],
  },
  {
    employer: 'Spark Eighteen',
    employerUrl: 'https://www.sparkeighteen.com/',
    title: 'Front End Developer',
    period: 'Oct 2020 – Jun 2021',
    location: 'Delhi, India',
    summary: 'Client SaaS delivery in an agency setting.',
    highlights: [
      'Built and optimized React interfaces for client SaaS products, including Glide Health, integrating REST APIs and Ant Design.',
    ],
    stack: ['React', 'JavaScript', 'REST APIs', 'Ant Design'],
  },
  {
    employer: 'Sopra Steria',
    title: 'Engineer Trainee',
    period: 'Oct 2019 – Oct 2020',
    location: 'Delhi, India',
    summary: 'First professional role.',
    highlights: ['Created and maintained an internal support dashboard in React and JavaScript backed by REST APIs.'],
    stack: ['React', 'JavaScript', 'REST APIs'],
  },
]
