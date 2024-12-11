import type { Metadata } from 'next';
import './styles/globals.scss';
import { ReactNode } from 'react';
import Footer from '@/app/components/Footer';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
