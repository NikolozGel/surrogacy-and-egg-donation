import ContactCTA from "@/components/contact-CTA/ContactCta";
import PathToParenthood from "@/components/path-to-parenthood/PathToParenthood";
import ProgramSections from "@/components/sections/ProgramSections";
import Slider from "@/components/slider/Slider";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: "homePage",
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${params.locale}`;

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    openGraph: {
      title: t("seoTitle"),
      description: t("seoDescription"),
      url,
      siteName: "IVFertilityGeorgia",
      images: [
        {
          url: `${baseUrl}/og/home.jpg`,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale:
        params.locale === "ka"
          ? "ka_GE"
          : params.locale === "ru"
            ? "ru_RU"
            : params.locale === "zh"
              ? "zh_CN"
              : "en_US",
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Slider />
      <PathToParenthood />
      <ProgramSections />
      <ContactCTA />
    </>
  );
}
