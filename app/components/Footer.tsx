'use client';
import { useRef, useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import MobileMenu from '@/app/components/MobileMenu';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { scroller, animateScroll } from 'react-scroll';
import { MENU } from '@/app/resources/constants';
import Character from '@/app/components/Character';

export default function Footer() {
  const referenceRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleMobileClose = contextSafe(() => {
    gsap.to('#mobile-menu-bg', {
      duration: 0.25,
      opacity: 0,
    });
    gsap.to('#mobile-menu', {
      duration: 0.5,
      ease: 'power2.inOut',
      y: '100dvh',
      onComplete: () => {
        setIsMobileMenuOpen(false);
      },
    });
  });

  return (
    <>
      <div
        ref={referenceRef}
        className="fade-up-gsap h-footer flex-center-col fixed bottom-0 z-[60] w-full gap-2 border-t border-black bg-main"
      >
        <IoMdMenu
          className="sm:hidden"
          size={20}
          onClick={() =>
            !isMobileMenuOpen ? setIsMobileMenuOpen(true) : handleMobileClose()
          }
        />
        <div className="sm:flex-center hidden gap-5">
          {MENU.map((item, i) => (
            <div key={i} onClick={() => onClickMenuItem(item.to)}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          setIsOpen={setIsMobileMenuOpen}
          handleMobileClose={handleMobileClose}
          onClickMenuItem={onClickMenuItem}
        />
      )}
      <div className="scrollContainer flex-center fixed left-0 top-0 z-[60] h-dvh w-full translate-y-[100dvh] border-y border-black bg-main">
        <Image src="/AKAI_logo.png" alt="logo" width={200} height={200} />
      </div>
      <Character referenceRef={referenceRef} />
    </>
  );
}
