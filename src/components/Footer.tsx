'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { HiMoon, HiSun } from 'react-icons/hi';
import { Separator } from '@radix-ui/themes';
import { useCurrentLocale } from 'next-i18n-router/client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { i18nConfig } from '@/resources/i18n';
import { Dock, DockIcon } from '@/components/ui/Dock';

export default function Footer() {
  const router = useRouter();
  const currentPathname = usePathname();
  const locale = useCurrentLocale(i18nConfig);
  const otherLocale = locale === 'pl' ? 'en' : 'pl';
  const { contextSafe } = useGSAP();

  const changeLange = contextSafe(() => {
    const loading = document.querySelector('#loading-screen') as HTMLDivElement;
    gsap.to(loading, {
      y: '0',
      duration: 1,
      ease: 'power2.inOut',
      onStart: () => {
        loading.style.display = 'flex';
      },
      onComplete: () => {
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `NEXT_LOCALE=${otherLocale};expires=${date.toUTCString()};path=/`;

        if (locale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault)
          router.push('/' + otherLocale + currentPathname);
        else
          router.push(currentPathname.replace(`/${locale}`, `/${otherLocale}`));

        router.refresh();
      },
    });
  });

  const { resolvedTheme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      id="fade-up"
      className="flex-center pointer-events-none fixed right-0 bottom-2 left-0 z-50 h-fit w-full"
    >
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
          <Image
            src={`/flags/${otherLocale.toUpperCase()}.svg`}
            alt="Flag of language currently in use"
            width={24}
            height={24}
            className="border border-black/50"
          />
        </DockIcon>
      </Dock>
    </div>
  );
}
