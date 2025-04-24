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
  return (
    <Button
      variant="none"
      size="icon"
      aria-label={`Change locale to ${otherLocaleFull}`}
      asChild
    >
      <Link href="/" locale={otherLocale}>
        <Flags icon={otherLocale} />
      </Link>
    </Button>
  );
}

export { LocaleButton };
