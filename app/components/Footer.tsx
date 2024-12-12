'use client';
import { useRef, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import MobileMenu from '@/app/components/MobileMenu';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { scroller, animateScroll } from 'react-scroll';

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const characterRef = useRef<HTMLDivElement>(null);
  const referenceRef = useRef<HTMLDivElement>(null);
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
  const onClickMenuItem = contextSafe((to: string, onComplete?: () => void) => {
    const tl = gsap.timeline();
    tl.to('.scrollContainer', {
      duration: 1,
      ease: 'power2.inOut',
      y: 0,
      onComplete: () => {
        const options = { duration: 0, delay: 0 };
        if (to === 'home') animateScroll.scrollToTop(options);
        else if (to === 'contact') animateScroll.scrollToBottom(options);
        else scroller.scrollTo(to, options);

        onComplete && onComplete();
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
        className="fade-up-gsap h-footer flex-center-col fixed bottom-0 z-40 w-full gap-2 border-t border-black bg-main"
      >
        <IoMdMenu
          className="sm:hidden"
          size={20}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className="sm:flex-center hidden gap-5">
          <div onClick={() => onClickMenuItem('home')}>Strona główna</div>
          <div onClick={() => onClickMenuItem('about')}>O Nas</div>
          <div onClick={() => onClickMenuItem('projects')}>Projekty</div>
          <div onClick={() => onClickMenuItem('partners')}>Partnerzy</div>
          <div onClick={() => onClickMenuItem('contact')}>Kontakt</div>
        </div>
      </div>
      {isMenuOpen && (
        <MobileMenu
          setIsOpen={setIsMenuOpen}
          onClickMenuItem={onClickMenuItem}
        />
      )}
      <div className="scrollContainer flex-center fixed left-0 top-0 z-[60] h-dvh w-full translate-y-[100dvh] border-y border-black bg-main">
        <Image src="/AKAI_logo.png" alt="logo" width={200} height={200} />
      </div>
      <div
        ref={characterRef}
        className="fade-up-gsap bottom-footer flex-center fixed z-40 size-10 border border-black bg-white"
      >
        <div>CAT</div>
      </div>
    </>
  );
}
