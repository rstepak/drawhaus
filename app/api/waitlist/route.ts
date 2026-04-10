import { addToWaitlist, isEmailRegistered } from '@/lib/waitlist';

export async function POST(request: Request) {
  let body: { email?: unknown; type?: unknown };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const email = (typeof body.email === 'string' ? body.email : '').trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const type = body.type === 'creator' ? 'creator' : 'fan';

  try {
    const alreadyRegistered = await isEmailRegistered(email);

    if (alreadyRegistered) {
      return Response.json(
        { error: "You're already on the waitlist." },
        { status: 409 }
      );
    }

    const entry = await addToWaitlist(email, type);
    return Response.json({ success: true, entry }, { status: 201 });
  } catch (err) {
    console.error('[waitlist]', err);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
