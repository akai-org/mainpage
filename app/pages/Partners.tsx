import { PARTNERS } from '@/app/resources/constants';

export default function Partners() {
  return (
    <div className="flex-center-col px-main gap-20">
      <h1 className="text-5xl font-bold">Nasi partnerzy</h1>
      <div className="flex w-full flex-col justify-around md:flex-row">
        {PARTNERS.map((partner, i) => (
          <div key={i} className="rounded border-2 border-secondary p-5">
            {partner.name}
          </div>
        ))}
      </div>
    </div>
  );
}
