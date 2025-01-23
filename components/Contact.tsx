import { MAIL, SOCIALS } from '@/resources/constants';
import { Text } from '@radix-ui/themes';

export default function Contact() {
  return (
    <div className="border-main flex-center-col p-container gap-10 border-t pb-0">
      <div className="flex-center flex-col gap-7 text-center">
        <Text id="mail" size="7" className="size-full">
          {MAIL}
        </Text>
        <div className="flex gap-7">
          {SOCIALS.map((social, i) => (
            <a
              target="_blank"
              href={social.link}
              className="border-main rounded-full border-2 p-2 text-2xl transition-colors hover:text-accent-9"
              key={i}
            >
              {social.icon}
            </a>
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
