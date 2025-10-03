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
    'Throughout my tech consulting career, I have focused on driving meaningful impact and modernization in banking web applications, transforming legacy systems into scalable, user-centered solutions that deliver real business value.',
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
    title: 'Leadership',
    description:
      'Leads from a technical, methodological, and business perspective with a global vision',
    skills: [
      {
        id: 'team-leadership',
        name: 'Team Leadership & Motivation',
        level: 3,
        stack: 'leadership',
        years: 1,
      },
      {
        id: 'team-leadership',
        name: 'Strategic Decision-Making',
        level: 4,
        stack: 'leadership',
        years: 2,
      },
      {
        id: 'team-leadership',
        name: 'Stakeholder Management & Communication',
        level: 4,
        stack: 'leadership',
        years: 5,
      },
            {
        id: 'team-leadership',
        name: 'Strategic Decision-Makingg',
        level: 4,
        stack: 'leadership',
        years: 5,
      },
    ],
  },
{
  id: 'management',
  title: 'Project & Team Management',
  description: 'Governance, agile frameworks, and methodologies to ensure quality delivery and stakeholder alignment.',
  skills: [
    { id: 'agile', name: 'Agile & Scrum methodologies', level: 5, stack: 'consulting', years: 7 },
    { id: 'lean', name: 'Lean & Continuous Improvement', level: 5, stack: 'consulting', years: 6 },
    { id: 'kanban', name: 'Kanban & workflow optimization', level: 4, stack: 'consulting', years: 5 },
    { id: 'governance', name: 'Project governance & stakeholder alignment', level: 5, stack: 'consulting', years: 7 },
  ],
},
  {
    id: 'experience-design',
    title: 'Stack & Skills',
    description: 'Secure and accessible banking interfaces, aligned with business needs.',
    skills: [
      { id: 'typescript', name: 'TypeScript', level: 4, stack: 'backend', years: 5 },
      { id: 'react', name: 'React', level: 3, stack: 'frontend', years: 3 },
      { id: 'github-copilot', name: 'GitHub Copilot', level: 5, stack: 'ai', years: 3 },
      { id: 'codex', name: 'Codex by OpenAI', level: 4, stack: 'ai', years: 4 },
      { id: 'ai-foundry', name: 'AI-Foundry', level: 3, stack: 'ai', years: 7 },
    ],
  },
  {
    id: 'cloud-backend',
    title: 'Cloud & Backend',
    description: 'Microservices architecture, legacy integration, and scalable deployments.',
    skills: [
      { id: 'azure-cloud', name: 'Azure Cloud', level: 3, stack: 'devops', years: 2},
      { id: 'postgresql', name: 'PostgreSQL', level: 3, stack: 'backend', years: 5 },
      { id: 'java-microservices', name: 'Java microservices', level: 3, stack: 'backend', years: 3 },
      { id: 'api-designs', name: 'API Design', level: 3, stack: 'backend', years: 2 },
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
      'Project Management: Coordinate and developed a project in 2025 bridging legacy systems with innovative architectures across the AI Agents and GenAI. From the Modernization Agency we have been driving initiatives powered by AI-Agents and generative AI, building process to transform legacy architectures into modern, scalable solutions based on BIAN approach.',
      'Leadership: Driving a full-stack team defining ux-solutions, guiding development (frontend & backend), deploying in cloud environments, and coordinating delivery with business stakeholders.',
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
      'Technical Leadership: Coordination between backend (Java microservices), frontend (React), and mainframe teams to implement key enhancements in Allfunds’ web portal.',
      'Software Development: Contributed with hands-on frontend and backend development tasks to support delivery goals.',
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
      'Technical Leadership: Leading software development projects, collaborating with clients, and assigning tasks to the team following Agile methodologies.',
      'Design and Implementation: Designing and implementing software solutions and documentation as Technical Designs, Functional Specification Document including all needs and expectation confirmed during the analysis phase. Supervising and leading implementation of the code to different environments.',
      'Mentoring and Collaboration: Mentoring junior programmers, participating in code reviews, and promoting collaboration within the team.',
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
      'Software Development: Build code, design functional and technical documentation and execute the implementation of new features. Fix bugs, and optimize existing code following coding standards and best practices. Main projects involve where with Banking clients such as WiZink or Bankinter.',
      'Testing and Debugging: Test software functionality, perform unit testing, integration testing, and assist with system or user acceptance testing. Debug and troubleshoot issues reported during testing or by users to ensure software performs as intended.',
      'Collaboration and Learning: Collaborate with team members, understand requirements, share progress, and seek guidance. Actively participate in meetings, discussions, and code reviews.',
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
      'Managed client portfolios, designing personalized banking plans and identifying new opportunities.',
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
    name: 'Modernization Agency & GenAI Platform',
    summary: 'Modernization hub combining generative AI, BIAN standards, and microservices to transform banking core systems.',
    highlights: [
      'Full-stack design: architecture, backend, and frontend to govern legacy channel migrations to cloud.',
      'Automates legacy functionality discovery and proposes target blueprints through GenAI agents.',
      'Includes operational dashboard with real-time metrics for management and technical teams.',
    ],
    tags: ['GenAI', 'BIAN', 'Azure', 'TypeScript', 'Microservices', 'CbN'],
    featured: true,
  },
  {
    id: 'allfunds-portal-modernization',
    name: 'Allfunds Digital Portal Modernization',
    summary: 'Evolution of Allfunds portal integrating mainframe and new microservices without degrading fund manager experience.',
    highlights: [
      'Coordinated backend, frontend, and core squads to deliver regulated releases on aggressive timelines.',
      'Implemented UX improvements and LifeRay modules ensuring AA accessibility and stable performance.',
    ],
    tags: ['LifeRay', 'Java', 'Azure DevOps', 'Microservices'],
    featured: true,
  }
];