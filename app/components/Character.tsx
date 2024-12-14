import { RefObject, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Character({
  referenceRef,
}: {
  referenceRef: RefObject<HTMLDivElement | null>;
}) {
  const characterRef = useRef<HTMLDivElement>(null);
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
    <div
      ref={characterRef}
      className="fade-up-gsap bottom-footer flex-center fixed z-40 size-10 border border-black bg-white"
    >
      <div>CAT</div>
    </div>
  );
}
