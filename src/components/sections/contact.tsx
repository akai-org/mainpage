import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { MAIL, SOCIALS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import cat2 from '@/../public/cat2.png';

async function Contact() {
  const t = await getTranslations('contact');

  return (
    <section id="contact" className="pb-0">
      <Heading>{t('heading')}</Heading>
      <p className="from-foreground to-primary bg-gradient-to-r bg-clip-text text-xl text-transparent">
        {MAIL}
      </p>
      <ul aria-label="AKAI socials" className="flex gap-7">
        {SOCIALS.map((social, i) => (
          <li key={i}>
            <Button
              variant="outline"
              size="icon"
              aria-label="Go to Akai social media"
              className="hover:text-primary size-12 rounded-full"
              asChild
            >
              <Link target="_blank" href={social.link}>
                {social.icon}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
      <Image src={cat2} alt="Very happy cat image" className="max-w-1/2" />
      <div className="text-secondary mt-auto mb-5 text-center text-xs">
        <p>
          © 2010-{new Date().getFullYear()} Akademickie Koło Aplikacji
          Internetowych
        </p>
        <div className="flex-center mt-1 flex-wrap gap-2 sm:gap-5">
          <Link
            className="hover:text-primary text-nowrap underline duration-300"
            href="https://szawracki.pl"
            target="_blank"
          >
            {t('footer')} Beniamin Szawracki
          </Link>
          <Link
            className="hover:text-primary text-nowrap underline duration-300"
            href="https://sandaczsands.github.io/"
            target="_blank"
          >
            UI/UX Aleksandra Ostrowska
          </Link>
        </div>
      </div>
    </section>
  );
}

export { Contact };
