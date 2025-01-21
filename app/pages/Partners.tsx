'use client';
import { PARTNERS } from '../resources/constants';
import { Heading } from '@radix-ui/themes';
import clsx from 'clsx';
import Image from 'next/image';
import { MagicCard } from '@/app/components/MagicCard';

export default function Partners() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading className="text-center">Nasi partnerzy</Heading>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {PARTNERS.map((partner, i) => (
            <a
              key={i}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicCard
                gradientColor="var(--accent-6)"
                className={clsx(
                  'col-span-2 flex w-full justify-center bg-radix-gray-1 p-1 shadow-radix-1 lg:col-span-1',
                  {
                    'sm:col-start-2': i == PARTNERS.length - 2,
                    'col-start-2 sm:col-start-auto': i == PARTNERS.length - 1,
                  },
                )}
              >
                <Image
                  alt={partner.name}
                  src={partner.logo}
                  width="158"
                  height="48"
                  className="mx-auto h-12 object-contain dark:grayscale dark:invert"
                />
              </MagicCard>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
