import { profile } from '@/lib/fixtures';

export async function GET() {
  return Response.json({ profile });
}
