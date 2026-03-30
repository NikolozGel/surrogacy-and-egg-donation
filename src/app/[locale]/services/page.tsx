import type { Metadata } from "next";
import HowItWorksSection from "@/components/services/HowItWorks";
import ProgramsSection from "@/components/services/ProgramSection";

export const metadata: Metadata = {
  title:
    "IVF, Surrogacy & Egg Donation Services — Fertility Programs in Georgia",
  description:
    "Explore our full range of fertility services in Georgia — IVF treatment, surrogacy programs, egg donation, and all-inclusive fertility packages. Affordable, transparent, and designed for international patients.",

  keywords: [
    "IVF services Georgia",
    "surrogacy program Georgia",
    "egg donation program Georgia",
    "fertility packages Georgia",
    "IVF treatment abroad",
    "affordable surrogacy program",
    "donor egg IVF Georgia",
    "all-inclusive IVF package",
    "fertility treatment international patients",
    "how IVF works",
  ],

  alternates: {
    canonical: "https://ivfertilitygeorgia.com/en/services",
    languages: {
      en: "https://ivfertilitygeorgia.com/en/services",
    },
  },

  openGraph: {
    title: "IVF, Surrogacy & Egg Donation Services | IVFertilityGeorgia",
    description:
      "From IVF and egg donation to full surrogacy programs — discover fertility services built for international families. Clear pricing, expert care, real results.",
    url: "https://ivfertilitygeorgia.com/en/services",
    siteName: "IVFertilityGeorgia",
    images: [
      {
        url: "https://ivfertilitygeorgia.com/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "IVFertilityGeorgia fertility services — IVF, surrogacy and egg donation",
      },
    ],
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

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fertility Services at IVFertilityGeorgia",
  url: "https://ivfertilitygeorgia.com/en/services",
  description:
    "IVFertilityGeorgia offers a comprehensive range of fertility services including IVF, surrogacy, egg donation, and all-inclusive fertility packages for international patients in Georgia.",
  provider: {
    "@type": "MedicalOrganization",
    name: "IVFertilityGeorgia",
    url: "https://ivfertilitygeorgia.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GE",
      addressLocality: "Tbilisi",
    },
  },
  areaServed: ["US", "GB", "AU", "DE", "FR", "NL", "SE", "NO"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fertility Treatment Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "IVF Treatment",
          description:
            "In vitro fertilization with personalized protocols, monitoring, and embryo transfer in a state-of-the-art clinic in Tbilisi, Georgia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Egg Donation",
          description:
            "Anonymous and open egg donation programs with a curated database of thoroughly screened donors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Surrogacy Program",
          description:
            "Full-service gestational surrogacy program including legal support, surrogate matching, and medical coordination in Georgia.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "All-Inclusive Fertility Packages",
          description:
            "Bundled fertility packages covering consultations, medications, procedures, and accommodation support for international patients.",
        },
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <section className="px-10">
        <ProgramsSection />
        <HowItWorksSection />
      </section>
    </>
  );
}
