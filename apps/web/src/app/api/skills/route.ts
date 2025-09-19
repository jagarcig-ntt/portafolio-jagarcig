import { skillCategories } from '@/lib/fixtures';

export async function GET() {
  return Response.json({ categories: skillCategories });
}
