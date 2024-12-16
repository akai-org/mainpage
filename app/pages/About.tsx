'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Element } from 'react-scroll';
import Image from 'next/image';

export default function About() {
  useGSAP(() => {
    const left = document.querySelectorAll('#about-fade-left');
    const right = document.querySelectorAll('#about-fade-right');

    left.forEach(g => {
      gsap.from(g, {
        x: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: g,
          start: 'top 70%',
          end: 'bottom 70% ',
        },
      });
    });
    right.forEach(g => {
      gsap.from(g, {
        x: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: g,
          start: 'top 70%',
          end: 'bottom 70% ',
        },
      });
    });

    gsap.from('#about-main', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        markers: true,
        trigger: '#about-main',
        start: 'top 80%',
        end: 'bottom 80% ',
      },
    });
  });
  return (
    <Element
      name="about"
      className="flex-center-col lg gap-10 overflow-hidden !py-5 px-5 lg:gap-5 lg:px-20"
    >
      <div className="flex w-full flex-col justify-between gap-5 sm:flex-row sm:gap-0 lg:h-36">
        <div
          id="about-fade-left"
          className="flex-center-col text-center sm:w-1/2"
        >
          <div
            id="about-main"
            className="border-secondary-1 w-full p-2 text-2xl font-bold lg:hidden"
          >
            O nas
          </div>
          <div className="border-secondary-1 h-full p-5">
            Działamy od 2010 roku, kiedy powstaliśmy na Wydziale Informatyki
            Politechniki Poznańskiej.
          </div>
        </div>
        <div
          id="about-main"
          className="flex-center border-secondary-1 hidden w-full text-5xl lg:flex"
        >
          O nas
        </div>
        <div
          id="about-fade-right"
          className="flex-center-col border-secondary-1 p-5 text-center sm:w-1/2"
        >
          Realizujemy projekty aplikacji internetowych, które pozwalają nam
          rozwijać umiejętności i zdobywać doświadczenie.
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 sm:flex-row sm:gap-0 lg:h-36">
        <div id="about-fade-left" className="border-secondary-1 p-5">
          Skupiamy młodych i ambitnych ludzi, którzy jako cel stawiają sobie
          rozwój i osiągnięcie sukcesu w dziedzinie aplikacji internetowych.
        </div>
        <div className="flex-center-col flex-grow">
          <div
            className="border-secondary-1 p-5 lg:mt-auto"
            id="about-fade-right"
          >
            Zależy nam na promowaniu idei sieci budowanej przez
            profesjonalistów, którzy znają wartość swojej wiedzy i są zawsze
            głodni nowych umiejętności i doświadczenia.
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col lg:h-36">
        <div
          id="about-fade-left"
          className="border-secondary-1 p-5 text-center"
        >
          Liczymy, że realizacje w sektorze prywatnym oraz publicznym, dadzą
          członkom <span className="font-bold">AKAI</span>
        </div>
        <div
          id="about-fade-right"
          className="border-secondary-1 p-5 text-center"
        >
          szansę na budowanie profesjonalizmu i zdobycie tak ważnego
          doświadczenia dla obecnej i przyszłej działalności.
        </div>
      </div>

      <div className="flex w-full lg:h-36">
        <div id="about-fade-left" className="border-secondary-1 p-5">
          Staramy się nawiązywać współpracę z placówkami naukowymi,
          przedstawicielami firm oraz znanymi specjalistami ze świata IT.
          Jesteśmy gotowi podejmować kolejne wyzwania i pokazywać, że wiedza i
          doświadczenie przekazywane przez naszą organizacja stanowi przyszłość
          projektowania aplikacji internetowych.
        </div>
        <Image
          src="/AKAI_logo.png"
          alt="logo"
          width={200}
          height={200}
          id="about-fade-right"
          className="border-secondary-1 hidden h-full w-24 p-5 sm:block lg:w-fit"
        />
      </div>
    </Element>
  );
}
