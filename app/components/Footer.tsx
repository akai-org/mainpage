'use client';
import { useRef, useState } from 'react';
import MobileMenu from './MobileMenu';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { MENU } from '../resources/constants';
import Character from './Character';
import clsx from 'clsx';

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
        // TODO Scroll to section

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
        <div className="flex-center size-full">
          <div className="mt-auto h-1/2 w-full flex-grow border-t border-black"></div>
          <div
            className="flex-center h-full w-40 cursor-pointer border-x border-black duration-300 active:bg-secondary active:text-white sm:hidden"
            onClick={() =>
              !isMobileMenuOpen
                ? setIsMobileMenuOpen(true)
                : handleMobileClose()
            }
          >
            MENU
          </div>
          {MENU.map((item, i) => (
            <div
              key={i}
              onClick={() => onClickMenuItem(item.to)}
              className={clsx(
                'flex-center hidden h-full w-40 cursor-pointer text-nowrap border-l border-black px-5 duration-300 hover:bg-secondary hover:text-white active:text-xl sm:flex',
                {
                  'border-r': i == MENU.length - 1,
                },
              )}
            >
              {item.name}
            </div>
          ))}
          <div className="mt-auto h-1/2 w-full flex-grow border-t border-black"></div>
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
        <Image
          src="/AKAI_logo.png"
          priority
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <Character referenceRef={referenceRef} />
    </>
  );
}
