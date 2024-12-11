'use client';
import Character from '@/app/components/Character';
import useLoadingClient from '@/app/resources/useLoadingClient';
import Home from '@/app/pages/Home';
import About from '@/app/pages/About';
import Projects from '@/app/pages/Projects';
import Partners from '@/app/pages/Partners';
import Contact from '@/app/pages/Contact';

export default function Page() {
  const { loadingJSX, isLoading } = useLoadingClient();
  return (
    <>
      {isLoading ? (
        <>
          <div className="main-container">
            <Home />
            <About />
            <Projects />
            <Partners />
            <Contact />
          </div>
          <Character />
        </>
      ) : (
        loadingJSX
      )}
    </>
  );
}
