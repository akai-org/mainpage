'use client';
import useLoadingClient from '@/resources/useLoadingClient';
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import Footer from '@/components/Footer';
import Join from '@/components/Join';
import { Container } from '@radix-ui/themes';
import { GridPattern } from '@/components/ui/GridPattern';
import { cn } from '@/resources/utils';

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
      onComplete: () => {
        document.body.style.overflow = 'auto';
      },
    });
  }, [isClient]);

  return (
    <>
      {isClient ? (
        <>
          <Container size="4">
            <div className="fade-up-gsap border-main relative z-10 !mb-14 flex flex-col border bg-radix-gray-1 shadow-radix-6 xl:mt-5">
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
        <>{loadingJSX}</>
      )}
      <GridPattern
        className={cn(
          'fixed -z-10 [mask-image:radial-gradient(60dvw_circle_at_center,white,transparent)]',
        )}
        width={20}
        height={20}
      />
    </>
  );
}
