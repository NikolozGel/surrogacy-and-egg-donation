import LanguageSwitcher from "@/components/language-switcher/LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface Ibutton {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
}

const MobileNav = ({ mobileOpen, setMobileOpen }: Ibutton) => {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <>
      {mobileOpen && (
        <nav className="lg:hidden px-4 py-4 gap-3">
          <Link
            href={`/${locale}/`}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-md text-xl text-gray-600 hover:text-[#1E9BD7] font-medium"
          >
            {t("home")}
          </Link>

          <Link
            href={`/${locale}/about`}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-md text-xl text-gray-600 hover:text-[#1E9BD7] font-medium"
          >
            {t("about")}
          </Link>

          <Link
            href={`/${locale}/services`}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-md text-xl text-gray-600 hover:text-[#1E9BD7] font-medium"
          >
            {t("services")}
          </Link>

          <Link
            href={`/${locale}/our-team`}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-md text-xl text-gray-600 hover:text-[#1E9BD7] font-medium"
          >
            {t("ourTeam")}
          </Link>

          <Link
            href={`/${locale}/law`}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-md text-xl text-gray-600 hover:text-[#1E9BD7] font-medium"
          >
            {t("law")}
          </Link>

          <Link
            href={`/${locale}/faq`}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-md text-xl text-gray-600 hover:text-[#1E9BD7] font-medium"
          >
            {t("faq")}
          </Link>

          <Link
            href={`/${locale}/contact`}
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2.5 rounded-md text-xl text-gray-600 hover:text-[#1E9BD7] font-medium"
          >
            {t("contact")}
          </Link>

          <div>
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
