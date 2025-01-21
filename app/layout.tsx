import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';

export const metadata: Metadata = {
  title: 'AKAI',
  description: 'Akademickie Koło Aplikacji Internetowych',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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
