import Link from 'next/link';
import Image from 'next/image';
import { TextAnimate } from '@/components/ui/text-animate';
import { CAT_LINK } from '@/lib/constants';
import members from '@/../public/members.jpg';
import { getTranslations } from 'next-intl/server';
import { Heading } from '@/components/ui/heading';

async function About() {
  const t = await getTranslations('about');

  return (
    <section id="about">
      <Heading>{t('heading')}</Heading>
      <p className="p-5">
        {t('text1')}{' '}
        <Link href={CAT_LINK} className="text-primary">
          {t('PUT')}
        </Link>
        <br />
        {t('text2')}
      </p>
      <Image
        src={members}
        alt="Founders of AKAI"
        loading="lazy"
        placeholder="blur"
        className="h-auto w-full"
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
