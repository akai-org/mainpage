'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

type MobileMenuT = {
  setIsOpen: (value: boolean) => void;
  onClickMenuItem: (to: string, onComplete?: () => void) => void;
};
export default function MobileMenu({
  setIsOpen,
  onClickMenuItem,
}: MobileMenuT) {
  useGSAP(() => {
    gsap.to('#mobile-menu', {
      duration: 0.5,
      ease: 'power2.inOut',
      y: 0,
    });
    gsap.to('#mobile-menu-bg', {
      duration: 0.5,
      opacity: 1,
    });
  });

  const { contextSafe } = useGSAP();

  const handleClose = contextSafe(() => {
    gsap.to('#mobile-menu-bg', {
      duration: 0.25,
      opacity: 0,
    });
    gsap.to('#mobile-menu', {
      duration: 0.5,
      ease: 'power2.inOut',
      y: '100dvh',
      onComplete: () => {
        setIsOpen(false);
      },
    });
  });

  const handleClick = (to: string) => {
    onClickMenuItem(to, () => setIsOpen(false));
  };

  return (
    <div className="sm:hidden">
      <div
        id="mobile-menu-bg"
        className="fixed top-0 z-50 h-dvh w-full flex-grow bg-black bg-opacity-25 opacity-0"
        onClick={handleClose}
      />
      <div
        id="mobile-menu"
        className="translate-y-dvh flex-center-col fixed bottom-0 z-50 w-full gap-5 border-t border-black bg-main p-5"
      >
        <div onClick={() => handleClick('home')}>Strona główna</div>
        <div onClick={() => handleClick('about')}>O Nas</div>
        <div onClick={() => handleClick('projects')}>Projekty</div>
        <div onClick={() => handleClick('partners')}>Partnerzy</div>
        <div onClick={() => handleClick('contact')}>Kontakt</div>
      </div>
    </div>
  );
}
