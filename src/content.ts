/**
 * Edit this file to update the portfolio. No database or CMS is required.
 * For a project milestone, replace a general GitHub link with its specific repository URL
 * once that repository is public. Do not link to a repository you haven't published.
 */

export const profile = {
  name: 'Nicolas Lin',
  initials: 'NL',
  role: 'Computer Science student · Software & AI',
  school: "Queen's University",
  location: 'Ontario, Canada',
  email: 'nicolaslin20@gmail.com',
  github: 'https://github.com/CoolNicolas',
  resume: '', // To enable: put resume.pdf in public/ and set this to '/resume.pdf'.
  linkedIn: '', // Optional: paste a full LinkedIn URL to show a LinkedIn link.
  opportunity: 'Open to opportunities across technology',
  introduction:
    "I'm a Computer Science student at Queen's University who enjoys building things, learning new ideas, and exploring where software and AI can take us.",
  personalNote: 'Off the clock, you can usually find me playing basketball or League of Legends.',
}

export type JourneyKind = 'Project' | 'Learning' | 'Education'

/**
 * Media is displayed in the expandable project's gallery.
 * Screenshots and GIFs use type 'image'; MP4/WebM use type 'video'.
 * Host your own media in public/demos/... and point src to /demos/...
 */
export type DemoMedia = {
  type: 'image' | 'video'
  src: string
  alt: string
  caption: string
  poster?: string
}

export type ProjectDemo = {
  intro?: string
  media: DemoMedia[]
  liveUrl?: string
}

export type MilestoneCertificate = {
  src: string
  alt: string
  caption: string
  verifyUrl?: string
}

export type Milestone = {
  id: string
  number: string
  date: string
  kind: JourneyKind
  title: string
  summary: string
  story: string
  tags: string[]
  demo?: ProjectDemo
  certificate?: MilestoneCertificate
  link?: {
    label: string
    href: string
    /** Displayed alongside the button to make clear when it goes to a profile, not a specific repository. */
    note?: string
  }
}

