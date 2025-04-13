'use client';
import { ReactNode } from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { Resource, createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initTranslations } from '@/lib/i18n';

type Props = {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
};

export default function Providers(props: Props) {
  const { children, locale, namespaces, resources } = props;
  const i18n = createInstance();
  initTranslations(locale, namespaces, i18n, resources);

  return (
    <DarkModeProvider
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      attribute="class"
    >
      <Theme accentColor="amber" grayColor="gray" radius="small">
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
      </Theme>
    </DarkModeProvider>
  );
}
