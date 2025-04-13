import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Heading, Text } from '@radix-ui/themes';

import { MAIL, SOCIALS } from '@/lib/constants';
import cat2 from '@/../public/cat2.svg';

export default function Contact() {
  const { t } = useTranslation('home');

  return (
    <section className="flex-center-col p-container gap-10 border-t !pb-0">
      <Heading size={'6'}>Skontaktuj się z nami!</Heading>
      <div className="flex-center flex-col gap-7 text-center">
        <Text size="7" className="size-full">
          {MAIL}
        </Text>
        <div className="flex gap-7">
          {SOCIALS.map((social, i) => (
            <a
              target="_blank"
              href={social.link}
              className="text-accent-9 rounded-full border-2 p-2 text-2xl"
              key={i}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <Image src={cat2} alt="Very happy cat image" className="max-w-[50%]" />
      <div className="mt-auto flex flex-col items-center text-[10px]">
        <span>
          © 2020-{new Date().getFullYear()} {t('heading')}
        </span>
        <a
          className="hover:underline"
          href="https://szawracki.pl"
          target="_blank"
        >
          {t('footer')} Beniamin Szawracki
        </a>
      </div>
    </section>
  );
}
