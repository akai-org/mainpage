'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Card, CardContent } from '@/components/ui/card';
import { PARTNERS } from '@/lib/constants';
import { cn } from '@/lib/utils';

function Partners() {
  const { t } = useTranslation('partners');
  return (
    <section>
      <h1 className="text-5xl font-bold">{t('heading')}</h1>
      <div className="grid grid-cols-2 justify-between gap-2 px-2 sm:grid-cols-5">
        {PARTNERS.map((partner, i) => (
          <Link
            key={i}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'border-main group mx-auto rounded-xs p-1 sm:mx-0',
              i == PARTNERS.length - 1 && 'col-span-2 sm:col-span-1',
            )}
          >
            <Card className="group-hover:bg-primary py-2 duration-500">
              <CardContent className="px-1">
                <Image
                  alt={partner.name}
                  src={partner.logo}
                  width="158"
                  height="48"
                  className="mx-auto h-12 object-contain dark:grayscale dark:invert"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { Partners };
