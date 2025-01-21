import {
  Blockquote,
  Button,
  Code,
  Flex,
  Heading,
  Separator,
  Text,
} from '@radix-ui/themes';
import { JOBS, MAIL } from '@/resources/constants';

export default function Join() {
  return (
    <div className="flex-center-col border-main p-container gap-5 border-y pb-0">
      <Heading size={{ initial: '8', xs: '9' }}>Dołącz do nas</Heading>
      <Text className="md:w-1/2">
        Interesujesz się back-endem, front-endem, masz wyczucie designu czy może
        chcesz sprawdzić swoje zdolności do zarządzania i organizacji? Dołącz do
        nas, w każdej z tych ról będziesz mógł się realizować w AKAI.
      </Text>
      <div className="border-main mb-5 !w-full border sm:!w-1/2" />
      <div className="flex-center-col gap-16">
        {JOBS.map((job, i) => (
          <div key={i} className="flex flex-col gap-5 md:w-1/2">
            <Code className="w-fit">{job.name}</Code>
            <Blockquote>{job.desc}</Blockquote>
          </div>
        ))}
      </div>
      <div className="border-main p-container mt-5 w-full border-t">
        <Flex direction="column" justify="center" align="center" gap="2">
          <Heading size={{ initial: '5', xs: '6' }}>
            Chcesz do nas dołączyć?
          </Heading>
          <a href={`mailto:${MAIL}`}>
            <Button variant="classic" className="!cursor-pointer">
              Napisz do nas
            </Button>
          </a>
        </Flex>
      </div>
    </div>
  );
}
