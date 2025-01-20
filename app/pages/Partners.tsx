'use client';
import { PARTNERS } from '../resources/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Card, Heading } from '@radix-ui/themes';

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
    <div className="flex-center gap-20 px-5 sm:px-main">
      <div className="flex-center-col">
        {Array.from('PARTNERZY').map((t, i) => (
          <Heading key={i} size="9" id="partner-text">
            {t}
          </Heading>
        ))}
      </div>
      <div className="flex-center-col flex gap-10">
        {PARTNERS.map((partner, i) => (
          <Card
            key={i}
            id="partner"
            className="border-accent-6 w-40 border p-2"
          >
            <a target="_blank" href={partner.link}>
              {partner.name}
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
