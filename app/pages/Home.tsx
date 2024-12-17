import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function Home() {
  useGSAP(() => {
    const logos = ['#logo-left', '#logo-right'];
    logos.find((logo, i) => {
      gsap.from(logo, {
        duration: 0.75,
        opacity: 0,
        x: i == 0 ? -100 : 100,
        delay: 0.5,
      });
    });

    const tlMain = gsap.timeline({ delay: 0 });
    tlMain.to('#home', {
      duration: 0.5,
      scaleX: 1,
    });
    tlMain.to('#akai', {
      opacity: 1,
      duration: 0,
    });
    tlMain.to('#akai', {
      duration: 2,
      ease: 'none',
      text: {
        value: 'Akademickie Koło Aplikacji Internetowych',
      },
    });
  });
  return (
    <div id="home" className="flex-center-col gap-main scale-x-0">
      <div className="flex-center w-fit text-5xl font-bold">
        <Image
          id="logo-left"
          src="/AKAI_logo_left.png"
          alt="logo left"
          width={50}
          height={50}
        />
        <Image
          id="logo-right"
          src="/AKAI_logo_right.png"
          alt="logo right"
          width={50}
          height={50}
        />
      </div>
      <div className="h-1 w-7 rounded bg-secondary"></div>
      <div id="akai" className="opacity-0">
        _
      </div>
    </div>
  );
}
