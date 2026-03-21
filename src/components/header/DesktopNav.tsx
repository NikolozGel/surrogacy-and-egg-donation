import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const DesktopNav = () => {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-1">
        <Link
          href={`/${locale}/`}
          className="px-3 py-2 rounded-md text-md xl:text-2xl text-gray-600 hover:text-[#1E9BD7] font-medium"
        >
          {t("home")}
        </Link>

        <Link
          href={`/${locale}/about`}
          className="px-3 py-2 rounded-md text-md xl:text-2xl text-gray-600 hover:text-[#1E9BD7] font-medium"
        >
          {t("about")}
        </Link>

        <Link
          href={`/${locale}/services`}
          className="px-3 py-2 rounded-md text-md xl:text-2xl text-gray-600 hover:text-[#1E9BD7] font-medium"
        >
          {t("services")}
        </Link>

        <Link
          href={`/${locale}/our-team`}
          className="px-3 py-2 rounded-md text-md xl:text-2xl text-gray-600 hover:text-[#1E9BD7] font-medium"
        >
          {t("ourTeam")}
        </Link>

        <Link
          href={`/${locale}/law`}
          className="px-3 py-2 rounded-md text-md xl:text-2xl text-gray-600 hover:text-[#1E9BD7] font-medium"
        >
          {t("law")}
        </Link>

        <Link
          href={`/${locale}/faq`}
          className="px-3 py-2 rounded-md text-md xl:text-2xl text-gray-600 hover:text-[#1E9BD7] font-medium"
        >
          {t("faq")}
        </Link>

        <Link
          href={`/${locale}/contact`}
          className="px-3 py-2 rounded-md text-md xl:text-2xl text-gray-600 hover:text-[#1E9BD7] font-medium"
        >
          {t("contact")}
        </Link>
      </nav>
    </>
  );
};

export default DesktopNav;
