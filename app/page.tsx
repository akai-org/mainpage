'use client';
import useLoadingClient from '@/resources/useLoadingClient';
import Home from '@/app/(pages)/Home';
import About from '@/app/(pages)/About';
import Projects from '@/app/(pages)/Projects';
import Partners from '@/app/(pages)/Partners';
import Contact from '@/app/(pages)/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import Footer from '@/components/Footer';
import Join from '@/app/(pages)/Join';
import { Container } from '@radix-ui/themes';

export default function Page() {
  const { loadingJSX, isClient } = useLoadingClient();

  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin); //register all plugins use in app
  useGSAP(() => {
    if (!isClient) return;
    const elements = document.querySelectorAll('div.fade-up-gsap');
    gsap.to(elements, {
      y: 0,
      ease: 'power2.inOut',
      duration: 1,
    });
  }, [isClient]);

  return (
    <>
      {isClient ? (
        <>
          <Container size="4">
            <div className="border-main flex flex-col bg-radix-gray-1 lg:border-x">
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
          </Container>
          <Footer />
        </>
      ) : (
        loadingJSX
      )}
    </>
  );
}
