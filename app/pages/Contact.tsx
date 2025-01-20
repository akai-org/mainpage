import { MAIL, SOCIALS } from '../resources/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Heading, Text } from '@radix-ui/themes';

export default function Contact() {
  useGSAP(() => {
    const socials = document.querySelectorAll('#contact-social');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-container',
        start: 'top 70%',
        end: 'bottom 70% ',
      },
    });
    tl.from('#contact-container-2', {
      duration: 0.5,
      x: -100,
      opacity: 0,
    });
    tl.from(socials, {
      duration: 0.5,
      y: 100,
      opacity: 0,
    });
    tl.to(socials, {
      rotation: 360,
      duration: 2,
      stagger: 1,
      repeat: -1,
    });
  });

  return (
    <div className="flex-center-col gap-10">
      <div className="mb-auto" />
      <div id="contact-container">
        <Heading size="9">Kontakt</Heading>
      </div>
      <div
        id="contact-container-2"
        className="flex-center-col gap-10 text-center"
      >
        <a href={`mailto:${MAIL}`}>
          <Text size="7">{MAIL}</Text>
        </a>
        <div className="flex gap-7">
          {SOCIALS.map((social, i) => (
            <div
              id="contact-social"
              className="rounded-[500px] border-2 border-x-secondary border-y-black p-2 text-2xl dark:border-y-white"
              key={i}
            >
              <a target="_blank" href={social.link}>
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-col items-center text-[10px]">
        <span>Realizacja Beniamin Szawracki</span>
        <span>
          © 2020-{new Date().getFullYear()} Akademickie Koło Aplikacji
          Internetowych
        </span>
      </div>
    </div>
  );
}
