export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);

  if (!payload || typeof payload.email !== 'string') {
    return Response.json({ error: 'Datos inválidos' }, { status: 400 });
  }

  return Response.json({ status: 'accepted' }, { status: 202 });
}
