// /app/[lang]/page.js

import { getT } from '@/i18n/i18n-server'; // Adjust path if needed
// import LanguageSwitcher from '@/components/LanguageSwitcher'; // (Optional future component)

export default async function HomePage({ params }) {
  const { lang } = params;

  // Use the server helper to load 'common' namespace translations for the current language
  const t = await getT(lang, 'common');

  return (
    <main style={{ padding: '20px' }}>
      <h1>{t('welcome_message')}</h1>
      {/* <LanguageSwitcher /> */}
      <p>Current Locale: {lang}</p>
    </main>
  );
}