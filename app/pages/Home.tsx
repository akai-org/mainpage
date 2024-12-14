import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';

export default function Home() {
  useGSAP(() => {
    const logo = document.querySelectorAll('#gsap-logo');
    const tlMain = gsap.timeline();
    tlMain.to('#home', {
      duration: 0.5,
      scaleX: 1,
    });
    tlMain.to(logo, {
      duration: 0.75,
      opacity: 1,
      y: 0,
      x: 0,
    });
    tlMain.to('.akai', {
      opacity: 1,
      duration: 0,
    });
    tlMain.to('.akai', {
      duration: 2,
      ease: 'none',
      text: {
        value: 'Akademickie koło aplikacji internetowych',
      },
    });
  });
  return (
    <Element
      id="home"
      name="home"
      className="flex-center-col gap-main scale-x-0"
    >
      <div className="flex-center-col w-fit text-5xl font-bold">
        <div className="flex w-full justify-between">
          <div id="gsap-logo" className="-translate-x-10 opacity-0">
            A
          </div>
          <div id="gsap-logo" className="-translate-y-10 opacity-0">
            K
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div id="gsap-logo" className="translate-x-10 opacity-0">
            A
          </div>
          <div id="gsap-logo" className="translate-y-10 opacity-0">
            I
          </div>
        </div>
      </div>
      <div className="h-1 w-7 rounded bg-secondary"></div>
      <div className="akai opacity-0">_</div>
    </Element>
  );
}
