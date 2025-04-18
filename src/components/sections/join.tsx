import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { MAIL } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';

import frontend from '@/../public/jobs/frontend.jpg';
import backend from '@/../public/jobs/backend.jpg';
import mobile from '@/../public/jobs/mobile.jpg';
import design from '@/../public/jobs/design.jpg';
import cat1 from '@/../public/cat1.svg';

async function Join() {
  const t = await getTranslations('join');
  const images = [frontend, backend, mobile, design];
  return (
    <section id="join" className="sm:px-5">
      <Heading>{t('heading')}</Heading>
      <p>{t('text')} </p>
      <Separator className="mb-5" />
      <div className="flex-center-col gap-16">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-secondary italic">
                {t(`jobs.${i}.name`)}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-2 sm:flex-row">
              <p>{t(`jobs.${i}.desc`)}</p>
              <Image
                src={images[i]}
                alt={`Job image nr${i}`}
                placeholder="blur"
                className="h-auto max-h-60 w-auto rounded-lg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex-center-col mt-5 space-y-5">
        <h2>{t('join')}</h2>
        <Button aria-label="Contact us on mail" asChild>
          <Link href={`mailto:${MAIL}`}>{t('button')}</Link>
        </Button>
        <Image
          src={cat1}
          alt="Very happy guitar cat image"
          className="max-w-1/2 object-cover"
        />
      </div>
    </section>
  );
}

export { Join };
