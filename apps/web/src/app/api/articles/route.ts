import { articles } from '@/lib/fixtures';

export async function GET() {
  return Response.json({ articles });
}
