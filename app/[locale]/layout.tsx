import '../globals.css';
import '@radix-ui/themes/styles.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { i18nConfig, i18nNamespaces, initTranslations } from '@/resources/i18n';
import Providers from '@/resources/Providers';

export const metadata: Metadata = {
  title: 'AKAI',
  description: 'Akademickie Koło Aplikacji Internetowych',
};

const InterFont = Inter({ subsets: ['latin'], variable: '--font-inter' });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}
export default async function RootLayout(props: Props) {
  const { locale } = await props.params;
  const { children } = props;

  if (!i18nConfig.locales.includes(locale)) notFound();
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} suppressHydrationWarning>
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
