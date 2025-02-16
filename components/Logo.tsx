import Image from 'next/image';

export default function Logo({ size }: { size: number }) {
  return (
    <>
      <Image
        src={`/logos/AKAI_logo.png`}
        alt="Logo"
        width={size}
        height={size}
        priority
        className="size-auto dark:hidden"
      />
      <Image
        src={`/logos/AKAI_logo_white.svg`}
        alt="Logo"
        width={size}
        height={size}
        priority
        className="hidden size-auto dark:block"
      />
    </>
  );
}
