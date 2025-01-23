import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import i18nConfig from '@/resources/i18nConfig';
import TranslationsProvider from '@/resources/TranslationProvider';
import initTranslations from '@/resources/i18n';

export const metadata: Metadata = {
  title: 'AKAI',
  description: 'Akademickie Koło Aplikacji Internetowych',
};

const i18nNamespaces = ['home', 'about', 'join', 'projects', 'partners'];

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { children } = props;

  if (!i18nConfig.locales.includes(locale)) notFound();
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DarkModeProvider defaultTheme="dark" attribute="class">
          <Theme accentColor="amber" grayColor="gray" radius="small">
            <TranslationsProvider
              locale={locale}
              namespaces={i18nNamespaces}
              resources={resources}
            >
              {children}
            </TranslationsProvider>
          </Theme>
        </DarkModeProvider>
      </body>
    </html>
  );
}
