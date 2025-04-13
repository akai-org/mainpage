import { Heading } from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <section className="flex-center-col relative h-dvh gap-10 xl:h-[calc(100dvh-20px)]">
      <Logo size={200} />
      <div className="bg-accent-9 h-1 w-7 rounded-sm"></div>
      <Heading size={{ initial: '2', xs: '4', sm: '8' }} id="akai">
        {t('heading')}
      </Heading>
    </section>
  );
}
