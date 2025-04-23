import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import image1 from '@/../public/work/1.jpg';
import image2 from '@/../public/work/2.jpg';
import image3 from '@/../public/work/3.jpg';
import Image from 'next/image';
import { RichText } from '@/components/ui/rich-text';

async function Work() {
  const t = await getTranslations('work');
  const texts = ['text1', 'text2', 'text3'] as const;
  const titles = ['title1', 'title2', 'title3'] as const;
  const images = [image1, image2, image3] as const;

  return (
    <section id="work">
      <Heading>{t('heading')}</Heading>
      {texts.map((text, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle className="text-secondary italic">
              {t(titles[i])}
            </CardTitle>
          </CardHeader>
          <CardContent
            className={cn('flex flex-col items-center gap-2', {
              'sm:flex-row-reverse': i % 2 !== 0,
              'sm:flex-row': i % 2 === 0,
            })}
          >
            <RichText className="text-center sm:text-left">
              {tags => t.rich(text, { ...tags })}
            </RichText>
            <Image
              src={images[i]}
              alt="Work Image"
              loading="lazy"
              placeholder="blur"
              className="h-auto max-h-50 w-full min-w-1/2 rounded-lg object-cover sm:w-1/2"
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
export { Work };
