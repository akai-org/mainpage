import { HiArrowSmUp, HiMoon, HiSun } from 'react-icons/hi';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export default function Footer() {
  const { resolvedTheme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fade-up-gsap fixed bottom-0 right-0 flex gap-2 p-2">
      <IconButton
        variant="outline"
        highContrast
        onClick={() => {
          scroll({
            top: 0,
            behavior: 'smooth',
          });
        }}
        className="!cursor-pointer"
      >
        <HiArrowSmUp size="24" />
      </IconButton>

      <IconButton
        variant="outline"
        highContrast
        onClick={changeTheme}
        className="!cursor-pointer"
      >
        {resolvedTheme === 'dark' ? <HiSun size="24" /> : <HiMoon size="24" />}
      </IconButton>
    </div>
  );
}
