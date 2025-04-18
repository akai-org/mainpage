import { Home } from '@/components/sections/home';
import { About } from '@/components/sections/about';
import { Work } from '@/components/sections/work';
import { Join } from '@/components/sections/join';
import { Projects } from '@/components/sections/projects';
import { Partners } from '@/components/sections/partners';
import { Contact } from '@/components/sections/contact';

export default function Page() {
  return (
    <main className="bg-background mx-auto mb-14 w-full max-w-3xl space-y-10 rounded-xl border shadow-xl xl:mt-5">
      <Home />
      <About />
      <Work />
      <Join />
      <Projects />
      <Partners />
      <Contact />
    </main>
  );
}
