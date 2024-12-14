'use client';
import { RefObject, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Character({
  referenceRef,
}: {
  referenceRef: RefObject<HTMLDivElement | null>;
}) {
  const [anim, setAnim] = useState<'left' | 'middle' | 'right'>('left');
  const characterRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(characterRef.current, {
      x: referenceRef.current!.clientWidth - characterRef.current!.clientWidth,
      scrollTrigger: {
        start: 'top top',
        end: 'max',
        scrub: true,
        pin: true,
        onUpdate: self => {
          gsap.to(characterRef.current, {
            rotateY: self.direction === -1 ? 180 : 0,
          });
          //usprawnic animacje
          const interval = 5;
          const wynik =
            (Math.round((self.progress * 100) / interval) * interval) %
            (2 * interval);
          setAnim(wynik == 0 ? 'left' : 'right');
        },
      },
    });
  });

  return (
    <div
      ref={characterRef}
      className="fade-up-gsap bottom-footer flex-center fixed z-40"
    >
      <div>
        <Image
          src={`/cat_${anim}.png`}
          alt="cat"
          width={80}
          height={50}
          className="cat -mb-2"
        />
      </div>
    </div>
  );
}
