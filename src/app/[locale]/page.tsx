import { Home } from '@/components/sections/home';
import { About } from '@/components/sections/about';
import { Work } from '@/components/sections/work';
import { Join } from '@/components/sections/join';
import { Projects } from '@/components/sections/projects';
import { Partners } from '@/components/sections/partners';
import { Contact } from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-background relative mx-auto w-full max-w-4xl space-y-10 rounded-xl border shadow-xl lg:my-5">
        <Home />
        <Separator decorative />
        <About />
        <Separator decorative />
        <Work />
        <Separator decorative />
        <Join />
        <Separator decorative />
        <Projects />
        <Separator decorative />
        <Partners />
        <Separator decorative />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
