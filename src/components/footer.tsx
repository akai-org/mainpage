import { ThemeButton } from '@/components/theme-button';
import { LocaleButton } from '@/components/locale-button';

function Footer() {
  return (
    <div className="bg-background fixed right-2 bottom-2 z-50 hidden rounded-lg border lg:flex">
      <ThemeButton />
      <LocaleButton />
    </div>
  );
}

export { Footer };
