import { Dock } from '@/components/ui/dock';
import { Separator } from '@/components/ui/separator';
import { LocaleButton } from '@/components/locale-button';
import { ThemeButton } from '@/components/theme-button';

function Footer() {
  return (
    <Dock
      direction="middle"
      className="bg-background pointer-events-auto fixed bottom-2 left-1/2 z-50 h-10 -translate-x-1/2 border"
    >
      <ThemeButton />
      <Separator orientation="vertical" className="h-full" />
      <LocaleButton />
    </Dock>
  );
}

export { Footer };
