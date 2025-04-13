'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

import backgroundImg from '@/../public/background.svg';
import { Home } from '@/components/sections/home';
import { About } from '@/components/sections/about';
import { Join } from '@/components/sections/join';
import { Projects } from '@/components/sections/projects';
import { Partners } from '@/components/sections/partners';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

  return (
    <>
      <main className="bg-background relative z-10 mx-auto mb-14 w-full max-w-6xl space-y-10 rounded-xl border shadow-xl xl:mt-5">
        <Home />
        <About />
        <Join />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <Image
        src={backgroundImg}
        alt="Background image"
        className="fixed top-0 left-0 -z-10 size-full object-cover"
      />
    </>
  );
}
