'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Code } from '@radix-ui/themes';

const useLoadingClient = () => {
  const [isWindow, setIsWindow] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window != 'undefined') setIsWindow(true);
  }, []);

  const loadingRef = useRef(null);
  useGSAP(() => {
    if (!isWindow || !loadingRef) return;
    document.body.style.overflowY = 'hidden';

    gsap.to(loadingRef.current, {
      y: '100dvh',
      duration: 1,
      display: 'none',
      ease: 'power2.inOut',
      onComplete: () => {
        setIsClient(true);
      },
    });
  }, [isWindow, loadingRef]);
  return {
    loadingJSX: (
      <div ref={loadingRef}>
        <div className="flex-center-col border-main absolute h-dvh w-full gap-10 border-t bg-radix-gray-1 shadow-radix-1">
          <Image
            src="/logos/AKAI_logo_white.svg"
            alt="Logo"
            width={200}
            height={200}
            className="hidden dark:block"
          />
          <Image
            src="/logos/AKAI_logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="block dark:hidden"
          />
          <Code className="loader"></Code>
        </div>
      </div>
    ),
    isClient,
  };
};

export default useLoadingClient;
