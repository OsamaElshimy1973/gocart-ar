// /next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations

  // 💥 Internationalization Configuration Block
  i18n: {
    // List of all supported locales
    locales: ['en', 'ar'],
    // This is the default locale 
    defaultLocale: 'en',
    // Ensures Next.js handles redirects based on browser settings (optional)
    localeDetection: true, 
  },
  // --------------------------------------------------------------------------
};

export default nextConfig;