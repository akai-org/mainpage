import { Element } from 'react-scroll';
import { PARTNERS } from '@/app/resources/constants';

export default function Partners() {
  return (
    <Element name="partners" className="flex-center-col gap-20 px-main">
      <h1 className="text-5xl font-bold">Nasi partnerzy</h1>
      <div className="flex w-full flex-col justify-around md:flex-row">
        {PARTNERS.map((partner, i) => (
          <div key={i} className="rounded border-2 border-secondary p-5">
            {partner.name}
          </div>
        ))}
      </div>
    </Element>
  );
}
