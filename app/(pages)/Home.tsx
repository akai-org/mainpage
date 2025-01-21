import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Heading } from '@radix-ui/themes';

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
    <div id="home" className="flex-center-col h-dvh scale-x-0 gap-5">
      <div className="flex-center w-fit text-5xl font-bold">
        <Image
          id="logo-left"
          src="/logos/AKAI_logo_left.png"
          alt="logo left"
          width={100}
          height={100}
        />
        <Image
          id="logo-right"
          src="/logos/AKAI_logo_right.png"
          alt="logo right"
          width={100}
          height={100}
        />
      </div>
      <div className="bg-accent-9 h-1 w-7 rounded"></div>
      <Heading
        size={{ initial: '2', xs: '4', sm: '8' }}
        id="akai"
        className="opacity-0"
      >
        _
      </Heading>
    </div>
  );
}
