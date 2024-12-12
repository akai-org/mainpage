import { MAIL, SOCIALS } from '@/app/resources/constants';
import { Element } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Contact() {
  const { contextSafe } = useGSAP();
  const onClick = contextSafe(() => {
    const socials = document.querySelectorAll('#contact-social');

    const tl = gsap.timeline();
    tl.to('#contact-container', {
      scale: 0,
      display: 'none',
      duration: 0.2,
    });
    tl.to('#contact-container-2', {
      scale: 1,
      display: 'flex',
      duration: 0.2,
    });
    socials.forEach((social, i) => {
      tl.to(social, {
        scale: 1,
        y: 20,
        display: 'block',
        duration: 0.2,
      });
    });
    tl.to(socials, {
      rotation: 360,
      duration: 2,
      stagger: 1,
      repeat: -1,
    });
  });

  return (
    <Element name="contact" className="flex-center-col gap-10">
      <div className="mb-auto" />
      <div
        id="contact-container"
        onClick={onClick}
        className="cursor-pointer select-none rounded border border-b border-black p-2 text-center duration-200"
      >
        <div className="text-5xl font-bold">Kontakt</div>
        <div>Kliknij mnie!</div>
      </div>
      <div
        id="contact-container-2"
        className="flex-center-col hidden scale-0 gap-10 text-center"
      >
        <a className="text-5xl" href={`mailto:${MAIL}`}>
          {MAIL}
        </a>
        <div className="flex gap-7">
          {SOCIALS.map((social, i) => (
            <div
              id="contact-social"
              className="hidden scale-0 rounded-[500px] border-2 border-b-black border-l-secondary border-r-secondary border-t-black p-2 text-2xl"
              key={i}
            >
              <a target="_blank" href={social.link}>
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto text-[10px]">
        © 2020-{new Date().getFullYear()} Akademickie Koło Aplikacji
        Internetowych
      </div>
    </Element>
  );
}
