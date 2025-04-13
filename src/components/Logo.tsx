import AKAI_logo_blue from '@/../public/logos/AKAI_logo_blue.svg';
import AKAI_logo_white from '@/../public/logos/AKAI_logo_white.svg';
import Image from 'next/image';

export default function Logo({ size }: { size: number }) {
  return (
    <div style={{ width: size, height: size }}>
      <Image src={AKAI_logo_blue} alt="Logo" className="dark:hidden" />
      <Image src={AKAI_logo_white} alt="Logo" className="hidden dark:block" />
    </div>
  );
}
