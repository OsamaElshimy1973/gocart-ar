// /i18nConfig.js

// This file provides a single source of truth for i18n configuration
export const i18nConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  // Fallback to 'en' if the requested locale is not available
  fallbackLocale: 'en',
  // Define namespaces (groups of translations)
  namespaces: ['common'],
};

// Helper function to determine direction
export function getDirection(locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}