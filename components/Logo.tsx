import Image from 'next/image';

export default function Logo({ size }: { size: number }) {
  return (
    <div style={{ width: size, height: size }}>
      <Image
        src={`/logos/AKAI_logo_blue.svg`}
        alt="Logo"
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="size-full dark:hidden"
      />
      <Image
        src={`/logos/AKAI_logo_white.svg`}
        alt="Logo"
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="hidden size-full dark:block"
      />
    </div>
  );
}
