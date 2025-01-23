import Image from 'next/image';

export default function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <>
      <Image
        src={`/logos/AKAI_logo.png`}
        alt="Logo"
        width={width}
        height={height}
        className="dark:hidden"
      />
      <Image
        src={`/logos/AKAI_logo_white.svg`}
        alt="Logo"
        width={width}
        height={height}
        className="hidden dark:block"
      />
    </>
  );
}
