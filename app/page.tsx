'use client';
import useLoadingClient from './resources/useLoadingClient';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import Footer from '@/app/components/Footer';
import Join from '@/app/pages/Join';

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
          <Home />
          <About />
          <Join />
          <Projects />
          <Partners />
          <Contact />
          <Footer />
        </>
      ) : (
        loadingJSX
      )}
    </>
  );
}
