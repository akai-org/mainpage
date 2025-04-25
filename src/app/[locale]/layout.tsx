import '../globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { hasLocale, Locale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { routing } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(
  props: Omit<Props, 'children'>,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const host = process.env.HOST || 'http://localhost:3000';

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(host),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: host,
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

export default async function LocaleLayout(props: Props) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${InterFont.variable} bg-[url(/background.svg)] bg-cover bg-fixed bg-no-repeat`}
      >
        <NextIntlClientProvider>
          <ThemeProvider attribute="class">{props.children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
