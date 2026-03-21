import { useTranslations } from "next-intl";
import CustomModal from "@/components/modal/CostumModal";
import DialogDemo from "@/components/modal/Modal";

export default function ContactCTA() {
  const t = useTranslations("ContactCta");

  return (
    <section className="py-24 bg-background md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-172">
          <h2 className="font-serif text-4xl font-medium leading-tight text-gray-600 md:text-5xl lg:text-6xl text-left">
            {t("heading")}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl text-justify">
            {t("paragraph1")}
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl text-justify">
            {t("paragraph2")}
          </p>

          <div className="mt-12 text-center">
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
