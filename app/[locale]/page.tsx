'use client';
import useClient from '@/resources/useClient';
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
import { Code, Container } from '@radix-ui/themes';
import { GridPattern } from '@/components/ui/GridPattern';
import { cn } from '@/resources/utils';
import Logo from '@/components/Logo';

export default function Page() {
  const isClient = useClient();

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
      {isClient && (
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
      )}
      <div
        id="loading-screen"
        className="flex-center-col border-main fixed left-0 top-0 z-50 h-dvh w-full gap-10 border-t bg-radix-gray-1 shadow-radix-1"
      >
        <Logo width={200} height={200} />
        <Code className="loader"></Code>
      </div>
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
