'use client';
import { PARTNERS } from '@/lib/constants';
import { Card, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

export default function Partners() {
  const { t } = useTranslation('partners');
  return (
    <section className="border-main p-container flex flex-col gap-5 border-y py-20">
      <div className="flex flex-col gap-1 pl-5 text-center sm:text-left">
        <Heading size="8">{t('heading')}</Heading>
      </div>
      <div className="grid grid-cols-2 justify-between gap-2 px-2 sm:grid-cols-5">
        {PARTNERS.map((partner, i) => (
          <a
            key={i}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'border-main group mx-auto rounded-xs p-1 sm:mx-0',
              {
                'col-span-2 sm:col-span-1': i == PARTNERS.length - 1,
              },
            )}
          >
            <Card className="group-hover:bg-accent-6 dark:group-hover:bg-accent-2 duration-500">
              <Image
                alt={partner.name}
                src={partner.logo}
                width="158"
                height="48"
                className="mx-auto h-12 object-contain dark:grayscale dark:invert"
              />
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
