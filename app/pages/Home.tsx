import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

export default function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('.home-gsap', {
      y: 0,
      ease: 'power2.inOut',
      duration: 1,
    });
    tl.to('.akai', {
      duration: 2,
      ease: 'none',
      text: {
        value: 'Akademickie koło aplikacji internetowych',
      },
    });
  });
  return (
    <div className="home-gsap flex-center-col gap-main -translate-y-[100dvh]">
      <h1 className="text-5xl font-bold">AKAI</h1>
      <div className="h-1 w-7 rounded bg-secondary"></div>
      <div className="akai">_</div>
      <div className="text-xs">Dla najlepszego efektu zobacz na komputerze</div>
    </div>
  );
}
