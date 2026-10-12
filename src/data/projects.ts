import type { Project, TechFamily } from '../types'

export const familyLabels: Record<TechFamily, string> = {
  react: 'React',
  vue: 'Vue / Nuxt',
  next: 'Next.js',
  node: 'Node',
}

const illustrative = 'Illustrative sketch of the architecture, not a product screenshot.'
const housingPeriod = 'Jun 2021 – Nov 2025'
const detEmployer = 'Department of Economy and Tourism, Government of Dubai'

export const projects: Project[] = [
  {
    slug: 'unified-portal',
    name: 'DET Unified Portal',
    kicker: 'Enterprise government platform',
    summary:
      'An enterprise web application for complaint and violation management at Dubai’s Department of Economy and Tourism. I lead the frontend team and build core capabilities.',
    employer: detEmployer,
    period: 'Nov 2025 – Present',
    involvement: 'Led',
    families: ['vue'],
    stack: ['Vue.js', 'Nuxt', 'TypeScript', 'Pinia', 'Vuetify', 'Azure'],
    metrics: [
      { value: '2–3', label: 'frontend engineers led' },
      { value: 'LTR + RTL', label: 'layout support' },
    ],
    externalUrl: 'https://app.det.gov.ae/',
    caseStudy: {
      problem: [
        'DET needed one enterprise web application for managing complaints and violations, with workflows that users can follow through to resolution.',
        'The interface had to handle authenticated access, dynamic forms, and users working in both left-to-right and right-to-left languages.',
      ],
      role: 'Frontend team lead and engineer',
      ownership:
        'I lead a team of two to three frontend engineers and build features myself. The backend services, product direction and visual design belong to other teams, and I work closely with them.',
      challenges: [
        { title: 'Authentication and API integration', body: 'A government-service application depends on secure sign-in and on back-end services. The client has to treat their failures as normal states, not exceptions.' },
        { title: 'Dynamic forms', body: 'Complaint and violation workflows need forms whose content and behaviour vary by case, while still feeling consistent to the user.' },
        { title: 'Internationalization and RTL', body: 'Mirrored layouts and translated content touch every screen. They have to be designed in, not patched on.' },
        { title: 'Consistency across engineers', body: 'With several people shipping features in parallel, a codebase drifts unless its conventions are explicit.' },
      ],
      approach: [
        { title: 'Nuxt and TypeScript foundation', body: 'The portal is built on Vue.js and Nuxt with TypeScript, using Pinia for shared state and Vuetify as the component base.' },
        { title: 'Reusable components and composables', body: 'Shared Vue components and composables carry the common behaviour, so features assemble from known pieces.' },
        { title: 'Written standards and review', body: 'I defined coding conventions, project structure and linting rules, and review pull requests with the aim of teaching as well as catching defects.' },
        { title: 'Theming as configuration', body: 'Visual theming comes from the Theme Generator, described in its own case study, rather than being hand-edited per application.' },
      ],
      impact: [
        'Features are assembled from shared components and composables, which speeds up delivery.',
        'The team works from one set of written conventions and a consistent project structure.',
        'Authentication, API integration, dynamic forms, i18n and RTL are in place as part of the portal’s foundation.',
      ],
      tradeoffs: [
        'Building on Vuetify trades some visual freedom for speed and consistency. A theming layer is what keeps that from feeling restrictive.',
        'Investing early in standards and shared components slows the very first features slightly and pays back as the team and the surface area grow.',
      ],
      diagram: {
        caption: illustrative,
        columns: [
          { title: 'Experience', nodes: ['Pages and layouts', 'Dynamic forms', 'i18n · LTR and RTL'] },
          { title: 'Shared layer', nodes: ['Reusable components', 'Composables', 'Pinia stores'] },
          { title: 'Integration', nodes: ['Authentication', 'API client', 'Error states'] },
          { title: 'Services', nodes: ['DET back-end APIs'] },
        ],
      },
    },
  },
  {
    slug: 'theme-generator',
    name: 'Theme Generator',
    kicker: 'Design-system tooling',
    summary:
      'A configuration tool I designed and built so multiple DET applications can share configurable, reusable UI theming instead of each maintaining their own.',
    employer: detEmployer,
    period: 'Nov 2025 – Present',
    involvement: 'Built',
    families: ['vue'],
    stack: ['Nuxt 4', 'Vue.js', 'Pinia', 'Vuetify', 'Zod', 'MongoDB', 'Docker'],
    metrics: [
      { value: '2–3', label: 'DET applications themed' },
      { value: 'JSON', label: 'import and export' },
    ],
    caseStudy: {
      problem: [
        'Several applications at DET needed to look like members of the same family while still allowing per-application variation. Hand-editing theme files in each codebase does not scale and is hard to review.',
        'The goal: make theming a configuration task with immediate visual feedback, and give every application one source of truth.',
      ],
      role: 'Designer and engineer',
      ownership:
        'I designed and built the application end to end: the editor interface, state model, persistence API and containerized deployment.',
      challenges: [
        { title: 'Faithful live preview', body: 'Editors need to see changes against real components immediately, so the preview applies the theme to the same component library the applications use.' },
        { title: 'One coherent editor state', body: 'Colours, variables, the dark-mode flag and the theme name all change together, and must reset, import and save without drifting out of sync.' },
        { title: 'Safe import and persistence', body: 'Themes arrive as JSON from users. They must be validated before they are stored or applied.' },
      ],
      approach: [
        { title: 'A single Pinia store', body: 'The editor store holds colours, variables, dark flag and name. Applying the theme updates the Vuetify theme at runtime, and the export JSON is derived from the same state.' },
        { title: 'Validation at the edge', body: 'The API validates payloads with Zod: names are bounded, every colour must be a valid hex value, and a theme needs at least one colour and one variable.' },
        { title: 'Simple persistence', body: 'Themes are stored in MongoDB through a small service layer and four REST endpoints to list, fetch, create and update.' },
        { title: 'Server-rendered Nuxt 4, containerized', body: 'The tool is a server-rendered Nuxt 4 application, built on the shared design-system library and packaged with Docker.' },
      ],
      impact: [
        'Multiple DET applications (currently two to three) draw their theming from it.',
        'Theme changes become configuration with instant preview, not code changes in each repository.',
        'Import and export make themes portable and easy to review as JSON.',
      ],
      tradeoffs: [
        'Colours are validated strictly as hex values, while theme variables are accepted as a looser record. That keeps the tool flexible across Vuetify variables, with strictness where mistakes are visible.',
        'Persisting themes server-side adds a database to run, in exchange for sharing and reuse across applications.',
      ],
      diagram: {
        caption: illustrative,
        columns: [
          { title: 'Editor', nodes: ['Sidebar controls', 'Pinia store', 'Import dialog'] },
          { title: 'Preview', nodes: ['Runtime Vuetify theme', 'Live component preview'] },
          { title: 'API', nodes: ['Zod validation', 'Theme service', 'MongoDB'] },
          { title: 'Consumers', nodes: ['DET applications', 'JSON export'] },
        ],
      },
    },
  },
  {
    slug: 'housing-premium',
    name: 'Housing Premium',
    kicker: 'Monetization and performance',
    summary:
      'Frontend ownership of Housing.com’s Premium offering: conversion features that moved the numbers, and layout stability work that removed Cumulative Layout Shift.',
    employer: 'Housing.com',
    period: housingPeriod,
    involvement: 'Owned',
    families: ['react'],
    stack: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Apollo Client', 'Linaria', 'Emotion'],
    metrics: [
      { value: '+10%', label: 'conversion, gamified discounts' },
      { value: '+12%', label: 'conversion, “sachet” packages' },
      { value: '0.48 → 0', label: 'CLS on Premium' },
    ],
    externalUrl: 'https://housing.com/premium',
    caseStudy: {
      problem: [
        'Housing Premium is a paid offering, so the frontend directly influences revenue. The product team wanted features that raise conversion, and the pages needed to be stable as they loaded.',
      ],
      role: 'Frontend owner',
      ownership:
        'I owned frontend development for Premium: building and shipping the features and the layout stability work described here. Product, design and backend were separate teams.',
      challenges: [
        { title: 'Conversion features that feel natural', body: 'Gamified discounts and smaller “sachet” packages change how people engage with the offer, so the interface has to explain them clearly.' },
        { title: 'Layout stability', body: 'Content that loads late and shifts the page hurts the experience and Core Web Vitals, on Premium and on edge landing pages alike.' },
      ],
      approach: [
        { title: 'Ship features as measurable changes', body: 'Gamified discount features and sachet packages were built as focused product changes whose conversion effect could be read afterwards.' },
        { title: 'Fix layout shift at its source', body: 'I worked on Core Web Vitals for Premium and edge landing pages, bringing CLS down to zero on both.' },
        { title: 'React, Redux and Apollo', body: 'The app used React with TypeScript, Redux, GraphQL through Apollo Client, and Linaria and Emotion for styling.' },
      ],
      impact: [
        'Gamified discount features lifted conversion by 10%.',
        'Smaller “sachet” packages lifted conversion by 12%.',
        'Cumulative Layout Shift fell from 0.48 to 0 on Premium, and from 0.24 to 0 on edge landing pages.',
      ],
      tradeoffs: [
        'Gamification can add visual and logic complexity to a pricing page. Measuring it against conversion is what justifies that cost.',
      ],
      diagram: {
        caption: illustrative,
        columns: [
          { title: 'Offer', nodes: ['Gamified discounts', 'Sachet packages'] },
          { title: 'App', nodes: ['React and TypeScript', 'Redux state', 'Apollo Client'] },
          { title: 'Quality', nodes: ['CLS 0.48 → 0', 'Edge pages 0.24 → 0'] },
        ],
      },
    },
  },
  {
    slug: 'payments-checkout',
    name: 'Payments Checkout',
    kicker: 'Custom checkout',
    summary:
      'A custom checkout covering cards, net banking, UPI, wallets and Pay Later, integrated with a payment gateway.',
    employer: 'Housing.com',
    period: housingPeriod,
    involvement: 'Built',
    families: ['react'],
    stack: ['React', 'TypeScript', 'Redux', 'Payment gateway integration'],
    metrics: [{ value: '+6%', label: 'checkout conversion' }],
    caseStudy: {
      problem: [
        'Users pay in many ways, and each has its own steps. The checkout had to support cards, net banking, UPI (Intent, Collect and QR), wallets and Pay Later without feeling like several separate products.',
      ],
      role: 'Engineer',
      ownership:
        'I engineered the checkout experience on the frontend, including the payment gateway integration. The gateway and back-end payment services came from others.',
      challenges: [
        { title: 'Many methods, many flows', body: 'UPI alone has three distinct modes: Intent, Collect and QR. Each behaves differently on the device and in how it confirms a payment.' },
        { title: 'Failure is a normal state', body: 'Payments can be declined, abandoned or left pending, and the interface has to guide the user in each case.' },
      ],
      approach: [
        { title: 'One checkout, many methods', body: 'A custom checkout presents every supported method in a single consistent experience and hands off to the payment gateway.' },
        { title: 'React and TypeScript', body: 'Built on the same React and TypeScript stack as the surrounding product, so it could share its patterns.' },
      ],
      impact: ['Checkout conversion rate increased by 6%.'],
      tradeoffs: [
        'A custom checkout gives control over the experience, at the cost of owning more states and edge cases than a hosted gateway page would.',
      ],
      diagram: {
        caption: illustrative,
        columns: [
          { title: 'Methods', nodes: ['Cards', 'Net banking', 'UPI: Intent · Collect · QR', 'Wallets', 'Pay Later'] },
          { title: 'Checkout UI', nodes: ['Method selection', 'Payment details'] },
          { title: 'Gateway', nodes: ['Payment gateway'] },
          { title: 'Outcome', nodes: ['Success', 'Pending', 'Failure'] },
        ],
      },
    },
  },
  {
    slug: 'bff-ssr',
    name: 'BFF and SSR Layer',
    kicker: 'Frontend platform',
    summary:
      'A Node/Express backend-for-frontend that shaped APIs for the React app and handled server-side rendering.',
    employer: 'Housing.com',
    period: housingPeriod,
    involvement: 'Built',
    families: ['react', 'node'],
    stack: ['Node.js', 'Express', 'React', 'SSR'],
    metrics: [{ value: '−30%', label: '5XX errors' }],
    caseStudy: {
      problem: [
        'A React app that calls many upstream APIs directly inherits their shapes and their failures. The product needed a layer that gave the frontend what it needs, and rendered pages on the server.',
      ],
      role: 'Engineer, building and maintaining the layer',
      ownership: 'I built and maintained the BFF alongside the React application it served.',
      challenges: [
        { title: 'Aggregating and shaping data', body: 'The client wants one response shaped for the screen, not several upstream responses to stitch together.' },
        { title: 'Reliability', body: 'Server-rendered pages and aggregated calls introduce new failure modes that need to be contained.' },
      ],
      approach: [
        { title: 'A thin Node/Express layer', body: 'The BFF aggregates and shapes API responses for the React application.' },
        { title: 'Server-side rendering', body: 'The same layer handled SSR, so pages arrive rendered and the React app takes over in the browser.' },
      ],
      impact: ['5XX errors dropped by 30%.'],
      tradeoffs: [
        'A BFF adds a service to run, monitor and keep in step with the client. The trade is a smaller, more stable contract between the UI and everything behind it.',
      ],
      diagram: {
        caption: illustrative,
        columns: [
          { title: 'Browser', nodes: ['React application'] },
          { title: 'BFF', nodes: ['Node and Express', 'Server-side rendering', 'API aggregation'] },
          { title: 'Upstream', nodes: ['Backend APIs'] },
        ],
      },
    },
  },
  {
    slug: 'invest-in-dubai',
    name: 'Invest in Dubai',
    kicker: 'Public website',
    summary:
      'Feature development on Dubai’s investor-facing website, built with Next.js using server-side rendering and static site generation.',
    employer: detEmployer,
    period: 'Nov 2025 – Present',
    involvement: 'Contributed',
    families: ['next'],
    stack: ['Next.js', 'React', 'TypeScript', 'SSR', 'SSG'],
    metrics: [],
    externalUrl: 'https://www.investindubai.gov.ae/',
  },
]

export const findProject = (slug: string) => projects.find((p) => p.slug === slug)
