'use client';
import { Separator } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { Dock, DockIcon } from '@/components/ui/Dock';
import { HiMoon, HiSun } from 'react-icons/hi';
import Image from 'next/image';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/resources/i18nConfig';
import { usePathname, useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Footer() {
  const { contextSafe } = useGSAP();
  const router = useRouter();
  const currentPathname = usePathname();
  const locale = useCurrentLocale(i18nConfig);
  const otherLocale = locale === 'pl' ? 'en' : 'pl';

  const changeLange = contextSafe(() => {
    const loading = document.querySelector('#loading-screen') as HTMLDivElement;
    loading.style.display = 'flex';
    gsap.to(loading, {
      y: '0',
      duration: 1,
      ease: 'power2.inOut',
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
    <div className="fade-up-gsap flex-center pointer-events-none fixed bottom-2 left-0 right-0 z-50 h-fit w-full">
      <Dock
        direction="middle"
        className="pointer-events-auto h-10 border-black bg-radix-gray-1 dark:border-white"
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
