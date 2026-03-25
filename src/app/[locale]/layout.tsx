import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/header/header";
import "../[locale]/globals.css";
import { Titillium_Web } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import ScrollToTopButton from "@/components/scrollUpButton";
import type { Metadata } from "next";
import Script from "next/script";
import { QueryClient } from "@tanstack/react-query";
import ReactQueryProvider from "@/components/reactqueryprovider";
import { ReactNode } from "react";
import Footer from "@/components/footer/Footer";

export const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: { default: "IVFertilityGeorgia", template: "%s | IVFertilityGeorgia" },
  description: "ivfertility | in vitro fertilization center in georgia",
  icons: {
    icon: "/assets/logo/browser-tab-logo.png",
  },
  openGraph: {
    title: "helping families grow",
    description: "infertility treatment",
    url: "https://ivfertilitygeorgia.com",
    siteName: "IVFertilityGeorgia",
    images: [
      {
        url: "https://ivfertilitygeorgia.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Happy family after surrogacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ivfertilitygeorgia.com/en" },
};

const dmSans = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal"],
});

type Params = Promise<{ locale: string }>;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale}>
      <body className={dmSans.className}>
        {/* GTM main script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17497597055"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17497597055');
          `}
        </Script>

        <NextIntlClientProvider>
          <Header />
          <ReactQueryProvider>
            <main>{children}</main>
          </ReactQueryProvider>

          <Link
            href="https://wa.me/+995575757535"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="fixed bottom-5 p-2 right-20 z-50 rounded-full bg-[#00AE8A] hover:bg-green-400 transition-all duration-300">
              <FaWhatsapp className="h-13 w-13 lg:w-18 lg:h-18" color="white" />
            </div>
          </Link>
          <Footer />
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
