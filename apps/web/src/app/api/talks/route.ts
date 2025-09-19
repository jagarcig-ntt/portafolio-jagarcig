import { talks } from '@/lib/fixtures';

export async function GET() {
  return Response.json({ talks });
}
