"use client";

import CustomModal from "@/components/modal/CostumModal";
import DialogDemo from "@/components/modal/Modal";
import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function SurrogacyAndEggDonationOptions() {
  const t = useTranslations("surrogacyOptions");

  return (
    <div
      className={`px-5 md:px-20 absolute bottom-[15%] md:bottom-[38%] md:left-[10%] ${inter.className}`}
    >
      <div>
        <div className="p-3 mb-6 inline-block">
          <p className="text-xl md:text-2xl italic text-white leading-snug">
            {t("quote")}
            <span className="block mt-2 text-base md:text-lg not-italic">
              {t("author")}
            </span>
          </p>
        </div>

        <div>
          <CustomModal
            trigger={
              <button className="px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-[#4287f5] hover:opacity-80 text-white cursor-pointer text-md lg:text-2xl font-semibold transition-all duration-300">
                {t("cta")}
              </button>
            }
          >
            <DialogDemo />
          </CustomModal>
        </div>
      </div>
    </div>
  );
}
