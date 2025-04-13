'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

import backgroundImg from '@/../public/background.svg';
import { Home } from '@/components/home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Join from '@/components/Join';

export default function Page() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

  return (
    <>
      <main className="bg-background relative z-10 mx-auto mb-14 max-w-6xl space-y-10 border shadow-xl xl:mt-5">
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
