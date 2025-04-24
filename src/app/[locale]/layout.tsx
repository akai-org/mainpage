import '../globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { hasLocale } from 'next-intl';

import { routing } from '@/i18n/routing';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'AKAI',
  description: 'Akademickie Koło Aplikacji Internetowych',
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

const InterFont = Inter({ subsets: ['latin'], variable: '--font-inter' });

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout(props: Props) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const { children } = props;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${InterFont.variable} bg-[url(/background.svg)] bg-cover bg-fixed bg-no-repeat`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
