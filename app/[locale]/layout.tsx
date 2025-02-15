import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { i18nConfig, i18nNamespaces, initTranslations } from '@/resources/i18n';
import Providers from '@/resources/Providers';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'AKAI',
  description: 'Akademickie Koło Aplikacji Internetowych',
};

const InterFont = Inter({ subsets: ['latin'], variable: '--font-inter' });

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
      <body className={InterFont.variable}>
        <Providers
          locale={locale}
          namespaces={i18nNamespaces}
          resources={resources}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
