import { PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { mobileBar } from '@/content/site';
import { ui } from '@/content/ui';
import { COMPANY } from '@/lib/company';

/** Липкая нижняя панель на мобильном и планшете. Под неё зарезервирован padding-bottom у body. */
export function MobileBar() {
  return (
    <nav
      aria-label={ui.menu.quick}
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 bg-white pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <a
        href={COMPANY.phone.href}
        className="flex h-(--mobile-bar-h) items-center justify-center gap-2.5 bg-ink text-16 font-semibold text-white"
      >
        <PhoneIcon /> {mobileBar.call}
      </a>
      <a
        href={COMPANY.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-(--mobile-bar-h) items-center justify-center gap-2.5 bg-lime text-16 font-semibold text-ink"
      >
        <WhatsAppIcon /> {mobileBar.whatsapp}
      </a>
    </nav>
  );
}
