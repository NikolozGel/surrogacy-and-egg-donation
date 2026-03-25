"use client";
import clinic from "@/../public/assets/images/clinic/clinic-1.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function MissionSection() {
  const t = useTranslations("missionSection");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-gray-600 text-3xl md:text-4xl font-bold mb-6">
              {t("title")}
            </h2>

            <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
              {t("description1")}
            </p>

            <p className="font-body text-gray-600 text-lg leading-relaxed mb-4">
              {t("description2")}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-sky-500 pl-4">
                <h3 className="text-gray-700 text-lg font-semibold mb-1">
                  {t("visionTitle")}
                </h3>
                <p className="font-body text-sm text-gray-600">
                  {t("visionText")}
                </p>
              </div>

              <div className="border-l-2 border-sky-500 pl-4">
                <h3 className="text-gray-700 text-lg font-semibold mb-1">
                  {t("valuesTitle")}
                </h3>
                <p className="font-body text-sm text-gray-600">
                  {t("valuesText")}
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src={clinic}
              alt={t("imageAlt")}
              className="shadow-xl w-full object-cover aspect-4/3"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
