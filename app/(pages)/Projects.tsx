'use client';
import { APPS_LINK, GITHUB_NAME } from '@/resources/constants';
import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { NumberTicker } from '@/components/NumberTicker';
import { useEffect, useState } from 'react';
import { BorderBeam } from '@/components/BorderBeam';

export default function Projects() {
  const [reposCount, setReposCount] = useState<number | null>(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_NAME}`)
      .then(response => response.json())
      .then(data => {
        setReposCount(Math.floor(data.public_repos / 10) * 10);
      });
  }, []);

  return (
    <div className="flex-center-col border-main p-container gap-5 border-y py-20">
      <Heading size={{ initial: '4', xs: '7', sm: '8', md: '9' }}>
        Zrobiliśmy ponad{' '}
        <NumberTicker className="text-accent-11" value={reposCount!} />{' '}
        projektów
      </Heading>
      <Text>W takich językach programowania jak: </Text>
      <Flex direction={{ initial: 'column', sm: 'row' }} align="center" gap="2">
        <Flex align="center" gap="2">
          <Badge variant="outline">C#</Badge>
          <Badge variant="outline">Java</Badge>
          <Badge variant="outline">Python</Badge>
          <Badge variant="outline">React</Badge>
        </Flex>
        <Badge variant="outline">I wiele innych...</Badge>
      </Flex>
      <a href={APPS_LINK} target="_blank">
        <Card className="relative">
          <Flex align="center" gap="1">
            <Image
              src="/logos/AKAI_logo_white.svg"
              alt="Logo"
              width={50}
              height={50}
              className="hidden dark:block"
            />
            <Image
              src="/logos/AKAI_logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="block dark:hidden"
            />
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
    </div>
  );
}
