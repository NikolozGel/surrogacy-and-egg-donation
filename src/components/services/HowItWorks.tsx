import { useTranslations } from "next-intl";
import CustomModal from "@/components/modal/CostumModal";
import DialogDemo from "@/components/modal/Modal";
import ProcessStepCard from "@/components/services/ProcessStepCard";

export default function HowItWorksSection() {
  const t = useTranslations("ServicesPage");

  const steps = t.raw("processSteps") as Array<{
    step: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-20 bg-background flex flex-col items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-600 text-3xl md:text-4xl font-bold mb-4">
            {t("howItWorks.title")}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <ProcessStepCard
              key={i}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>

      <CustomModal
        trigger={
          <button className="px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-[#4287f5] hover:opacity-80 text-white cursor-pointer text-md lg:text-2xl font-semibold transition-all duration-300 mt-14">
            {t("howItWorks.cta")}
          </button>
        }
      >
        <DialogDemo />
      </CustomModal>
    </section>
  );
}
