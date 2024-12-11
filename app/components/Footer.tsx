'use client';
import { useRef, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import MobileMenu from '@/app/components/MobileMenu';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const characterRef = useRef<HTMLDivElement>(null);
  const referenceRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    console.log(document.body.style.overflow);
    if (document.body.style.overflow === 'hidden') return;
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

  const { contextSafe } = useGSAP();
  const onClickMenu = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to('.scrollContainer', {
      duration: 1,
      ease: 'power2.inOut',
      y: 0,
      onComplete: () => {
        window.scrollTo(0, 0);
      },
    });
    tl.to('.scrollContainer', {
      duration: 1,
      ease: 'power2.inOut',
      y: '100dvh',
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
          <div onClick={onClickMenu}>Strona główna</div>
          <div>O Nas</div>
          <div>Projekty</div>
          <div>Partnerzy</div>
          <div>Kontakt</div>
        </div>
      </div>
      {isMenuOpen && <MobileMenu setIsOpen={setIsMenuOpen} />}
      <div className="scrollContainer flex-center fixed left-0 top-0 z-[60] h-dvh w-full translate-y-[100dvh] border-y border-black bg-main">
        <Image src="/AKAI_logo.png" alt="logo" width={200} height={200} />
      </div>
      <div
        ref={characterRef}
        className="fade-up-gsap bottom-footer flex-center fixed z-50 size-10 border border-black bg-white"
      >
        <div>CAT</div>
      </div>
    </>
  );
}
