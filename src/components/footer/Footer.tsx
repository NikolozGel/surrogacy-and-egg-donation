"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import logo from "@/../public/assets/images/logo/footer-logo.png";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const programs = [
    { label: t("programs.about"), href: "/about" },
    { label: t("programs.services"), href: "/services" },
    { label: t("programs.team"), href: "/our-team" },
    { label: t("programs.law"), href: "/law" },
    { label: t("programs.faq"), href: "/faq" },
  ];

  const resources = [
    { label: t("resources.faq"), href: "/faq" },
    { label: t("resources.pricing"), href: "/pricing" },
    { label: t("resources.georgia"), href: "/georgia" },
    { label: t("resources.guide"), href: "/guide" },
    { label: t("resources.privacy"), href: "/privacy" },
  ];

  return (
    <footer className="bg-[#172c47]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="home">
              <Image src={logo} alt="logo" width={270} height={80} />
            </Link>

            <p className="mt-8 max-w-xs text-xl leading-[1.8] text-white/60">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="mailto:nikolozgelenidze9@gmail.com"
                className="flex items-center gap-3 text-lg text-white/70 hover:text-white transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-white/70" />
                {t("contact.email")}
              </Link>

              <Link
                href="tel:+995575757535"
                className="flex items-center gap-3 text-lg text-white/70 hover:text-white transition-all duration-300"
              >
                <Phone className="h-4 w-4 text-white/70" />
                {t("contact.phone")}
              </Link>

              <div className="flex items-center gap-3 text-lg text-white/60">
                <MapPin className="h-4 w-4 text-white/60" />
                {t("contact.location")}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-8">
            <nav>
              <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
                {t("programs.title")}
              </h3>

              <ul className="mt-6 flex flex-col gap-4">
                {programs.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={`${locale}/${item.href}`}
                      className="text-lg text-white/60 hover:text-white transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
                {t("resources.title")}
              </h3>

              <ul className="mt-6 flex flex-col gap-4">
                {resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={`/${locale}/${item.href}`}
                      className="text-lg text-white/60 hover:text-white transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-lg text-white/60">{t("copyright")}</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-lg text-white/60 hover:text-white transition-all duration-300"
            >
              {t("bottom.privacy")}
            </Link>

            <Link
              href="/terms"
              className="text-lg text-white/60 hover:text-white transition-all duration-300"
            >
              {t("bottom.terms")}
            </Link>

            <Link
              href="/cookies"
              className="text-lg text-white/60 hover:text-white transition-all duration-300"
            >
              {t("bottom.cookies")}
            </Link>
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-primary" />
    </footer>
  );
}
