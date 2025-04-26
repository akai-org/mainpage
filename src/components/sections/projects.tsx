import { Card, CardContent } from '@/components/ui/card';
import { NumberTicker } from '@/components/ui/number-ticker';
import { BorderBeam } from '@/components/ui/border-beam';
import { Logo } from '@/components/ui/logo';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

import { APPS_LINK, GITHUB_REPOS } from '@/lib/constants';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

async function Projects() {
  const t = await getTranslations('projects');
  return (
    <section id="projects">
      <Heading withoutLine>
        {t('heading')}
        <NumberTicker className="text-primary" value={GITHUB_REPOS} />
        <br />
        {t('projects')}
      </Heading>
      <p> {t('subheading')}</p>
      <div className="flex-center flex-wrap gap-2">
        <Badge>C#</Badge>
        <Badge>Java</Badge>
        <Badge>Python</Badge>
        <Badge>React</Badge>
        <Badge>{t('badge')}</Badge>
      </div>
      <Link
        aria-label="Check out our Apps"
        href={APPS_LINK}
        target="_blank"
        className="hover:no-underline"
      >
        <Card className="relative overflow-hidden">
          <CardContent className="flex-center">
            <Logo size={50} />
            <h2>Apps</h2>
          </CardContent>
          <BorderBeam
            colorFrom="var(--primary)"
            colorTo="var(--foreground)"
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
