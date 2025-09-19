import type {
  Article,
  Experience,
  Profile,
  Project,
  SkillCategory,
  Talk,
} from './types';

export const profile: Profile = {
  id: 'jaime-garcia-garcia',
  name: 'Jaime Garcia Garcia',
  role: 'Senior Software Lead · Banking Modernization & GenAI',
  location: 'Getafe, Comunidad de Madrid, España',
  summary:
    'Me apasiona combinar liderazgo técnico y visión de negocio para modernizar la banca: conecto sistemas core con microservicios cloud, IA generativa y automatización para entregar valor medible.',
  availability: 'open',
  photoUrl: '/jaime.jpeg',
  metrics: [
    { label: 'Transformaciones bancarias', value: '7 años' },
    { label: 'Equipos dirigidos', value: '8-12 personas' },
    { label: 'Experiencia total', value: '10+ años' },
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
    title: 'Modernización & Liderazgo',
    description:
      'Dirección técnica end-to-end con estándares BIAN y programas de transformación bancaria impulsados por GenAI.',
    skills: [
      {
        id: 'bank-modernization',
        name: 'Estrategia BIAN & modernización core',
        level: 5,
        stack: 'leadership',
        years: 5,
      },
      {
        id: 'genai-modernization',
        name: 'Plataformas de modernización con GenAI',
        level: 4,
        stack: 'ai',
        years: 3,
      },
      {
        id: 'team-leadership',
        name: 'Liderazgo de equipos multidisciplinares',
        level: 5,
        stack: 'leadership',
        years: 7,
      },
    ],
  },
  {
    id: 'cloud-backend',
    title: 'Cloud & Backend',
    description: 'Arquitectura de microservicios, integración legacy y despliegues escalables.',
    skills: [
      { id: 'azure-devops', name: 'Azure DevOps', level: 4, stack: 'devops', years: 4 },
      { id: 'postgresql', name: 'PostgreSQL', level: 4, stack: 'backend', years: 6 },
      { id: 'java-microservices', name: 'Java microservices', level: 4, stack: 'backend', years: 5 },
      { id: 'integration', name: 'Integración mainframe & APIs', level: 4, stack: 'backend', years: 4 },
    ],
  },
  {
    id: 'experience-design',
    title: 'Frontend & Experiencia de Usuario',
    description: 'Interfaces bancarias seguras y accesibles, alineadas con negocio.',
    skills: [
      { id: 'typescript', name: 'TypeScript', level: 4, stack: 'frontend', years: 5 },
      { id: 'liferay', name: 'LifeRay', level: 4, stack: 'frontend', years: 3 },
      { id: 'react', name: 'React', level: 4, stack: 'frontend', years: 4 },
      { id: 'ux-collaboration', name: 'Colaboración UX & stakeholders', level: 5, stack: 'product', years: 7 },
    ],
  },
  {
    id: 'operations',
    title: 'Operación & Mejora Continua',
    description: 'Metodologías Lean, Jira y automatización para entregar con calidad.',
    skills: [
      { id: 'lean', name: 'Lean & mejora continua', level: 4, stack: 'consulting', years: 4 },
      { id: 'jira', name: 'Gestión de proyectos con Jira', level: 4, stack: 'product', years: 5 },
      { id: 'mentoring', name: 'Mentoring & coaching técnico', level: 5, stack: 'leadership', years: 6 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'ntt-senior-technical-lead',
    company: 'NTT DATA',
    role: 'Senior Technical Lead',
    location: 'Madrid, España',
    startDate: '2025-07-01',
    highlights: [
      'Dirijo equipos cross-funcionales para modernizar plataformas bancarias, conectando core legacy con microservicios cloud-native.',
      'Diseñé y lancé una plataforma de modernización impulsada por IA generativa alineada con estándares BIAN.',
      'Acelero la transición de pruebas de concepto a soluciones escalables mediante automatización y observabilidad.',
    ],
    tech: ['GenAI', 'BIAN', 'Microservicios', 'Azure', 'TypeScript'],
  },
  {
    id: 'ntt-software-engineer-lead',
    company: 'NTT DATA',
    role: 'Software Engineer Technical Lead',
    location: 'Madrid, España',
    startDate: '2022-07-01',
    endDate: '2025-07-01',
    highlights: [
      'Coordiné squads backend, frontend y mainframe para modernizar el portal de Allfunds sin interrumpir operaciones.',
      'Definí arquitectura híbrida legacy/cloud garantizando cumplimiento en un entorno altamente regulado.',
      'Aporté contribuciones de código en frontend LifeRay y APIs Java para acelerar entregables clave.',
    ],
    tech: ['Java', 'LifeRay', 'Azure DevOps', 'PostgreSQL', 'Mainframe'],
  },
  {
    id: 'ntt-senior-software-engineer',
    company: 'NTT DATA',
    role: 'Senior Software Engineer',
    location: 'Madrid, España',
    startDate: '2020-02-01',
    endDate: '2022-07-01',
    highlights: [
      'Lideré el diseño técnico y la documentación funcional de soluciones bancarias end-to-end.',
      'Guié la implementación y despliegue a múltiples entornos con prácticas de calidad y automatización.',
      'Mentoricé perfiles junior, fomentando revisión de código y buenas prácticas DevOps.',
    ],
    tech: ['TypeScript', 'Java', 'SQL', 'Azure DevOps'],
  },
  {
    id: 'ntt-software-engineer',
    company: 'NTT DATA',
    role: 'Software Engineer',
    location: 'Madrid, España',
    startDate: '2018-07-01',
    endDate: '2020-02-01',
    highlights: [
      'Desarrollé nuevas funcionalidades y optimicé código existente para plataformas bancarias.',
      'Ejecuté testing unitario e integración asegurando estándares de calidad.',
      'Colaboré con negocio y QA para resolver incidencias críticas con rapidez.',
    ],
    tech: ['Java', 'SQL', 'Testing', 'Scrum'],
  },
  {
    id: 'santander-uk',
    company: 'Santander UK',
    role: 'Personal Banker',
    location: 'Londres, Reino Unido',
    startDate: '2016-01-01',
    endDate: '2018-06-30',
    highlights: [
      'Gestioné carteras de clientes, diseñando planes financieros personalizados y detectando nuevas oportunidades.',
      'Lideré iniciativas de riesgo semanal y reportes para el equipo de operaciones.',
      'Actué como Digital Champion promoviendo adopción de apps móviles y soporte técnico in-branch.',
    ],
    tech: ['CRM', 'Gestión de riesgo', 'Customer Success'],
  },
  {
    id: 'santander-internship',
    company: 'Banco Santander',
    role: 'Internship Trainee',
    location: 'Madrid, España',
    startDate: '2014-11-01',
    endDate: '2015-12-31',
    highlights: [
      'Co-organicé workshops internacionales para coordinar la estrategia digital de Santander Universidades.',
      'Gestioné comunidades virtuales con más de 500 miembros en 18 países compartiendo mejores prácticas.',
      'Demostré habilidades de organización y comunicación ante equipos directivos globales.',
    ],
    tech: ['Comunicación', 'Gestión de eventos', 'Social Media'],
  },
];

export const projects: Project[] = [
  {
    id: 'genai-modernization-platform',
    name: 'BIAN GenAI Modernization Platform',
    summary: 'Hub de modernización que combina IA generativa, estándares BIAN y microservicios para transformar core bancario.',
    highlights: [
      'Diseño full-stack: arquitectura, backend y frontend para gobernar migraciones de canales legacy a cloud.',
      'Automatiza discovery de funcionalidades legacy y propone blueprint objetivo mediante agentes GenAI.',
      'Incluye panel operativo con métricas en tiempo real para dirección y equipos técnicos.',
    ],
    tags: ['GenAI', 'BIAN', 'Azure', 'TypeScript', 'Microservicios'],
    featured: true,
  },
  {
    id: 'allfunds-portal-modernization',
    name: 'Allfunds Digital Portal Modernization',
    summary: 'Evolución del portal Allfunds integrando mainframe y nuevos microservicios sin degradar la experiencia de los gestores.',
    highlights: [
      'Coordiné squads backend, frontend y core para entregar releases reguladas en plazos agresivos.',
      'Implementé mejoras UX y módulos LifeRay asegurando accesibilidad AA y rendimiento estable.',
      'Definí pipelines Azure DevOps con pruebas automatizadas y despliegues controlados.',
    ],
    tags: ['LifeRay', 'Java', 'Azure DevOps', 'Microservicios'],
    featured: true,
  },
  {
    id: 'legacy-to-cloud-accelerator',
    name: 'Legacy to Cloud Accelerator',
    summary: 'Toolkit interno que acelera la migración de procesos bancarios legacy a microservicios cloud-native.',
    highlights: [
      'Plantillas IaC y scripts de migración para estandarizar despliegues multi-entorno.',
      'Playbooks de riesgos y compliance para banca, alineados con regulaciones locales.',
      'Repositorio de componentes frontend reutilizables para portales financieros.',
    ],
    tags: ['DevOps', 'Infra as Code', 'Compliance'],
    featured: false,
  },
];

export const talks: Talk[] = [
  {
    id: 'banking-modernization-summit',
    title: 'Generative AI aplicado a modernización bancaria con BIAN',
    event: 'NTT DATA Banking Modernization Summit',
    date: '2024-11-15',
    link: 'https://www.nttdata.com/',
    summary: 'Cómo pasar de POCs a plataformas escalables combinando agentes GenAI y arquitectura BIAN.',
  },
];

export const articles: Article[] = [
  {
    id: 'modernization-blueprint',
    title: 'Blueprint para modernizar la banca con microservicios y BIAN',
    publishedAt: '2023-09-10',
    summary:
      'Metodología en cinco fases para modernizar core bancario sin interrumpir operaciones críticas.',
    canonicalUrl: 'https://www.nttdata.com/global/es/blog',
    tags: ['BIAN', 'Modernización bancaria', 'Microservicios'],
  },
  {
    id: 'genai-banking',
    title: 'GenAI como catalizador de la transformación bancaria',
    publishedAt: '2024-03-08',
    summary:
      'Casos reales de IA generativa acelerando discovery y delivery en programas de modernización.',
    canonicalUrl: 'https://www.nttdata.com/global/es/insights',
    tags: ['GenAI', 'Transformación digital', 'Banca'],
  },
];
