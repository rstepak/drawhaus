import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Countries explicitly allowed to access competition and entry pages.
const ALLOWED_COUNTRIES = new Set(['GB', 'AU', 'NZ']);

// Paths that require a geo-check.
// Competitions, entry flow — anything a user could enter a draw through.
const GEO_RESTRICTED_PATHS = ['/competitions', '/checkout'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isRestricted = GEO_RESTRICTED_PATHS.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (!isRestricted) {
    return NextResponse.next();
  }

  // Vercel sets this header automatically from its edge network.
  // In local development it will be absent, so we allow the request through.
  const country = request.headers.get('x-vercel-ip-country');

  if (country && !ALLOWED_COUNTRIES.has(country)) {
    return NextResponse.redirect(
      new URL('/region-unavailable', request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all paths except Next.js internals and static assets.
     * The proxy function itself applies the path-level filter above.
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
