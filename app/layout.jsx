import './globals.css';
import { getDirection } from '../i18nConfig';
import StoreProvider from './StoreProvider';
import ClerkProviderClient from '@/components/ClerkProviderClient';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ClerkProviderClient>
          <StoreProvider>
            {children}
          </StoreProvider>
        </ClerkProviderClient>
      </body>
    </html>
  );
}