// /middleware.ts (Must be in the root directory)

import { NextResponse } from 'next/server';

// 1. Next.js does not recommend importing next.config.mjs directly in middleware.
//    A common pattern is to duplicate the essential config values or read the environment.
//    However, if you must import it, you need to ensure Next.js can resolve it.
//    For simplicity and demonstration, we'll read a mocked config object here.

// 🚨 Define the essential i18n configuration for TypeScript
const i18nConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
};
const { locales, defaultLocale } = i18nConfig;

// Helper function to get the best matching locale
function getLocale(request: Request) {
  // In a real i18n setup, this logic would detect locale from the headers
  return defaultLocale;
}

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  // 1. Check if the locale is missing in the pathname (e.g., user navigated to /about)
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 2. Redirect if the locale is missing (e.g., /about -> /en/about)
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // Redirect to the new URL with the locale prefix
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

// 3. Define the matcher for middleware to run on (excluding static files and Next.js internals)
export const config = {
  // We explicitly exclude common static file paths and internal Next.js paths.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|locales|.*\\..*).*)',
  ],
};