'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useCurrentLocale } from 'next-i18n-router/client';
import { Moon, Sun } from 'lucide-react';

import { i18nConfig } from '@/lib/i18n';
import { Dock, DockIcon } from '@/components/ui/Dock';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { Flags } from '@/components/ui/flags';

export default function Footer() {
  const router = useRouter();
  const currentPathname = usePathname();
  const locale = useCurrentLocale(i18nConfig);
  const otherLocale = locale === 'pl' ? 'en' : ('pl' as const);

  const changeLange = () => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${otherLocale};expires=${date.toUTCString()};path=/`;

    if (locale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault)
      router.push('/' + otherLocale + currentPathname);
    else router.push(currentPathname.replace(`/${locale}`, `/${otherLocale}`));

    router.refresh();
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { resolvedTheme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  if (!isClient) return null;

  return (
    <Dock
      direction="middle"
      className="bg-background pointer-events-auto fixed bottom-2 left-1/2 z-50 h-10 -translate-x-1/2 border"
    >
      <DockIcon onClick={changeTheme}>
        {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </DockIcon>
      <Separator orientation="vertical" className="h-full" />
      <DockIcon onClick={changeLange}>
        <Flags icon={otherLocale} />
      </DockIcon>
    </Dock>
  );
}
