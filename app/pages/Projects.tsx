import { APPS } from '../resources/constants';

export default function Projects() {
  return (
    <div className="flex-center-col gap-5">
      <h1 className="text-5xl font-bold">Nasze projekty</h1>
      <a href={APPS} target="_blank">
        Nasze aplikacje
      </a>
    </div>
  );
}
