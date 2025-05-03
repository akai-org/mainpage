'use client';

import { Link } from '@/i18n/navigation';
import { Flags } from '@/components/ui/flags';
import { useLocale } from 'use-intl';
import { useIsClient } from '@/hooks/use-is-client';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

function LocaleButton() {
  const isClient = useIsClient();
  const locale = useLocale();
  const otherLocale = locale == 'pl' ? 'en' : 'pl';
  const otherLocaleFull = locale == 'pl' ? 'English' : 'Polish';

  if (!isClient) {
    return (
      <Button variant="none" size="icon" aria-label="Loading toggle locale">
        <Loader2 size={20} className="animate-spin" />
      </Button>
    );
  }

  //  This is an only way to change lang without theme flickering
  //  https://github.com/pacocoursey/next-themes/issues/199
  const changeLocale = () => {
    window.location.href = `/${otherLocale}`;
  };

  return (
    <Button
      variant="none"
      size="icon"
      aria-label={`Change locale to ${otherLocaleFull}`}
      onClick={changeLocale}
    >
      <Flags icon={otherLocale} />
    </Button>
  );
}

export { LocaleButton };
