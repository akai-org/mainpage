import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('not-found');

  return (
    <>
      <div className="fixed z-40 flex h-dvh flex-col justify-around sm:justify-between">
        {Array.from({ length: 3 }, (_, i1) => (
          <div
            key={i1}
            id="not-found"
            className="flex w-full justify-between"
            style={{ top: 200 * i1 }}
          >
            {Array.from({ length: 10 }, (_, i2) => (
              <p
                key={i2}
                className="w-fit shrink-0 px-5 text-[70px] text-white sm:text-[150px]"
              >
                {i2 % 2 == 0 ? (
                  404
                ) : (
                  <>
                    <span className="text-primary">A</span>KAI
                  </>
                )}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="flex-center min-h-screen w-full">
        <div className="flex-center-col bg-background border-destructive z-50 gap-5 rounded-sm border-4 p-5">
          <h1 className="text-4xl font-bold sm:text-5xl">{t('404')}</h1>
          <Link href="/" className="border-destructive border p-1">
            {t('404button')}
          </Link>
        </div>
      </div>
    </>
  );
}
