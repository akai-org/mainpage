'use client';
import { APPS_LINK, GITHUB_NAME } from '@/resources/constants';
import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { NumberTicker } from '@/components/NumberTicker';
import { useEffect, useState } from 'react';

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
    <div className="flex-center-col gap-5">
      <Heading size={{ initial: '4', xs: '7', sm: '8', md: '9' }}>
        Zrobiliśmy ponad <NumberTicker value={reposCount!} /> projektów
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
        <Card>
          <Flex align="center" gap="1">
            <Image
              src="/logos/AKAI_logo.png"
              alt="AKAI Apps logo"
              width={50}
              height={50}
            />
            <Heading>Apps</Heading>
          </Flex>
        </Card>
      </a>
    </div>
  );
}
