// /app/[lang]/layout.js

export default function RootLayout({ children, params }) {
  // The 'lang' parameter is automatically populated by Next.js i18n routing.
  const { lang } = params;

  // Determine the direction based on the locale
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    // 1. Set the language on the <html> tag
    <html lang={lang} dir={dir}>
      <body>
        {/* Your application content will be rendered here */}
        {children}
      </body>
    </html>
  );
}