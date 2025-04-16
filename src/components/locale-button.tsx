import { getLocale } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import { DockIcon } from '@/components/ui/dock';
import { Flags } from '@/components/ui/flags';

async function LocaleButton() {
  const locale = await getLocale();
  const otherLocale = locale == 'pl' ? 'en' : 'pl';

  return (
    <Link href="/" locale={otherLocale}>
      <DockIcon>
        <Flags icon={otherLocale} />
      </DockIcon>
    </Link>
  );
}

export { LocaleButton };
