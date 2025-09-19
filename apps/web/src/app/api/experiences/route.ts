import { experiences } from '@/lib/fixtures';

export async function GET() {
  return Response.json({ experiences });
}
