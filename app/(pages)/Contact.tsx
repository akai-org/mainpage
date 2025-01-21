import { MAIL, SOCIALS } from '@/resources/constants';
import { Text } from '@radix-ui/themes';

export default function Contact() {
  return (
    <div className="flex-center-col gap-10">
      <div className="flex-center flex-col gap-7 text-center sm:flex-row">
        <Text id="mail" size="7" className="size-full">
          {MAIL}
        </Text>
        <div className="flex gap-7">
          {SOCIALS.map((social, i) => (
            <div
              className="rounded-full border-2 border-black p-2 text-2xl dark:border-white"
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
