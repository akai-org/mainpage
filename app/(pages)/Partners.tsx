'use client';
import { PARTNERS } from '@/resources/constants';
import { Heading, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { clsx } from 'clsx';

export default function Partners() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1 pl-5">
        <Heading size="8">Nasi partnerzy</Heading>
        <Text>Którzy nam zaufali</Text>
      </div>
      <div className="grid grid-cols-2 justify-between gap-2 px-2 sm:grid-cols-5">
        {PARTNERS.map((partner, i) => (
          <a
            key={i}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'mx-auto p-1 shadow-radix-1 duration-500 hover:bg-accent-6 hover:dark:bg-accent-2 sm:mx-0',
              {
                'col-span-2 sm:col-span-1': i == PARTNERS.length - 1,
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
          </a>
        ))}
      </div>
    </div>
  );
}
