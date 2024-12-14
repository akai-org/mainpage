import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MENU } from '@/app/resources/constants';

type MobileMenuT = {
  setIsOpen: (value: boolean) => void;
  handleMobileClose: () => void;
  onClickMenuItem: (to: string, onComplete?: () => void) => void;
};
export default function MobileMenu({
  setIsOpen,
  handleMobileClose,
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

  return (
    <div className="sm:hidden">
      <div
        id="mobile-menu-bg"
        className="fixed top-0 z-50 h-dvh w-full flex-grow bg-black bg-opacity-25 opacity-0"
        onClick={handleMobileClose}
      />
      <div
        id="mobile-menu"
        className="bottom-footer translate-y-dvh flex-center-col fixed z-50 w-full gap-5 border-t border-black bg-main p-5"
      >
        {MENU.map((item, i) => (
          <div
            key={i}
            onClick={() => onClickMenuItem(item.to, () => setIsOpen(false))}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
