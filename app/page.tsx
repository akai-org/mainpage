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
import { Container, Separator } from '@radix-ui/themes';

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
          <Container size="4" className="-mt-1 px-1">
            <div className="flex flex-col lg:shadow-radix-1">
              <Home />
              <Separator className="mb-5 w-full" />
              <About />
              <Separator className="my-5 w-full" />
              <Join />
              <Separator className="my-10 w-full" />
              <Projects />
              <Separator className="my-10 w-full" />
              <Partners />
              <Separator className="my-10 w-full" />
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
