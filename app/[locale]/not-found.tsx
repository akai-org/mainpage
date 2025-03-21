'use client';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation('home');
  const referenceRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  useGSAP(() => {
    if (referenceRef.current == null) return;
    const elements = document.querySelectorAll('#not-found');
    elements.forEach(element => {
      gsap.to(element, {
        x: -referenceRef.current!.clientWidth / 2,
        ease: 'none',
        duration: 10,
        yoyo: true,
        repeat: -1,
      });
    });
  }, [referenceRef.current]);
  return (
    <>
      <div className="fixed z-40 flex h-dvh flex-col justify-around sm:justify-between">
        {Array.from({ length: 3 }, (_, i1) => (
          <div
            key={i1}
            id="not-found"
            className="flex w-full justify-between"
            style={{ top: 200 * i1 }}
          >
            {Array.from({ length: 10 }, (_, i2) => (
              <div
                key={i2}
                className="w-fit flex-shrink-0 px-5 text-[70px] sm:text-[150px]"
              >
                {i2 % 2 == 0 ? (
                  404
                ) : (
                  <>
                    <span className="text-accent-9">A</span>KAI
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div ref={referenceRef} className="flex-center mt-auto h-dvh w-full">
        <div className="flex-center-col z-50 mx-auto gap-5 rounded border-4 border-red-500 bg-radix-gray-1 p-5">
          <h1 className="text-4xl font-bold sm:text-5xl">{t('404')}</h1>
          <Link
            href="/"
            className="active:bg-main select-none border border-red-500 p-1 duration-300 hover:border-black hover:underline"
          >
            {t('404button')}
          </Link>
        </div>
      </div>
    </>
  );
}
