'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const useLoadingClient = () => {
  const [isWindow, setIsWindow] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window != 'undefined') setIsWindow(true);
  }, []);

  const loadingRef = useRef(null);
  useGSAP(() => {
    if (!isWindow || !loadingRef) return;
    document.body.style.overflow = 'hidden';

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
        <div className="flex-center-col absolute h-dvh w-full gap-10 border-t border-black">
          <Image src="/AKAI_logo.png" alt="logo" width={200} height={200} />
          <div className="size-10 animate-spin rounded-[100px] border-4 border-black border-y-secondary" />
        </div>
      </div>
    ),
    isClient,
  };
};

export default useLoadingClient;
