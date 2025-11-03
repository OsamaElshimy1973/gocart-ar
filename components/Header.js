// /components/Header.js

import { getT } from '@/i18n/i18n-server';
import Link from 'next/link';

// NOTE: This component is currently language-aware because it expects a 'lang' prop
export default async function Header({ lang }) {
  // Pass 'header' to load its specific translations
  const t = await getT(lang, 'header'); 

  return (
    <header style={{ 
      backgroundColor: '#f0f0f0', 
      padding: '10px 20px', 
      display: 'flex', 
      justifyContent: 'space-between',
      // Dynamic alignment based on locale direction
      flexDirection: lang === 'ar' ? 'row-reverse' : 'row'
    }}>
      <div style={{ fontWeight: 'bold' }}>{t('title')}</div>
      <nav>
        {/* Links must be locale-prefixed for routing to work */}
        <Link href={`/${lang}/`}>{t('nav_home')}</Link>
        {' | '}
        <Link href={`/${lang}/about`}>{t('nav_about')}</Link>
      </nav>
    </header>
  );
}