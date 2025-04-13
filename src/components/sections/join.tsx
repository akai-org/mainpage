import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { MAIL } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type JobItemT = {
  name: string;
  desc: string;
};

function Join() {
  const { t } = useTranslation('join');
  const jobs = t<string, { returnObjects: true }, JobItemT[]>('jobs', {
    returnObjects: true,
  });

  return (
    <section className="md:*:!w-1/2">
      <h1 className="p-5 text-3xl font-bold sm:text-6xl">{t('heading')}</h1>
      <p>{t('text')} </p>
      <Separator className="mb-5" />
      <div className="flex-center-col gap-16">
        {jobs.map((job, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{job.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{job.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex-center-col mt-5 space-y-5">
        <h2 className="text-2xl font-semibold sm:text-4xl">{t('join')}</h2>
        <Button asChild>
          <Link href={`mailto:${MAIL}`}>{t('button')}</Link>
        </Button>
      </div>
    </section>
  );
}

export { Join };
