import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { PARTNERS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';

async function Partners() {
  const t = await getTranslations('partners');

  return (
    <section id="partners">
      <Heading>{t('heading')}</Heading>
      <ul
        aria-label="AKAI partners"
        className="grid grid-cols-2 justify-between gap-2 px-2 sm:grid-cols-5"
      >
        {PARTNERS.map((partner, i) => (
          <li
            key={i}
            className={cn(
              'border-main group mx-auto w-full rounded-xs p-1 sm:mx-0',
              i == PARTNERS.length - 1 && 'col-span-2 w-fit sm:col-span-1',
            )}
            aria-label={`AKAI partner card: ${partner.name}`}
          >
            <Link
              aria-label={`AKAI partner website: ${partner.name}`}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group-hover:bg-primary/50 py-2 duration-500">
                <CardContent className="px-1">
                  <Image
                    alt={`${partner.name} logo`}
                    src={partner.logo}
                    loading="lazy"
                    className="mx-auto h-20 w-auto object-contain dark:grayscale dark:invert"
                  />
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { Partners };
