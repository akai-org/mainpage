'use client';
import { APPS_LINK, GITHUB_API } from '@/resources/constants';
import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { NumberTicker } from '@/components/ui/NumberTicker';
import { useEffect, useState } from 'react';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';

export default function Projects() {
  const { t } = useTranslation('projects');
  const [reposCount, setReposCount] = useState<number | null>(null);
  useEffect(() => {
    fetch(GITHUB_API)
      .then(response => response.json())
      .then(data => {
        setReposCount(Math.floor(data.public_repos / 10) * 10);
      });
  }, []);

  return (
    <section className="flex-center-col border-main p-container gap-5 border-y py-20">
      <Heading size={{ initial: '3', xs: '7', sm: '8', md: '9' }}>
        {t('heading')}
        <NumberTicker className="text-accent-11" value={reposCount!} />{' '}
        {t('projects')}
      </Heading>
      <Text> {t('subheading')}</Text>
      <Flex direction={{ initial: 'column', sm: 'row' }} align="center" gap="2">
        <Flex align="center" gap="2">
          <Badge variant="outline">C#</Badge>
          <Badge variant="outline">Java</Badge>
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">React</Badge>
        </Flex>
        <Badge variant="outline">{t('badge')}</Badge>
      </Flex>
      <a href={APPS_LINK} target="_blank">
        <Card className="relative">
          <Flex align="center" gap="1" className="h-20">
            <Logo size={50} />
            <Heading>Apps</Heading>
          </Flex>
          <BorderBeam
            colorFrom="var(--accent-6)"
            colorTo="var(--accent-9)"
            size={250}
            borderWidth={2}
            duration={9}
            delay={9}
          />
        </Card>
      </a>
    </section>
  );
}
