'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

export default function Character() {
  const characterRef = useRef<HTMLDivElement>(null);
  const referenceRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(characterRef.current, {
      x: referenceRef.current!.clientWidth - characterRef.current!.clientWidth,
      scrollTrigger: {
        start: 'top top',
        end: 'max',
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <>
      <div
        ref={characterRef}
        className="fade-up-gsap bottom-footer flex-center fixed z-50 size-10 border border-black bg-white"
      >
        <div>CAT</div>
      </div>
      <div
        ref={referenceRef}
        className="pointer-events-none invisible absolute left-0 right-0 top-0 h-0 w-full opacity-0"
      ></div>
    </>
  );
}
