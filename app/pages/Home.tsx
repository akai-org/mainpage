import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

export default function Home() {
  useGSAP(() => {
    gsap.to('.akai', {
      duration: 2,
      delay: 1,
      ease: 'none',
      text: {
        value: 'Akademickie koło aplikacji internetowych',
      },
    });
  });
  return (
    <Element name="home" className="fade-down-gsap flex-center-col gap-main">
      <h1 className="text-5xl font-bold">AKAI</h1>
      <div className="h-1 w-7 rounded bg-secondary"></div>
      <div className="akai">_</div>
      <div className="text-xs">Dla najlepszego efektu zobacz na komputerze</div>
    </Element>
  );
}
