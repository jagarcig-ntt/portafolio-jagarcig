import { Brain, BriefcaseBusiness, Code2, Mic, Send, Sparkles } from 'lucide-react';
import { Hero } from '@/components/hero';
import { SectionCard } from '@/components/section-card';
import { ProjectCard } from '@/components/project-card';
import { Timeline } from '@/components/timeline';
import { SkillBadge } from '@/components/skill-badge';
import { Badge } from '@/components/ui/badge';
import {
  articles,
  experiences,
  profile,
  projects,
  skillCategories,
  talks,
} from '@/lib/fixtures';

const dashboardSections = [
  {
    title: 'Stack & Skills',
    description: 'Core tech stack and cloud tools.',
    icon: <Code2 className="h-5 w-5" />,
    href: '#skills',
  },
  {
    title: 'Experience',
    description: 'Technical leadership and key deliverables.',
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    href: '#experience',
  },
  {
    title: 'Projects',
    description: 'Case studies with measurable impact.',
    icon: <Sparkles className="h-5 w-5" />,
    href: '#projects',
  },
  {
    title: 'Talks & Articles',
    description: 'Knowledge sharing and community.',
    icon: <Mic className="h-5 w-5" />,
    href: '#talks',
  },
  {
    title: 'Playground',
    description: 'Labs, 3D experiments and motion.',
    icon: <Brain className="h-5 w-5" />,
    href: '#playground',
  },
  {
    title: 'Contact',
    description: 'Let\'s discuss your next challenge.',
    icon: <Send className="h-5 w-5" />,
    href: '#contact',
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        aria-labelledby="dashboard-overview"
        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <h2 id="dashboard-overview" className="sr-only">
          Quick navigation
        </h2>
        {dashboardSections.map((section) => (
          <SectionCard key={section.title} {...section} />
        ))}
      </section>

      <section id="projects" aria-labelledby="projects-title" className="mt-20 space-y-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="projects-title" className="font-display text-3xl font-semibold text-white">
              Featured Projects
            </h2>
            <p className="text-sm text-white/70">
              Cloud products with tangible results and real measurements.
            </p>
          </div>
          <div className="flex gap-3 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent-mint" />
              <span>Live</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cloud-lavender" />
              <span>Repository</span>
            </div>
          </div>
        </header>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {otherProjects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      <section
        id="skills"
        aria-labelledby="skills-title"
        className="mt-20 space-y-10"
      >
        <header className="space-y-2">
          <h2 id="skills-title" className="font-display text-3xl font-semibold text-white">
            Stack & Skills
          </h2>
          <p className="text-sm text-white/70">
            Deep expertise in frontend, backend, and cloud automation for end-to-end products.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <article key={category.id} className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                <p className="text-sm text-white/70">{category.description}</p>
              </div>
              <div className="grid gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.id} skill={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="mt-20 space-y-10"
      >
        <header className="space-y-2">
          <h2 id="experience-title" className="font-display text-3xl font-semibold text-white">
            Experience
          </h2>
          <p className="text-sm text-white/70">
            Stories of impact, scalability, and technical leadership.
          </p>
        </header>
        <Timeline experiences={experiences} />
      </section>

      <section id="talks" aria-labelledby="talks-title" className="mt-20 space-y-10">
        <header className="space-y-2">
          <h2 id="talks-title" className="font-display text-3xl font-semibold text-white">
            Talks & Articles
          </h2>
          <p className="text-sm text-white/70">
            Sharing learnings about UX, PostgreSQL, and cloud platforms.
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-glass backdrop-blur">
            <h3 className="text-lg font-semibold">Recent Talks</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {talks.map((talk) => (
                <li key={talk.id} className="flex flex-col gap-1">
                  <a
                    href={talk.link}
                    className="text-white transition hover:text-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                  >
                    {talk.title}
                  </a>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-white/50">
                    <span>{talk.event}</span>
                    <span>{new Date(talk.date).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}</span>
                  </div>
                  <p>{talk.summary}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-glass backdrop-blur">
            <h3 className="text-lg font-semibold">Articles</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {articles.map((article) => (
                <li key={article.id} className="flex flex-col gap-1">
                  <a
                    href={article.canonicalUrl}
                    className="text-white transition hover:text-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
                  >
                    {article.title}
                  </a>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/50">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} className="bg-white/10 text-white/70">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p>{article.summary}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section
        id="playground"
        aria-labelledby="playground-title"
        className="mt-20 space-y-10"
      >
        <header className="space-y-2">
          <h2 id="playground-title" className="font-display text-3xl font-semibold text-white">
            Playground
          </h2>
          <p className="text-sm text-white/70">
            WebGL experiments, data viz, and rapid interaction prototypes.
          </p>
        </header>
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-white/60 backdrop-blur">
          <p>
            Coming soon: repository of experiments with react-three-fiber, particles, and serverless microservices.
          </p>
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-glass backdrop-blur"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 id="contact-title" className="font-display text-3xl font-semibold text-white">
              Let's build something brilliant
            </h2>
            <p className="text-sm text-white/70">
              Reach out to collaborate on cloud products, data platforms, or immersive web experiences.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <a
              href="mailto:hello@jaime.dev"
              className="inline-flex items-center justify-center rounded-full bg-accent-mint px-6 py-3 text-sm font-semibold text-cloud-deep transition hover:bg-accent-mint/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
            >
              hello@jaime.dev
            </a>
            <a
              href="https://cal.com/jaime"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mint"
            >
              Schedule a 1:1
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
