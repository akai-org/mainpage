'use client';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function NotFound() {
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
      {Array.from({ length: 3 }, (_, i1) => (
        <div
          key={i1}
          id="not-found"
          className="fixed z-40 flex w-full justify-between"
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
                  <span className="text-secondary">A</span>KAI
                </>
              )}
            </div>
          ))}
        </div>
      ))}

      <div ref={referenceRef} className="flex-center mt-auto h-dvh w-full">
        <div className="flex-center-col z-50 mx-auto gap-5 rounded border-4 border-red-500 bg-white p-5">
          <h1 className="text-4xl font-bold sm:text-5xl">Not Found :(</h1>
          <Link
            href="/#top"
            className="select-none border border-red-500 p-1 duration-300 hover:border-black hover:underline active:bg-main"
          >
            Go to main page
          </Link>
        </div>
      </div>
    </>
  );
}
