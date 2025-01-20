import { APPS } from '../resources/constants';
import { Badge, Card, Flex, Heading, Text } from '@radix-ui/themes';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="flex-center-col h-dvh gap-5">
      <Heading size={{ initial: '5', xs: '7', sm: '8', md: '9' }}>
        Zobacz nasze <span id="projects-number">150</span> projektów
      </Heading>
      <Text>W takich językach programowania jak: </Text>
      <Flex align="center" gap="2">
        <Badge variant="outline">C#</Badge>
        <Badge variant="outline">Java</Badge>
        <Badge variant="outline">Python</Badge>
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">I wiele innych...</Badge>
      </Flex>
      <Card>
        <a href={APPS} target="_blank">
          <Flex align="center" gap="1">
            <Image
              src="/logos/AKAI_logo.png"
              alt="AKAI Apps logo"
              width={50}
              height={50}
            />
            <Heading>Apps</Heading>
          </Flex>
        </a>
      </Card>
    </div>
  );
}
