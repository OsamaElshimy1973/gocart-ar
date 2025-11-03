// /src/i18n/i18n-server.js

import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig } from '../../i18nConfig';

// Initialize i18next instance for Server Components
const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      // Load translation files from the public/locales directory
      resourcesToBackend((language, namespace) => 
        import(`../../public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      lng,
      ns,
      defaultNS: i18nConfig.namespaces[0],
      fallbackLng: i18nConfig.fallbackLocale,
      supportedLngs: i18nConfig.locales,
      preload: typeof window === 'undefined' ? i18nConfig.locales : []
    });
  return i18nInstance;
};

// Function to get the translation function 't'
export async function getT(lng, ns) {
  const i18nextInstance = await initI18next(lng, ns);
  return i18nextInstance.t;
}