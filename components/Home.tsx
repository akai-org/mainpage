import { Heading } from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="flex-center-col relative h-dvh gap-5 xl:h-[calc(100dvh-20px)]">
      <div className="flex-center w-fit text-5xl font-bold">
        <Logo width={100} height={100} />
      </div>
      <div className="h-1 w-7 rounded bg-accent-9"></div>
      <Heading size={{ initial: '2', xs: '4', sm: '8' }} id="akai">
        {t('heading')}
      </Heading>
    </div>
  );
}
