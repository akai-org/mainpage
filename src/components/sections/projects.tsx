'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent } from '@/components/ui/card';
import { NumberTicker } from '@/components/ui/number-ticker';
import { BorderBeam } from '@/components/ui/border-beam';
import { Logo } from '@/components/ui/logo';
import { Badge } from '@/components/ui/badge';

import { APPS_LINK, GITHUB_API } from '@/lib/constants';
import Link from 'next/link';

function Projects() {
  const { t } = useTranslation('projects');
  const [reposCount, setReposCount] = useState<number | null>(null);
  useEffect(() => {
    fetch(GITHUB_API)
      .then(response => response.json())
      .then(data => {
        setReposCount(Math.floor(data.public_repos / 10) * 10); //TEN CONSOLE LOG ROBI ZE TO DZIALA XD
      });
  }, []);

  return (
    <section>
      <h1 className="text-center text-xl font-bold sm:text-5xl">
        {' '}
        {t('heading')}
        {reposCount ? (
          <NumberTicker className="text-accent-11" value={reposCount} />
        ) : (
          0
        )}{' '}
        {t('projects')}
      </h1>
      <p> {t('subheading')}</p>
      <div className="flex-center flex-wrap gap-2">
        <Badge variant="outline">C#</Badge>
        <Badge variant="outline">Java</Badge>
        <Badge variant="outline">Python</Badge>
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">{t('badge')}</Badge>
      </div>
      <Link href={APPS_LINK} target="_blank" className="hover:no-underline">
        <Card className="relative overflow-hidden">
          <CardContent className="flex-center">
            <Logo size={50} />
            <h2>Apps</h2>
          </CardContent>
          <BorderBeam
            colorFrom="var(--primary)"
            colorTo="var(--primary-foreground)"
            size={250}
            duration={9}
            delay={9}
          />
        </Card>
      </Link>
    </section>
  );
}
export { Projects };