export const milestones: Milestone[] = [
  {
    id: 'repository-analyzer',
    number: '01',
    date: 'NOV 2026',
    kind: 'Project',
    title: 'Built an AI repository analyzer',
    summary: 'Making it easier to understand unfamiliar code, with evidence you can inspect.',
    story:
      'I built a read-only GitHub repository assistant that uses FastAPI, Streamlit and SQLite FTS5 retrieval to answer questions about source code. It combines RAG, bounded agentic tool calling, and commit-pinned citations. The project taught me to care as much about trustworthy answers as useful ones.',
    tags: ['Python', 'FastAPI', 'RAG', 'Agentic AI'],
    demo: {
      intro: 'A closer look at the actual Streamlit application — from exploring a repository to answers with verifiable source citations.',
      media: [
        {
          type: 'video',
          src: '/demos/github-ai-demo.mp4',
          poster: '/demos/github-ai-poster.jpg',
          alt: '19-second walkthrough of the GitHub Repository Analyzer',
          caption: '00 / Watch the GitHub AI demo (19 seconds)',
        },
        {
          type: 'image',
          src: 'https://raw.githubusercontent.com/CoolNicolas/github-repository-analyzer/main/docs/screenshots/01-repository-overview.png',
          alt: 'Repository Analyzer screen showing a GitHub URL input and repository information for Flask',
          caption: '01 / Repository inspection',
        },
        {
          type: 'image',
          src: 'https://raw.githubusercontent.com/CoolNicolas/github-repository-analyzer/main/docs/screenshots/04-rag-answer-and-citations.png',
          alt: 'RAG question answer with source-code snippets and commit-pinned citations',
          caption: '02 / Evidence-backed answers',
        },
        {
          type: 'image',
          src: 'https://raw.githubusercontent.com/CoolNicolas/github-repository-analyzer/main/docs/screenshots/05-agentic-answer.png',
          alt: 'Read-only agent interface answering a repository question with source citations',
          caption: '03 / Read-only AI agent',
        },
        {
          type: 'image',
          src: 'https://raw.githubusercontent.com/CoolNicolas/github-repository-analyzer/main/docs/screenshots/02-source-files.png',
          alt: 'Source file browser listing selected files from a GitHub repository',
          caption: '04 / Source file browser',
        },
        {
          type: 'image',
          src: 'https://raw.githubusercontent.com/CoolNicolas/github-repository-analyzer/main/docs/screenshots/03-query-modes.png',
          alt: 'Application modes for analyzing, asking questions, and invoking the read-only agent',
          caption: '05 / Analysis modes',
        },
      ],
    },
    link: {
      label: 'Explore the repository',
      href: 'https://github.com/CoolNicolas/github-repository-analyzer',
    },
  },
  {
    id: 'google-ml',
    number: '02',
    date: 'NOV 2026',
    kind: 'Learning',
    title: 'Completed Google’s Machine Learning Crash Course',
    summary: 'Building a stronger foundation in how machine learning actually works.',
    story:
      'Worked through core machine learning ideas, including loss functions, gradient descent, training loops, classification, and evaluation. I wanted to go beyond using models and understand why they behave the way they do.',
    tags: ['Machine Learning', 'Model Evaluation', 'Fundamentals'],
    link: {
      label: 'About the course',
      href: 'https://developers.google.com/machine-learning/crash-course',
      note: 'Course information · not a personal completion certificate',
    },
  },
  {
    id: 'lunar-lander',
    number: '03',
    date: 'OCT 2026',
    kind: 'Project',
    title: 'Trained an AI to land a rocket',
    summary: 'A hands-on introduction to reinforcement learning — and the importance of the right rewards.',
    story:
      'Using Gymnasium and PPO, I trained and evaluated agents in LunarLander-v3. An early reward experiment caused the agent to hover rather than land, which showed me how an impressive score can hide the wrong behavior. I refined the reward function and measured actual landing success.',
    tags: ['Reinforcement Learning', 'Python', 'PPO'],
    demo: {
      intro: 'Watch the trained LunarLander agent attempt a controlled landing in the Gymnasium simulation.',
      media: [{
        type: 'video',
        src: '/demos/lunar-lander-demo.mp4',
        poster: '/demos/lunar-lander-poster.jpg',
        alt: 'Recorded demonstration of the Lunar Lander reinforcement-learning agent',
        caption: '01 / Lunar Lander demo (14 seconds)',
      }],
    },
    link: {
      label: 'Explore my GitHub',
      href: 'https://github.com/CoolNicolas',
      note: 'A direct project repository link can be added when available',
    },
  },
  {
    id: 'systems',
    number: '04',
    date: '2026',
    kind: 'Learning',
    title: 'Looked beneath the surface of software',
    summary: 'Learning how programs behave at the level of C, assembly, and memory.',
    story:
      'Through university systems coursework, I practiced C, x86-64 assembly, and debugging with GDB, including hands-on work with Bomb Lab and Attack Lab. It made the connection between higher-level code and the machine feel much more concrete.',
    tags: ['C', 'x86-64', 'GDB', 'Systems'],
  },
  {
    id: 'poker-trainer',
    number: '05',
    date: 'JUL 2026',
    kind: 'Project',
    title: 'Created a full-stack Poker Trainer',
    summary: 'Turning a learning idea into an interactive web application.',
    story:
      'I built a poker training application with Django, JavaScript, and SQLite. Working across the interface, application logic, and persistence layer gave me a much better understanding of how the pieces of a complete product fit together.',
    tags: ['Django', 'JavaScript', 'SQLite'],
    demo: {
      intro: 'A short tour of the Django-powered Poker Trainer interface and training features.',
      media: [{
        type: 'video',
        src: '/demos/poker-trainer-demo.mp4',
        poster: '/demos/poker-trainer-poster.jpg',
        alt: 'Screen recording showing the Poker Trainer web application',
        caption: '01 / Poker Trainer demo (29 seconds)',
      }],
    },
    link: {
      label: 'Explore my GitHub',
      href: 'https://github.com/CoolNicolas',
      note: 'A direct project repository link can be added when available',
    },
  },
  {
    id: 'cs50',
    number: '06',
    date: '2026',
    kind: 'Learning',
    title: 'Completed Harvard CS50 Web Programming',
    summary: 'Learning how to build for the web, from the server to the browser.',
    story:
      'Through CS50 Web Programming with Python and JavaScript, I worked on Django applications including Commerce and Wiki. It was an important step from writing individual programs to building complete web experiences.',
    tags: ['Python', 'Django', 'Web Development'],
    certificate: {
      src: '/certificates/cs50-web-programming.png',
      alt: 'CS50 certificate awarded to Nicolas Lin for completing Web Programming with Python and JavaScript, including six projects, in 2026',
      caption: 'CS50’s Web Programming with Python and JavaScript · 2026',
      verifyUrl: 'https://cs50.harvard.edu/certificates/4b74edf7-2f25-4ddf-af59-567ec4f6da7f',
    },
    link: {
      label: 'About the course',
      href: 'https://cs50.harvard.edu/web/',
      note: 'Course information',
    },
  },
  {
    id: 'queens',
    number: '07',
    date: 'ONGOING',
    kind: 'Education',
    title: "Studying Computer Science at Queen's",
    summary: 'Building a foundation in computing while staying curious outside the classroom.',
    story:
      "I'm pursuing a Computer Science degree at Queen's University, studying topics such as algorithms, discrete mathematics, computer systems and software development. I try to put what I learn into practice by making things of my own.",
    tags: ['Computer Science', "Queen's University"],
    link: {
      label: "Explore Queen's Computing",
      href: 'https://www.cs.queensu.ca/',
      note: 'University program information',
    },
  },
  {
    id: 'uoft-ai',
    number: '08',
    date: '2024',
    kind: 'Learning',
    title: 'Took my first steps into AI',
    summary: 'Earned an AI & Machine Learning with Python skill badge from U of T SCS.',
    story:
      'My early interest in AI led me to study AI and machine learning with Python through the University of Toronto School of Continuing Studies. That starting point eventually led to more ambitious personal experiments.',
    tags: ['AI', 'Python', 'Foundations'],
  },
]

export const interests = [
  {
    number: '01',
    name: 'Basketball',
    description: 'The pace, the teamwork, the feeling of getting better with every game. Basketball keeps me moving and reminds me how much a team can accomplish together.',
    symbol: '↗',
  },
  {
    number: '02',
    name: 'League of Legends',
    description: "I love the strategy, the decision-making, and the challenge of working with other people toward the same goal. There's always something new to learn.",
    symbol: '✳',
  },
]
