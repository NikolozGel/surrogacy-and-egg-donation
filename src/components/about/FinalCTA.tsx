"use client";
import CustomModal from "@/components/modal/CostumModal";
import DialogDemo from "@/components/modal/Modal";
import { useTranslations } from "next-intl";

export default function FinalCTA() {
  const t = useTranslations("ctaSection");

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-gray-600 text-3xl md:text-4xl font-bold mb-6">
            {t("title")}
          </h2>

          <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
            {t("description")}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <CustomModal
              trigger={
                <button className="py-4 text-xl px-9 cursor-pointer font-semibold rounded-full text-white bg-[#4287f5] hover:opacity-70">
                  {t("button")}
                </button>
              }
            >
              <DialogDemo />
            </CustomModal>
          </div>
        </div>
      </div>
    </section>
  );
}
