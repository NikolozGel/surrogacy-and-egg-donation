import type { Metadata } from "next";
import MissionSection from "@/components/about/MissionSection";
import StatsSection from "@/components/about/StatsSection";

export const metadata: Metadata = {
  title: "About Us — Our Mission, Team & Fertility Expertise",
  description:
    "Learn about IVFertilityGeorgia — a trusted fertility clinic in Tbilisi helping families worldwide through IVF, surrogacy, and egg donation. Compassionate care, proven results, transparent process.",

  keywords: [
    "about IVFertilityGeorgia",
    "fertility clinic Georgia team",
    "IVF specialists Tbilisi",
    "surrogacy clinic about us",
    "fertility experts Georgia",
    "IVF clinic mission",
    "reproductive medicine Georgia",
  ],

  alternates: {
    canonical: "https://ivfertilitygeorgia.com/en/about",
    languages: {
      en: "https://ivfertilitygeorgia.com/en/about",
    },
  },

  openGraph: {
    title: "About IVFertilityGeorgia | Our Mission & Fertility Experts",
    description:
      "Meet the team behind IVFertilityGeorgia. We combine medical excellence with heartfelt support to help intended parents from the USA, UK, Europe, and Australia build their families.",
    url: "https://ivfertilitygeorgia.com/en/about",
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
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About IVFertilityGeorgia",
  url: "https://ivfertilitygeorgia.com/en/about",
  description:
    "IVFertilityGeorgia is a leading fertility clinic in Tbilisi, Georgia, offering IVF, surrogacy, and egg donation services to international patients with compassionate, expert care.",
  isPartOf: {
    "@type": "MedicalOrganization",
    name: "IVFertilityGeorgia",
    url: "https://ivfertilitygeorgia.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GE",
      addressLocality: "Tbilisi",
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <section className="px-10">
        <MissionSection />
        <StatsSection />
      </section>
    </>
  );
}
