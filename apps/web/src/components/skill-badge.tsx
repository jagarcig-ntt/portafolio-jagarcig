import type { Skill } from '@/lib/types';

const stackLabels: Record<Skill['stack'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  data: 'Data',
  product: 'Product',
  leadership: 'Leadership',
  ai: 'AI',
  consulting: 'Consulting',
};

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-sm text-card-foreground">
      <div>
        <p className="font-medium text-foreground">{skill.name}</p>
        <p className="text-xs uppercase tracking-wide text-muted-foreground/70">
          {stackLabels[skill.stack]}
        </p>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full border ${
              index < skill.level 
                ? 'bg-accent border-accent' 
                : 'bg-transparent border-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
