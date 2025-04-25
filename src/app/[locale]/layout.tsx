import '../globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { hasLocale, Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Providers } from '@/components/providers';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(
  props: Omit<Props, 'children'>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://akai.org.pl',
      siteName: t('title'),
      locale: locale == 'en' ? 'en_US' : 'pl_PL',
      alternateLocale: locale == 'en' ? 'pl_PL' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/openGraph.png',
          alt: t('title'),
          height: 700,
          width: 900,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

const InterFont = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default async function RootLayout(props: Props) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${InterFont.variable} bg-[url(/background.svg)] bg-cover bg-fixed bg-no-repeat`}
      >
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
