'use client';
import { Element } from 'react-scroll';
import { PARTNERS } from '@/app/resources/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Partners() {
  useGSAP(() => {
    const partners = document.querySelectorAll('#partner');
    const partners2 = document.querySelectorAll('#partner-2');

    partners.forEach((partner, i) => {
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
    partners2.forEach((partner, i) => {
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
    partnerText.forEach((partnerText, i) => {
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
    <Element name="partners" className="flex-center gap-20 px-5 sm:px-main">
      <div className="flex-center-col text-5xl font-bold">
        {Array.from('Partnerzy').map((t, i) => (
          <span key={i} id="partner-text">
            {t.toUpperCase()}
          </span>
        ))}
      </div>
      <div className="flex-center-col flex gap-10">
        {PARTNERS.map((partner, i) => (
          <div
            key={i}
            id="partner"
            className="w-32 border-2 border-secondary p-1"
          >
            <a target="_blank" href={partner.link}>
              <div
                id="partner-2"
                className="cursor-pointer select-none rounded border-secondary p-2 text-center"
              >
                {partner.name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </Element>
  );
}
