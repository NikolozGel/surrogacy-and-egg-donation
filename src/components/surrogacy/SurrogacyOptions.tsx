"use client";
import CustomModal from "@/components/modal/CostumModal";
import DialogDemo from "@/components/modal/Modal";
import { useTranslations } from "next-intl";

export default function SurrogacyAndEggDonationOptions() {
  const t = useTranslations("surrogacyOptions");

  return (
    <div className="px-5 md:px-20 absolute bottom-[38%] md:left-[10%]">
      <div>
        <div className="p-3 mb-6 inline-block">
          <p className="text-xl md:text-2xl italic text-white">
            {t("quote")}
            <span className="block mt-2 text-base not-italic">
              {t("author")}
            </span>
          </p>
        </div>
        <div>
          <CustomModal
            trigger={
              <button className="p-2 sm:p-3.75 rounded-full bg-[#4287f5] hover:opacity-80 text-white cursor-pointer text-md lg:text-2xl font-semibold">
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
