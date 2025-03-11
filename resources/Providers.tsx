import { ReactNode } from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import { createInstance, Resource } from 'i18next';
import { initTranslations } from '@/resources/i18n';
import { I18nextProvider } from 'react-i18next';

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
  const i18n = createInstance();
  initTranslations(locale, namespaces, i18n, resources);

  return (
    <DarkModeProvider defaultTheme="dark" attribute="class">
      <Theme accentColor="amber" grayColor="gray" radius="small">
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
      </Theme>
    </DarkModeProvider>
  );
}
