'use client';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to('#fadeDown', {
      y: 0,
      opacity: 1,
      ease: 'linear.inOut',
      scrollTrigger: {
        trigger: '#container',
        scrub: 1,
        markers: true,
      },
    });
  });
  return (
    <div id="container" className="flex-center-col px-20">
      <div className="flex w-full justify-between">
        <div
          className="-translate-y-20 border-2 border-secondary p-1 text-xl opacity-0"
          id="fadeDown"
        >
          O nas
        </div>
        <div
          className="-translate-y-20 border-2 border-secondary p-1 text-xl opacity-0"
          id="fadeDown"
        >
          Działamy od 2010 roku, kiedy powstaliśmy na Wydziale Informatyki
          Politechniki Poznańskiej.
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div>Co robimy?</div>
        <div>
          Realizujemy projekty aplikacji internetowych, które pozwalają nam
          rozwijać umiejętności i zdobywać doświadczenie.
        </div>
      </div>
      <div className="flex-center-col gap-5 text-center">
        <div>
          Skupiamy młodych i ambitnych ludzi, którzy jako cel stawiają sobie
          rozwój i osiągnięcie sukcesu w dziedzinie aplikacji internetowych.
        </div>
        <div>
          Zależy nam na promowaniu idei sieci budowanej przez profesjonalistów,
          którzy znają wartość swojej wiedzy i są zawsze głodni nowych
          umiejętności i doświadczenia.
        </div>
        <div>
          Liczymy, że realizacje w sektorze prywatnym oraz publicznym, dadzą
          członkom AKAI szansę na budowanie profesjonalizmu i zdobycie tak
          ważnego doświadczenia dla obecnej i przyszłej działalności.
        </div>
        <div>
          Staramy się nawiązywać współpracę z placówkami naukowymi,
          przedstawicielami firm oraz znanymi specjalistami ze świata IT.
          Jesteśmy gotowi podejmować kolejne wyzwania i pokazywać, że wiedza i
          doświadczenie przekazywane przez naszą organizacja stanowi przyszłość
          projektowania aplikacji internetowych.
        </div>
      </div>
    </div>
  );
}
