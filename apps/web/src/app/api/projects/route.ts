import { projects } from '@/lib/fixtures';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get('featured');

  const filtered =
    featured === null
      ? projects
      : projects.filter((project) => project.featured === (featured === 'true'));

  return Response.json({ projects: filtered });
}
