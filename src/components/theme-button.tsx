'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Loader2, Moon, Sun } from 'lucide-react';

import { DockIcon } from '@/components/ui/dock';
import { Button } from '@/components/ui/button';

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const changeTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  if (!isClient)
    return (
      <DockIcon>
        <Button
          onClick={changeTheme}
          variant="none"
          size="icon"
          aria-label="Loading toggle theme"
        >
          <Loader2 size={20} className="animate-spin" />
        </Button>
      </DockIcon>
    );

  return (
    <DockIcon>
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
    </DockIcon>
  );
}

export { ThemeButton };
