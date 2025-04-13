import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/ui/logo';

function Home() {
  const { t } = useTranslation('home');

  return (
    <section className="min-h-screen border-t-0 py-0 xl:h-[calc(100vh-20px)] xl:min-h-auto">
      <Logo size={200} />
      <div className="bg-accent-9 h-1 w-7 rounded-sm"></div>
      <h1 className="text-center text-xl font-bold sm:text-4xl">
        {t('heading')}
      </h1>
    </section>
  );
}

export { Home };
