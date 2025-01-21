import { Card, Heading, Separator, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { DotPattern } from '@/components/DotPattern';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-col gap-2 pt-5 md:w-1/2">
          <Heading size="9" className="pl-5">
            O nas
          </Heading>
          <Text className="px-5">
            Działamy od 2010 roku, kiedy powstaliśmy na Wydziale Informatyki
            Politechniki Poznańskiej
          </Text>
          <Separator className="w-full" />
          <Text className="px-5 pb-5">
            Działamy na terenie całego Poznania. Damy Ci szansę rozwinąć Twoją
            pasję oraz wiedzę. Pokażemy Ci jak rozpocząć karierę bazując na
            doświadczeniu i umiejętnościach - nie na papierze. Serdecznie
            zapraszamy do wzięcia udziału w naszych wydarzeniach - są bezpłatne
            i otwarte dla wszystkich.
          </Text>
        </div>
        <div className="relative min-h-80 w-full md:w-1/2">
          <Image
            src="/members.jpg"
            alt="Founders of AKAI"
            fill
            className="asbolute h-full w-full object-contain md:object-cover"
          />
        </div>
      </div>
      <Separator className="w-full" />
      <div className="flex flex-col">
        <div>
          <Separator className="w-full" />
          <Heading className="p-5 py-10 text-center">
            Naszym członkiem może być
            <span className="text-accent-12"> każdy student</span>, niezależnie
            na jakiej uczelni studiuje.
          </Heading>
          <Separator className="w-full" />
        </div>

        <div className="relative flex flex-col gap-5 p-5">
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
            <Card className="mx-auto w-full max-w-[500px]">
              Nawiązujemy współprace z placówkami naukowymi, przedstawicielami
              firm oraz znanymi specjalistami ze świata IT. Podejmujemy kolejne
              wyzwania i pokazujemy, że wiedza i doświadczenie przekazywane
              przez naszą organizacja stanowi przyszłość projektowania aplikacji
              internetowych.
            </Card>
            <Card className="ml-auto w-full max-w-[500px]">
              Promujemy ideę sieci budowanej przez profesjonalistów, którzy
              znają wartość swojej wiedzy i są zawsze głodni nowych umiejętności
              i doświadczenia. Realizacje w sektorze prywatnym oraz publicznym,
              dają członkom AKAI szansę na budowanie profesjonalizmu i zdobycie
              tak ważnego doświadczenia dla obecnej i przyszłej działalności.
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
