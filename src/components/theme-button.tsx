'use client';
import { useTheme } from 'next-themes';
import { Loader2, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsClient } from '@/hooks/use-is-client';

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  const changeTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  if (!isClient)
    return (
      <Button variant="none" size="icon" aria-label="Loading toggle theme">
        <Loader2 size={20} className="animate-spin" />
      </Button>
    );

  return (
    <Button
      onClick={changeTheme}
      variant="none"
      size="icon"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <Sun aria-label="Light mode icon" size={20} />
      ) : (
        <Moon aria-label="Dark mode icon" size={20} />
      )}
    </Button>
  );
}

export { ThemeButton };
