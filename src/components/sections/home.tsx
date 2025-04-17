import { Logo } from '@/components/ui/logo';
import { getTranslations } from 'next-intl/server';

async function Home() {
  const t = await getTranslations('home');

  return (
    <section className="min-h-screen border-t-0 py-0 xl:h-[calc(100vh-20px)] xl:min-h-auto">
      <Logo size={200} />
      <div className="bg-accent-9 h-1 w-7 rounded-sm"></div>
      <h1 className="text-4xl">{t('heading')}</h1>
    </section>
  );
}

export { Home };
