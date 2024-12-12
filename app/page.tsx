'use client';
import useLoadingClient from '@/app/resources/useLoadingClient';
import Home from '@/app/pages/Home';
import About from '@/app/pages/About';
import Projects from '@/app/pages/Projects';
import Partners from '@/app/pages/Partners';
import Contact from '@/app/pages/Contact';
import Footer from '@/app/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';

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
          <div className="main-container">
            <Home />
            <About />
            <Projects />
            <Partners />
            <Contact />
          </div>
          <Footer />
        </>
      ) : (
        loadingJSX
      )}
    </>
  );
}
