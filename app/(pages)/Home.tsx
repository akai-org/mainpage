import Image from 'next/image';
import { Heading, Text } from '@radix-ui/themes';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex-center-col relative h-dvh gap-5 xl:h-[calc(100dvh-16px)]">
      <div className="flex-center w-fit text-5xl font-bold">
        <Image
          src="/logos/AKAI_logo_white.svg"
          alt="Logo"
          width={200}
          height={200}
          className="hidden dark:block"
        />
        <Image
          src="/logos/AKAI_logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="block dark:hidden"
        />
      </div>
      <div className="h-1 w-7 rounded bg-accent-9"></div>
      <Heading size={{ initial: '2', xs: '4', sm: '8' }} id="akai">
        Akademickie Koło Aplikacji Internetowych
      </Heading>
      <div className="flex-center absolute bottom-0 w-full p-2 text-accent-11">
        <div
          className="flex-center-col"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            })
          }
        >
          <Text className="cursor-pointer">Zobacz więcej</Text>
          <MdOutlineKeyboardArrowDown className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
