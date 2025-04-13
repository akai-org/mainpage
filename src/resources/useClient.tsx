'use client';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const useClient = () => {
  const [isWindow, setIsWindow] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window != 'undefined') setIsWindow(true);
  }, []);

  useGSAP(() => {
    const loading = document.querySelector('#loading-screen');
    if (!isWindow || !loading) return;
    document.body.style.overflowY = 'hidden';

    gsap.to(loading, {
      y: '100dvh',
      duration: 1,
      display: 'none',
      ease: 'power2.inOut',
      onComplete: () => {
        setIsClient(true);
      },
    });
  }, [isWindow]);
  return isClient;
};

export default useClient;
