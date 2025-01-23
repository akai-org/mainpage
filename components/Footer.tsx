import { Separator } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { Dock, DockIcon } from '@/components/Dock';
import { HiMoon, HiSun } from 'react-icons/hi';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [lang, setLang] = useState<'PL' | 'ENG'>('ENG');
  const changeLange = () => {
    setLang(lang === 'PL' ? 'ENG' : 'PL');
  };
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
            src={`/flags/${lang}.svg`}
            alt="EN"
            width={24}
            height={24}
            className="border border-black/50"
          />
        </DockIcon>
      </Dock>
    </div>
  );
}
