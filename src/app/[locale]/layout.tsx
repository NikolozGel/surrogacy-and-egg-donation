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
  metadataBase: new URL("https://ivfertilitygeorgia.com"),

  title: {
    default:
      "IVF in Georgia | Affordable IVF, Surrogacy & Egg Donation — IVFertilityGeorgia",
    template: "%s | IVFertilityGeorgia",
  },

  description:
    "Start your journey to parenthood with IVFertilityGeorgia — a leading fertility clinic offering affordable IVF, surrogacy, and egg donation in Georgia. World-class care, transparent pricing, and proven results for families worldwide.",

  keywords: [
    "IVF in Georgia",
    "affordable IVF abroad",
    "surrogacy Georgia",
    "egg donation Georgia",
    "fertility clinic Georgia",
    "IVF packages Georgia",
    "international surrogacy",
    "donor egg IVF",
    "IVF cost Georgia",
    "fertility treatment abroad",
    "surrogacy agency Georgia",
    "IVF success rates Georgia",
    "IVF for foreigners Georgia",
    "cheap IVF Europe",
    "IVFertilityGeorgia",
  ],

  authors: [
    { name: "IVFertilityGeorgia", url: "https://ivfertilitygeorgia.com" },
  ],

  category: "Healthcare / Fertility Treatment",

  openGraph: {
    title:
      "IVF in Georgia | Affordable Surrogacy & Egg Donation — IVFertilityGeorgia",
    description:
      "World-class IVF, surrogacy, and egg donation services in Georgia. Transparent pricing, experienced specialists, and compassionate care for intended parents from the USA, UK, Europe, and Australia.",
    url: "https://ivfertilitygeorgia.com",
    siteName: "IVFertilityGeorgia",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://ivfertilitygeorgia.com/en",
    languages: {
      en: "https://ivfertilitygeorgia.com/en",
      // Add more as you expand:
      ru: "https://ivfertilitygeorgia.com/ru",
      // "de": "https://ivfertilitygeorgia.com/de",
      "x-default": "https://ivfertilitygeorgia.com/en",
    },
  },

  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_SITE_VERIFICATION_TOKEN",
    // yandex: "REPLACE_IF_NEEDED",
    // bing: "REPLACE_IF_NEEDED",
  },
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

        <Script
          id="json-ld-medical-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "IVFertilityGeorgia",
              url: "https://ivfertilitygeorgia.com",
              description:
                "IVFertilityGeorgia is a leading fertility clinic in Georgia offering IVF, surrogacy, egg donation, and comprehensive fertility packages to international patients.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GE",
                addressLocality: "Tbilisi",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+995575757535",
                contactType: "customer support",
                availableLanguage: ["English"],
              },
              sameAs: [
                // Add your social media profile URLs here:
                // "https://www.facebook.com/ivfertilitygeorgia",
                // "https://www.instagram.com/ivfertilitygeorgia",
              ],
              medicalSpecialty: [
                "In Vitro Fertilization",
                "Reproductive Medicine",
                "Surrogacy",
                "Egg Donation",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fertility Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "IVF Treatment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Egg Donation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Surrogacy Program",
                    },
                  },
                ],
              },
            }),
          }}
        />

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
