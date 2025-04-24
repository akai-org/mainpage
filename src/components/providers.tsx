import { ReactNode } from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
  children: ReactNode;
};

function Providers(props: Props) {
  const { children } = props;

  return (
    <DarkModeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </DarkModeProvider>
  );
}
export { Providers };
