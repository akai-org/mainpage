import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { MAIL } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';

import frontend from '@/../public/jobs/frontend.jpg';
import backend from '@/../public/jobs/backend.jpg';
import mobile from '@/../public/jobs/mobile.jpg';
import design from '@/../public/jobs/design.jpg';
import projects from '@/../public/jobs/projects.jpg';
import cat1 from '@/../public/cat1.png';
import { cn } from '@/lib/utils';
import { RichText } from '@/components/ui/rich-text';

async function Join() {
  const t = await getTranslations('join');
  const jobs = ['front', 'back', 'mobile', 'ui', 'projects'] as const;
  const images = [frontend, backend, mobile, design, projects];
  return (
    <section id="join">
      <Heading>{t('heading')}</Heading>
      <RichText className="text-center">
        {tags => t.rich('text', { ...tags })}
      </RichText>
      <div className="flex-center-col gap-16">
        {jobs.map((job, i) => (
          <Card
            key={i}
            className={cn('flex flex-col items-center gap-2', {
              'sm:flex-row-reverse': i % 2 !== 0,
              'sm:flex-row': i % 2 === 0,
            })}
          >
            <div className="space-y-2 sm:w-1/2">
              <CardHeader>
                <CardTitle className="text-secondary italic">
                  {t(`${job}.name`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RichText>
                  {tags => t.rich(`${job}.desc`, { ...tags })}
                </RichText>
              </CardContent>
            </div>
            <CardFooter className="sm:w-1/2">
              <Image
                src={images[i]}
                alt={`Job image nr${i}`}
                placeholder="blur"
                className="h-auto max-h-50 w-full rounded-lg object-cover"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex-center-col mt-5 space-y-5">
        <h2>{t('join')}</h2>
        <Button asChild>
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
