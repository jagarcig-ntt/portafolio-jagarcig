import type { Skill } from '@/lib/types';

const stackLabels: Record<Skill['stack'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  data: 'Datos',
  product: 'Producto',
  leadership: 'Liderazgo',
  ai: 'IA',
  consulting: 'Consultoría',
};

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
      <div>
        <p className="font-medium text-white">{skill.name}</p>
        <p className="text-xs uppercase tracking-wide text-white/50">
          {stackLabels[skill.stack]}
        </p>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index < skill.level ? 'bg-accent-mint' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
