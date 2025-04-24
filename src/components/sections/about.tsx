import Image from 'next/image';
import members from '@/../public/members.jpg';
import { TextAnimate } from '@/components/ui/text-animate';
import { getTranslations } from 'next-intl/server';
import { Heading } from '@/components/ui/heading';
import { RichText } from '@/components/ui/rich-text';

async function About() {
  const t = await getTranslations('about');

  return (
    <section id="about">
      <Heading>{t('heading')}</Heading>
      <RichText className="px-2">
        {tags => t.rich('text', { ...tags })}
      </RichText>
      <Image
        src={members}
        alt="Founders of AKAI"
        loading="lazy"
        placeholder="blur"
        className="h-auto w-full rounded-lg"
      />
      <TextAnimate
        as="h2"
        className="text-secondary px-10 pt-10 text-center italic"
        animation="slideUp"
        by="word"
      >
        {t('quote')}
      </TextAnimate>
    </section>
  );
}

export { About };
