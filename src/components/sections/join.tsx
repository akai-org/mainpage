import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { MAIL } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

async function Join() {
  const t = await getTranslations('join');

  return (
    <section className="md:*:!w-1/2">
      <h1 className="p-5 text-center text-3xl font-bold sm:text-6xl">
        {t('heading')}
      </h1>
      <p>{t('text')} </p>
      <Separator className="mb-5" />
      <div className="flex-center-col gap-16">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{t(`jobs.${i}.name`)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t(`jobs.${i}.desc`)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex-center-col mt-5 space-y-5">
        <h2 className="text-2xl font-semibold sm:text-4xl">{t('join')}</h2>
        <Button aria-label="Contact us on mail" asChild>
          <Link href={`mailto:${MAIL}`}>{t('button')}</Link>
        </Button>
      </div>
    </section>
  );
}

export { Join };
