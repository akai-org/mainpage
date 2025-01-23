import Image from 'next/image';
import { Heading } from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="flex-center-col relative h-dvh gap-5 xl:h-[calc(100dvh-20px)]">
      <div className="flex-center w-fit text-5xl font-bold">
        <Image
          src="/logos/AKAI_logo_white.svg"
          alt="Logo"
          width={200}
          height={200}
          className="hidden dark:block"
        />
        <Image
          src="/logos/AKAI_logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="block dark:hidden"
        />
      </div>
      <div className="h-1 w-7 rounded bg-accent-9"></div>
      <Heading size={{ initial: '2', xs: '4', sm: '8' }} id="akai">
        {t('heading')}
      </Heading>
    </div>
  );
}
