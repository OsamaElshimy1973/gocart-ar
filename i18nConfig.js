// /i18nConfig.js

export const i18nConfig = {
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  fallbackLocale: 'en',
  // 💥 NEW: Add 'header' to the list of available namespaces
  namespaces: ['common', 'header'], 
};

export function getDirection(locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}