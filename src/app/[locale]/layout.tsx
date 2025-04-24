import '../globals.css';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { Providers } from '@/components/providers';

export async function generateMetadata(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  // @ts-expect-error
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://akai.org.pl',
      siteName: t('title'),
      locale,
      type: 'website',
      images: [
        {
          url: '/logo.svg',
          alt: t('title'),
        },
      ],
    },
  };
}

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
