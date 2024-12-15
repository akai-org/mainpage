import { Element } from 'react-scroll';
import { APPS } from '@/app/resources/constants';

export default function Projects() {
  return (
    <Element name="projects" className="flex-center-col gap-5">
      <h1 className="text-5xl font-bold">Projects</h1>
      <a href={APPS} target="_blank">
        Nasze aplikacje
      </a>
    </Element>
  );
}
