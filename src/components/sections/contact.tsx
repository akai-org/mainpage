import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { MAIL, SOCIALS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import cat2 from '@/../public/cat2.svg';

async function Contact() {
  const t = await getTranslations('contact');

  return (
    <section className="border-b-0 pb-0">
      <h1 className="text-center text-5xl font-bold">{t('heading')}</h1>
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
      <Image src={cat2} alt="Very happy cat image" className="max-w-1/2" />
      <div className="mt-auto text-center text-xs">
        <p>
          © 2020-{new Date().getFullYear()} Akademickie Koło Aplikacji
          Internetowych
        </p>
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
