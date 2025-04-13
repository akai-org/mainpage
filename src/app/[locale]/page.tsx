'use client';

import Image from 'next/image';
import { Container } from '@radix-ui/themes';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

import backgroundImg from '@/../public/background.svg';
import useClient from '@/lib/use-client';
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import Join from '@/components/Join';

export default function Page() {
  const isClient = useClient();

  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
  useGSAP(() => {
    if (!isClient) return;
    const elements = document.querySelectorAll('div#fade-up');
    gsap.from(elements, {
      y: '100dvh',
      ease: 'power2.inOut',
      duration: 1,
      onComplete: () => {
        document.body.style.overflow = 'auto';
      },
    });
  }, [isClient]);

  return (
    <>
      {isClient && (
        <Container size="4">
          <div
            id="fade-up"
            className="border-main bg-radix-gray-1 shadow-radix-6 relative z-10 mb-14! flex flex-col border xl:mt-5"
          >
            <Home />
            <About />
            <div className="h-10 w-full" />
            <Join />
            <div className="h-10 w-full" />
            <Projects />
            <div className="h-10 w-full" />
            <Partners />
            <div className="h-10 w-full" />
            <Contact />
          </div>
          <Footer />
        </Container>
      )}
      <div
        id="loading-screen"
        className="flex-center-col border-main bg-radix-gray-1 shadow-radix-1 fixed top-0 left-0 z-50 h-dvh w-full gap-10 border-t"
      >
        <Logo size={200} />
        <div
          className="text-surface border-accent-9 inline-block size-10 animate-spin rounded-full border-[6px] border-solid border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        />
      </div>
      <Image
        src={backgroundImg}
        alt="Background image"
        className="fixed top-0 left-0 -z-10 size-full object-cover"
      />
    </>
  );
}
