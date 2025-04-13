import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/logo';

function Home() {
  const { t } = useTranslation('home');

  return (
    <section className="flex-center-col relative h-dvh gap-10 xl:h-[calc(100dvh-20px)]">
      <Logo size={200} />
      <div className="bg-accent-9 h-1 w-7 rounded-sm"></div>
      <h1 className="text-2xl font-bold">{t('heading')}</h1>
    </section>
  );
}

export { Home };
