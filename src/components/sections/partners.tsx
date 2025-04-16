import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { PARTNERS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';

async function Partners() {
  const t = await getTranslations('partners');

  return (
    <section>
      <h1 className="text-5xl font-bold">{t('heading')}</h1>
      <ul
        aria-label="AKAI partners"
        className="grid grid-cols-2 justify-between gap-2 px-2 sm:grid-cols-5"
      >
        {PARTNERS.map((partner, i) => (
          <li
            key={i}
            className={cn(
              'border-main group mx-auto rounded-xs p-1 sm:mx-0',
              i == PARTNERS.length - 1 && 'col-span-2 sm:col-span-1',
            )}
            aria-label={`AKAI partner card: ${partner.name}`}
          >
            <Link
              aria-label={`AKAI partner website: ${partner.name}`}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group-hover:bg-primary py-2 duration-500">
                <CardContent className="px-1">
                  <Image
                    alt={`${partner.name} logo`}
                    src={partner.logo}
                    width="158"
                    height="48"
                    className="mx-auto h-12 object-contain dark:grayscale dark:invert"
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
