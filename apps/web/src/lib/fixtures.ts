import type {
  Article,
  Experience,
  Profile,
  Project,
  SkillCategory,
} from './types';

export const profile: Profile = {
  id: 'jaime-garcia-garcia',
  name: 'Jaime Garcia Garcia',
  role: 'Senior Technical Lead · Banking Modernization & GenAI',
  location: 'Madrid, Spain',
  summary:
    'I combine technical leadership with business vision to modernize banking: connecting core systems with cloud microservices, generative AI, and automation to deliver measurable value.',
  availability: 'open',
  photoUrl: '/jaime.jpeg',
  metrics: [
    { label: 'Banking transformations', value: '7 years' },
    { label: 'Teams led', value: '8-12 people' },
    { label: 'Total experience', value: '10+ years' },
  ],
  links: [
    { platform: 'phone', label: '+34 659 232 570', href: 'tel:+34659232570' },
    {
      platform: 'email',
      label: 'jaime.garciagarcia.uk@gmail.com',
      href: 'mailto:jaime.garciagarcia.uk@gmail.com',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jaimegarciauk',
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'modernization-leadership',
    title: 'Modernization & Leadership',
    description:
      'End-to-end technical direction with BIAN standards and GenAI-driven banking transformation programs.',
    skills: [
      {
        id: 'bank-modernization',
        name: 'BIAN Strategy & core modernization',
        level: 5,
        stack: 'leadership',
        years: 5,
      },
      {
        id: 'genai-modernization',
        name: 'GenAI modernization platforms',
        level: 4,
        stack: 'ai',
        years: 3,
      },
      {
        id: 'team-leadership',
        name: 'Cross-functional team leadership',
        level: 5,
        stack: 'leadership',
        years: 7,
      },
    ],
  },
  {
    id: 'cloud-backend',
    title: 'Cloud & Backend',
    description: 'Microservices architecture, legacy integration, and scalable deployments.',
    skills: [
      { id: 'azure-devops', name: 'Azure DevOps', level: 4, stack: 'devops', years: 4 },
      { id: 'postgresql', name: 'PostgreSQL', level: 4, stack: 'backend', years: 6 },
      { id: 'java-microservices', name: 'Java microservices', level: 4, stack: 'backend', years: 5 },
      { id: 'integration', name: 'Mainframe & API integration', level: 4, stack: 'backend', years: 4 },
    ],
  },
  {
    id: 'experience-design',
    title: 'Frontend & User Experience',
    description: 'Secure and accessible banking interfaces, aligned with business needs.',
    skills: [
      { id: 'typescript', name: 'TypeScript', level: 4, stack: 'frontend', years: 5 },
      { id: 'liferay', name: 'LifeRay', level: 4, stack: 'frontend', years: 3 },
      { id: 'react', name: 'React', level: 4, stack: 'frontend', years: 4 },
      { id: 'ux-collaboration', name: 'UX & stakeholder collaboration', level: 5, stack: 'product', years: 7 },
    ],
  },
  {
    id: 'operations',
    title: 'Operations & Continuous Improvement',
    description: 'Lean methodologies, Jira, and automation for quality delivery.',
    skills: [
      { id: 'lean', name: 'Lean & continuous improvement', level: 4, stack: 'consulting', years: 4 },
      { id: 'jira', name: 'Project management with Jira', level: 4, stack: 'product', years: 5 },
      { id: 'mentoring', name: 'Technical mentoring & coaching', level: 5, stack: 'leadership', years: 6 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'ntt-senior-technical-lead',
    company: 'NTT DATA',
    role: 'Senior Technical Lead',
    location: 'Madrid, Spain',
    startDate: '2025-07-01',
    highlights: [
      'Lead cross-functional teams to modernize banking platforms, connecting legacy core systems with cloud-native microservices.',
      'Designed and launched a GenAI-driven modernization platform aligned with BIAN standards.',
      'Accelerated the transition from proof-of-concepts to scalable solutions through automation and observability.',
    ],
    tech: ['GenAI', 'BIAN', 'Microservices', 'Azure', 'TypeScript'],
  },
  {
    id: 'ntt-software-engineer-lead',
    company: 'NTT DATA',
    role: 'Software Engineer Technical Lead',
    location: 'Madrid, Spain',
    startDate: '2022-07-01',
    endDate: '2025-07-01',
    highlights: [
      'Coordinated backend, frontend, and mainframe squads to modernize Allfunds portal without disrupting operations.',
      'Defined hybrid legacy/cloud architecture ensuring compliance in a highly regulated environment.',
      'Contributed code in LifeRay frontend and Java APIs to accelerate key deliverables.',
    ],
    tech: ['Java', 'LifeRay', 'Azure DevOps', 'PostgreSQL', 'Mainframe'],
  },
  {
    id: 'ntt-senior-software-engineer',
    company: 'NTT DATA',
    role: 'Senior Software Engineer',
    location: 'Madrid, Spain',
    startDate: '2020-02-01',
    endDate: '2022-07-01',
    highlights: [
      'Led technical design and functional documentation of end-to-end banking solutions.',
      'Guided implementation and deployment to multiple environments with quality practices and automation.',
      'Mentored junior profiles, fostering code review and DevOps best practices.',
    ],
    tech: ['TypeScript', 'Java', 'SQL', 'Azure DevOps'],
  },
  {
    id: 'ntt-software-engineer',
    company: 'NTT DATA',
    role: 'Software Engineer',
    location: 'Madrid, Spain',
    startDate: '2018-07-01',
    endDate: '2020-02-01',
    highlights: [
      'Developed new features and optimized existing code for banking platforms.',
      'Executed unit and integration testing ensuring quality standards.',
      'Collaborated with business and QA to resolve critical incidents quickly.',
    ],
    tech: ['Java', 'SQL', 'Testing', 'Scrum'],
  },
  {
    id: 'santander-uk',
    company: 'Santander UK',
    role: 'Personal Banker',
    location: 'London, United Kingdom',
    startDate: '2016-01-01',
    endDate: '2018-06-30',
    highlights: [
      'Managed client portfolios, designing personalized financial plans and identifying new opportunities.',
      'Led weekly risk initiatives and reports for the operations team.',
      'Served as Digital Champion promoting mobile app adoption and providing in-branch technical support.',
    ],
    tech: ['CRM', 'Risk Management', 'Customer Success'],
  },
  {
    id: 'santander-internship',
    company: 'Banco Santander',
    role: 'Internship Trainee',
    location: 'Madrid, Spain',
    startDate: '2014-11-01',
    endDate: '2015-12-31',
    highlights: [
      'Co-organized international workshops to coordinate Santander Universidades digital strategy.',
      'Managed virtual communities with 500+ members across 18 countries sharing best practices.',
      'Demonstrated organizational and communication skills to global executive teams.',
    ],
    tech: ['Communication', 'Event Management', 'Social Media'],
  },
];

export const projects: Project[] = [
  {
    id: 'genai-modernization-platform',
    name: 'BIAN GenAI Modernization Platform',
    summary: 'Modernization hub combining generative AI, BIAN standards, and microservices to transform banking core systems.',
    highlights: [
      'Full-stack design: architecture, backend, and frontend to govern legacy channel migrations to cloud.',
      'Automates legacy functionality discovery and proposes target blueprints through GenAI agents.',
      'Includes operational dashboard with real-time metrics for management and technical teams.',
    ],
    tags: ['GenAI', 'BIAN', 'Azure', 'TypeScript', 'Microservices'],
    featured: true,
  },
  {
    id: 'allfunds-portal-modernization',
    name: 'Allfunds Digital Portal Modernization',
    summary: 'Evolution of Allfunds portal integrating mainframe and new microservices without degrading fund manager experience.',
    highlights: [
      'Coordinated backend, frontend, and core squads to deliver regulated releases on aggressive timelines.',
      'Implemented UX improvements and LifeRay modules ensuring AA accessibility and stable performance.',
      'Defined Azure DevOps pipelines with automated testing and controlled deployments.',
    ],
    tags: ['LifeRay', 'Java', 'Azure DevOps', 'Microservices'],
    featured: true,
  },
  {
    id: 'legacy-to-cloud-accelerator',
    name: 'Legacy to Cloud Accelerator',
    summary: 'Internal toolkit that accelerates migration of legacy banking processes to cloud-native microservices.',
    highlights: [
      'IaC templates and migration scripts to standardize multi-environment deployments.',
      'Banking risk and compliance playbooks aligned with local regulations.',
      'Repository of reusable frontend components for financial portals.',
    ],
    tags: ['DevOps', 'Infra as Code', 'Compliance'],
    featured: false,
  },
];

export const articles: Article[] = [
  {
    id: 'modernization-blueprint',
    title: 'Blueprint for Modernizing Banking with Microservices and BIAN',
    publishedAt: '2023-09-10',
    summary:
      'Five-phase methodology to modernize banking core without disrupting critical operations.',
    canonicalUrl: 'https://www.nttdata.com/global/es/blog',
    tags: ['BIAN', 'Banking Modernization', 'Microservices'],
  },
  {
    id: 'genai-banking',
    title: 'GenAI as a Catalyst for Banking Transformation',
    publishedAt: '2024-03-08',
    summary:
      'Real cases of generative AI accelerating discovery and delivery in modernization programs.',
    canonicalUrl: 'https://www.nttdata.com/global/es/insights',
    tags: ['GenAI', 'Digital Transformation', 'Banking'],
  },
];
