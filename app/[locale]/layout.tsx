import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import i18nConfig from '@/i18nConfig';

export const metadata: Metadata = {
  title: 'AKAI',
  description: 'Akademickie Koło Aplikacji Internetowych',
};

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { children } = props;

  if (!i18nConfig.locales.includes(locale)) notFound();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <DarkModeProvider defaultTheme="dark" attribute="class">
          <Theme accentColor="amber" grayColor="gray" radius="small">
            {children}
          </Theme>
        </DarkModeProvider>
      </body>
    </html>
  );
}
