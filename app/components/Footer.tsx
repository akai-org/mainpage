'use client';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import MobileMenu from '@/app/components/MobileMenu';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-footer flex-center-col fixed bottom-0 z-50 w-full gap-2 border-t border-black bg-main">
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        <IoMdMenu
          className="sm:hidden"
          size={20}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="sm:flex-center hidden gap-5">
          <div>Strona główna</div>
          <div>O Nas</div>
          <div>Projekty</div>
          <div>Partnerzy</div>
          <div>Kontakt</div>
        </div>
      </div>
    </>
  );
}
