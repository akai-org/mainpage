import { Card, Heading, Strong, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { DotPattern } from '@/components/DotPattern';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="border-main flex w-full flex-col gap-2 border-y pt-5 md:w-1/2">
          <Heading size="9" className="px-2">
            O nas
          </Heading>
          <Text className="px-2">
            Działamy na terenie całego Poznania od 2010 roku, kiedy powstaliśmy
            na Wydziale Informatyki Politechniki Poznańskiej
          </Text>
          <Text className="px-2 pb-5">
            Jesteśmy kołem naukowym które aktywnie działa w środowisku IT
          </Text>
          <div className="border-main md:flex-center hidden w-full flex-grow overflow-hidden border-t bg-accent-2" />
        </div>
        <div className="border-main relative min-h-80 w-full border-y md:w-1/2 md:border">
          <Image
            src="/members.jpg"
            alt="Founders of AKAI"
            fill
            className="asbolute h-fit w-full object-contain md:object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-main border-b">
          <Heading className="p-2 py-10 text-center">
            Naszym członkiem może być
            <span className="text-accent-12"> każdy student</span>, niezależnie
            na jakiej uczelni studiuje.
          </Heading>
        </div>

        <div className="border-main p-container relative flex flex-col gap-5 border-b">
          <DotPattern
            className={cn(
              'p-1',
              '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent,white)]',
            )}
          />
          <Heading className="text-center" size="8">
            Co robimy?
          </Heading>
          <div className="flex flex-col gap-5 sm:gap-2">
            <Card className="w-full sm:max-w-[400px]">
              Skupiamy młodych i ambitnych ludzi, którzy jako cel stawiają sobie
              rozwój i osiągnięcie sukcesu w dziedzinie aplikacji internetowych.
            </Card>
            <Card className="mx-auto w-full sm:max-w-[500px]">
              Nawiązujemy współprace z placówkami naukowymi, przedstawicielami
              firm oraz znanymi specjalistami ze świata IT. Podejmujemy kolejne
              wyzwania i pokazujemy, że wiedza i doświadczenie przekazywane
              przez naszą organizacja stanowi przyszłość projektowania aplikacji
              internetowych.
            </Card>
            <Card className="ml-auto w-full sm:max-w-[500px]">
              Promujemy ideę sieci budowanej przez profesjonalistów, którzy
              znają wartość swojej wiedzy i są zawsze głodni nowych umiejętności
              i doświadczenia. Realizacje w sektorze prywatnym oraz publicznym,
              dają członkom <Strong>AKAI</Strong> szansę na budowanie
              profesjonalizmu i zdobycie tak ważnego doświadczenia dla obecnej i
              przyszłej działalności.
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
