'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
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
        trigger: '#about-main',
        start: 'top 80%',
        end: 'bottom 80% ',
      },
    });
  });
  return (
    <div className="flex-center-col gap-8 p-5 lg:gap-4 lg:px-20">
      <div className="flex w-full flex-col justify-between gap-2 sm:flex-row lg:h-36">
        <div
          id="about-fade-left"
          className="flex-center-col gap-2 text-center sm:w-1/2"
        >
          <div
            id="about-main"
            className="border-accent-6 bg-accent-2 w-full border bg-opacity-25 p-2 text-2xl font-bold lg:hidden"
          >
            O NAS
          </div>
          <div className="border-accent-6 h-full border p-5">
            Działamy od 2010 roku, kiedy powstaliśmy na Wydziale Informatyki
            Politechniki Poznańskiej.
          </div>
        </div>
        <div
          id="about-main"
          className="flex-center border-accent-6 bg-accent-2 hidden w-full border bg-opacity-25 text-5xl lg:flex"
        >
          O NAS
        </div>
        <div
          id="about-fade-right"
          className="flex-center-col border-accent-6 border p-5 text-center sm:w-1/2"
        >
          Realizujemy projekty aplikacji internetowych, które pozwalają nam
          rozwijać umiejętności i zdobywać doświadczenie.
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 sm:flex-row lg:h-36">
        <div id="about-fade-left" className="border-accent-6 border p-5">
          Skupiamy młodych i ambitnych ludzi, którzy jako cel stawiają sobie
          rozwój i osiągnięcie sukcesu w dziedzinie aplikacji internetowych.
        </div>
        <div className="flex-center-col flex-grow gap-2">
          <div
            id="about-fade-right"
            className="border-accent-6 bg-accent-2 hidden w-full flex-grow border bg-opacity-25 lg:block"
          />
          <div className="border-accent-6 border p-5" id="about-fade-right">
            Zależy nam na promowaniu idei sieci budowanej przez
            profesjonalistów, którzy znają wartość swojej wiedzy i są zawsze
            głodni nowych umiejętności i doświadczenia.
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="flex gap-2">
          <div
            id="about-fade-left"
            className="border-accent-6 bg-accent-2 hidden w-80 border bg-opacity-25 lg:block"
          />
          <div
            id="about-fade-right"
            className="border-accent-6 flex-grow border p-5 text-center"
          >
            Liczymy, że realizacje w sektorze prywatnym oraz publicznym, dadzą
            członkom <span className="font-bold">AKAI </span>
            szansę na budowanie profesjonalizmu i zdobycie tak ważnego
            doświadczenia dla obecnej i przyszłej działalności.
          </div>
        </div>
      </div>

      <div className="flex w-full gap-2">
        <div id="about-fade-left" className="border-accent-6 border p-5">
          Staramy się nawiązywać współpracę z placówkami naukowymi,
          przedstawicielami firm oraz znanymi specjalistami ze świata IT.
          Jesteśmy gotowi podejmować kolejne wyzwania i pokazywać, że wiedza i
          doświadczenie przekazywane przez naszą organizacja stanowi przyszłość
          projektowania aplikacji internetowych.
        </div>
        <div
          id="about-fade-right"
          className="border-accent-6 bg-accent-2 relative hidden min-h-full w-72 flex-grow border bg-opacity-25 sm:block"
        >
          <Image
            src="/AKAI_logo.png"
            alt="logo"
            fill
            className="absolute h-full object-contain p-2"
          />
        </div>
      </div>
    </div>
  );
}
