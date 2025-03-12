import { ReactNode } from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import TranslationsProvider from '@/resources/TranslationProvider';
import { Resource } from 'i18next';

type ProvidersT = {
  children: Readonly<ReactNode>;
  locale: string;
  namespaces: string[];
  resources: Resource;
};
export default function Providers({
  children,
  locale,
  namespaces,
  resources,
}: ProvidersT) {
  return (
    <DarkModeProvider defaultTheme="dark" attribute="class">
      <Theme accentColor="amber" grayColor="gray" radius="small">
        <TranslationsProvider
          locale={locale}
          namespaces={namespaces}
          resources={resources}
        >
          {children}
        </TranslationsProvider>
      </Theme>
    </DarkModeProvider>
  );
}
