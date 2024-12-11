import { MAIL, SOCIALS } from '@/app/resources/constants';

export default function Contact() {
  return (
    <div className="flex-center-col gap-10">
      <h1 className="text-5xl font-bold">Kontakt</h1>
      <a href={`mailto:${MAIL}`}>{MAIL}</a>
      <div className="flex gap-7">
        {SOCIALS.map((social, i) => (
          <a className="text-xl" key={i} target="_blank" href={social.link}>
            {social.icon}
          </a>
        ))}
      </div>
      <div className="text-[10px]">
        © 2020-{new Date().getFullYear()} Akademickie Koło Aplikacji
        Internetowych
      </div>
    </div>
  );
}
