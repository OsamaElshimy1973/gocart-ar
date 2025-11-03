// /app/[lang]/layout.js

import { getDirection } from '../../i18nConfig';
import ClientProvider from '@/i18n/ClientProvider';
import Header from '@/components/Header'; // 👈 Import Header

export default function RootLayout({ children, params }) {
  const { lang } = params;
  const dir = getDirection(lang);

  return (
    <html lang={lang} dir={dir}>
      <body>
        <ClientProvider lng={lang}>
          {/* 💥 NEW: Render the Header component, passing the current language */}
          <Header lang={lang} /> 
          
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}