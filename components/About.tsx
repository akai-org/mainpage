import { Card, Heading, Link, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { DotPattern } from '@/components/ui/DotPattern';
import { cn } from '@/resources/utils';
import { TextAnimate } from '@/components/ui/TextAnimate';
import { useTranslation } from 'react-i18next';
import { CAT_LINK } from '@/resources/constants';

export default function About() {
  const { t } = useTranslation('about');

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="border-main flex w-full flex-col gap-2 border-y pt-5 md:w-1/2">
          <Heading size="9" className="container-text">
            {t('heading')}
          </Heading>
          <Text className="container-text">
            {t('text11')} <Link href={CAT_LINK}>{t('PUT')}</Link>
          </Text>
          <Text className="container-text">{t('text12')}</Text>
        </div>
        <div className="border-main relative min-h-80 w-full border-y md:w-1/2 md:border">
          <Image
            src="/members.jpg"
            alt="Founders of AKAI"
            fill
            sizes={'(min-width: 768px) 50vw, 100vw'}
            className="asbolute h-fit w-full object-contain md:object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-main border-b">
          <Heading className="p-10 text-center">
            <TextAnimate animation="slideUp" by="word">
              {t('quote')}
            </TextAnimate>
          </Heading>
        </div>

        <div className="border-main p-container relative flex flex-col gap-5 border-b">
          <DotPattern
            className={cn(
              'p-1',
              '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent,white)]',
            )}
          />
          <Heading className="container-text text-center" size="8">
            {t('heading2')}
          </Heading>
          <div className="flex flex-col gap-10 p-5">
            <Card className="container-text w-full sm:max-w-[400px]">
              {t('text21')}
            </Card>
            <Card className="container-text mx-auto w-full sm:max-w-[500px]">
              {t('text22')}
            </Card>
            <Card className="container-text ml-auto w-full sm:max-w-[500px]">
              {t('text23')}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
