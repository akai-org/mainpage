'use client';
import { Element } from 'react-scroll';
import { PARTNERS } from '@/app/resources/constants';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Partners() {
  const { contextSafe } = useGSAP();
  const onClickPartner = contextSafe((i: number) => {
    const partners = document.querySelectorAll('#partner');
    const partners2 = document.querySelectorAll('#partner-2');
    if (partners2[i].textContent === PARTNERS[i].name) return;
    gsap.from(partners[i], {
      rotationY: 360,
      duration: 1,
    });
    gsap.to(partners2[i], {
      duration: 1,
      borderWidth: 2,
      text: {
        value: PARTNERS[i].name,
      },
    });
  });

  return (
    <Element
      name="partners"
      className="flex-center-col gap-5 px-5 sm:px-main md:gap-20"
    >
      <h1 className="text-3xl font-bold sm:text-5xl">Nasi partnerzy</h1>
      <div className="flex-center-col flex w-full gap-10 md:flex-row md:justify-around md:gap-0">
        {PARTNERS.map((_, i) => (
          <div
            key={i}
            id="partner"
            onClick={() => onClickPartner(i)}
            className="w-fit border-2 border-secondary p-1"
          >
            <div
              id="partner-2"
              className="cursor-pointer select-none rounded border-secondary p-2 text-center"
            >
              PARTNER
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
}
