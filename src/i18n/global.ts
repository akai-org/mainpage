import { routing } from '@/i18n/routing';
import messagesPl from '@/../messages/pl.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messagesPl;
  }
}
