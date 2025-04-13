import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { MAIL, SOCIALS } from '@/lib/constants';
import cat2 from '@/../public/cat2.svg';
import { Button } from '@/components/ui/button';

function Contact() {
  const { t } = useTranslation('home');

  return (
    <section className="border-b-0 pb-0">
      <h1 className="text-5xl font-bold">Skontaktuj się z nami!</h1>
      <p className="text-xl">{MAIL}</p>
      <div className="flex gap-7">
        {SOCIALS.map((social, i) => (
          <Button
            variant="outline"
            size="icon"
            key={i}
            className="hover:text-primary rounded-full"
            asChild
          >
            <Link target="_blank" href={social.link}>
              {social.icon}
            </Link>
          </Button>
        ))}
      </div>
      <Image src={cat2} alt="Very happy cat image" className="max-w-[50%]" />
      <div className="mt-auto flex flex-col items-center text-xs">
        <span>
          © 2020-{new Date().getFullYear()} {t('heading')}
        </span>
        <Link
          className="hover:underline"
          href="https://szawracki.pl"
          target="_blank"
        >
          {t('footer')} Beniamin Szawracki
        </Link>
      </div>
    </section>
  );
}

export { Contact };
