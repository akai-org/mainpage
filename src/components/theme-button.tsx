'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Loader2, Moon, Sun } from 'lucide-react';

import { DockIcon } from '@/components/ui/dock';

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
        <Loader2 size={20} className="animate-spin" />
      </DockIcon>
    );

  return (
    <DockIcon onClick={changeTheme}>
      {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </DockIcon>
  );
}

export { ThemeButton };
