import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent } from '@/components/ui/card';
import { getTranslations } from 'next-intl/server';
import image1 from '@/../public/work/1.jpg';
import image2 from '@/../public/work/2.jpg';
import image3 from '@/../public/work/3.jpg';
import Image from 'next/image';

async function Work() {
  const t = await getTranslations('work');
  const texts = ['text1', 'text2', 'text3'] as const;
  const images = [image1, image2, image3] as const;

  return (
    <section id="work" className="relative">
      <DotPattern className="[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent,white)] p-1" />
      <Heading>{t('heading')}</Heading>
      {texts.map((text, i) => (
        <Card key={i}>
          <CardContent>
            <p>{t(text)}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
export { Work };
