import type { Experience } from '@/lib/types';

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <ol className="relative border-l border-border pl-6">
      {experiences.map((experience) => (
        <li key={experience.id} className="mb-8 ml-4">
          <div className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border border-accent bg-background">
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-glass backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{experience.role}</h3>
                <p className="text-sm text-muted-foreground">{experience.company}</p>
              </div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
                {formatRange(experience.startDate, experience.endDate)}
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-muted-foreground/70">
              {experience.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-border bg-muted px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function formatRange(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : undefined;
  const startText = start.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
  const endText = end
    ? end.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })
    : 'Actualidad';
  return `${startText} — ${endText}`;
}
