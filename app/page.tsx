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
import { GridPattern } from '@/components/GridPattern';
import { cn } from '@/lib/utils';

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
            <div className="fade-up-gsap border-main relative z-10 flex flex-col border bg-radix-gray-1 xl:my-4">
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
