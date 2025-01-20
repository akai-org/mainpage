import {
  Blockquote,
  Button,
  Code,
  Flex,
  Heading,
  Separator,
  Text,
} from '@radix-ui/themes';
import { JOBS, MAIL } from '@/app/resources/constants';

export default function Join() {
  return (
    <div className="flex-center-col w-full gap-5 px-5 py-20 lg:p-20">
      <Heading size="9">Dołącz do nas</Heading>
      <Text className="md:w-1/2">
        Interesujesz się back-endem, front-endem, masz wyczucie designu czy może
        chcesz sprawdzić swoje zdolności do zarządzania i organizacji? Dołącz do
        nas, w każdej z tych ról będziesz mógł się realizować w AKAI.
      </Text>
      <Separator className="!w-full sm:!w-1/2" />
      <Flex direction="column" gap="9">
        {JOBS.map((job, i) => {
          const row = i % 2 ? 'row-reverse' : 'row';
          return (
            <Flex
              key={i}
              direction={{ initial: 'column', sm: row }}
              gap="4"
              justify="center"
              align="center"
              className="pl-5"
            >
              <Flex direction="column" gap="5" className="md:w-1/2">
                <Code className="w-fit">{job.name}</Code>
                <Blockquote>{job.desc}</Blockquote>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap="2"
        className="mt-8"
      >
        <Heading>Chcesz do nas dołączyć?</Heading>
        <a href={`mailto:${MAIL}`}>
          <Button variant="classic" className="!cursor-pointer">
            Napisz do nas
          </Button>
        </a>
      </Flex>
    </div>
  );
}
