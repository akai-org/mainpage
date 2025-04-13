'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Separator } from '@radix-ui/themes';
import { useCurrentLocale } from 'next-i18n-router/client';

import { i18nConfig } from '@/lib/i18n';
import { Dock, DockIcon } from '@/components/ui/Dock';
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
    <div className="flex-center pointer-events-none fixed right-0 bottom-2 left-0 z-50 h-fit w-full">
      <Dock
        direction="middle"
        className="bg-radix-gray-1 pointer-events-auto h-10 border-black dark:border-white"
      >
        <DockIcon onClick={() => changeTheme()}>
          {resolvedTheme === 'dark' ? (
            <HiSun size="24" />
          ) : (
            <HiMoon size="24" />
          )}
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon onClick={() => changeLange()}>
          <Flags icon={otherLocale} />
        </DockIcon>
      </Dock>
    </div>
  );
}
