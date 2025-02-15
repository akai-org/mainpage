import {
  Blockquote,
  Button,
  Code,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes';
import { JOBS, MAIL } from '@/resources/constants';
import { TextAnimate } from '@/components/ui/TextAnimate';
import { useTranslation } from 'react-i18next';
import { useCurrentLocale } from 'next-i18n-router/client';
import { i18nConfig } from '@/resources/i18n';

export default function Join() {
  const { t } = useTranslation('join');
  const locale = useCurrentLocale(i18nConfig);

  return (
    <div className="container-text flex-center-col border-main p-container gap-5 border-y pb-0">
      <Heading size={{ initial: '8', xs: '9' }}>{t('heading')}</Heading>
      <Text className="md:w-1/2">{t('text')} </Text>
      <div className="border-main mb-5 !w-full border sm:!w-1/2" />
      <div className="flex-center-col gap-16">
        {JOBS.map((job, i) => (
          <div key={i} className="flex flex-col gap-5 md:w-1/2">
            <Code className="w-fit">
              <TextAnimate animation="slideLeft" by="character">
                {job.name}
              </TextAnimate>
            </Code>
            <Blockquote>{locale == 'en' ? job.descEn : job.desc}</Blockquote>
          </div>
        ))}
      </div>
      <div className="p-container mt-5 w-full">
        <Flex direction="column" justify="center" align="center" gap="2">
          <Heading size={{ initial: '5', xs: '6' }}>{t('join')}</Heading>
          <a href={`mailto:${MAIL}`}>
            <Button variant="classic" className="!cursor-pointer">
              {t('button')}
            </Button>
          </a>
        </Flex>
      </div>
    </div>
  );
}
