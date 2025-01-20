'use client';
import { PARTNERS } from '../resources/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Card, Heading } from '@radix-ui/themes';
import clsx from 'clsx';
import Image from 'next/image';

export default function Partners() {
  useGSAP(() => {
    const partners = document.querySelectorAll('#partner');
    const partners2 = document.querySelectorAll('#partner-2');

    partners.forEach(partner => {
      gsap.to(partner, {
        rotationY: 360,
        duration: 1,
        scrollTrigger: {
          trigger: partner,
          start: 'top 70%',
          end: 'bottom 70% ',
        },
      });
    });
    partners2.forEach(partner => {
      gsap.to(partner, {
        duration: 1,
        borderWidth: 2,
        scrollTrigger: {
          trigger: partner,
          start: 'top 70%',
          end: 'bottom 70% ',
        },
      });
    });
    const partnerText = document.querySelectorAll('#partner-text');
    partnerText.forEach(partnerText => {
      gsap.from(partnerText, {
        opacity: 0,
        duration: 1,
        x: -100,
        scrollTrigger: {
          trigger: partnerText,
          start: 'top 70%',
          end: 'bottom 70% ',
        },
      });
    });
  });

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading className="text-center">Nasi partnerzy</Heading>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {PARTNERS.map((partner, i) => (
            <Card
              key={i}
              className={clsx('col-span-2 w-full lg:col-span-1', {
                'sm:col-start-2': i == PARTNERS.length - 2,
                'col-start-2 sm:col-start-auto': i == PARTNERS.length - 1,
              })}
            >
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  alt={partner.name}
                  src={partner.logo}
                  width="158"
                  height="48"
                  className="mx-auto h-12 object-contain dark:grayscale dark:invert"
                />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
