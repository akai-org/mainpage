'use client';
import { useRef, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import MobileMenu from '@/app/components/MobileMenu';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        ref={referenceRef}
        className="fade-up-gsap h-footer flex-center-col fixed bottom-0 z-50 w-full gap-2 border-t border-black bg-main"
      >
        <IoMdMenu
          className="sm:hidden"
          size={20}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className="sm:flex-center hidden gap-5">
          <div>Strona główna</div>
          <div>O Nas</div>
          <div>Projekty</div>
          <div>Partnerzy</div>
          <div>Kontakt</div>
        </div>
      </div>
      {isMenuOpen && <MobileMenu setIsOpen={setIsMenuOpen} />}
      <div
        ref={characterRef}
        className="fade-up-gsap bottom-footer flex-center fixed z-50 size-10 border border-black bg-white"
      >
        <div>CAT</div>
      </div>
    </>
  );
}
