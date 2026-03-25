import { useTranslations } from "next-intl";
import ivfLabImage from "@/../public/assets/images/negotiation/services-ivf-lab.jpg";
import consultationImage from "@/../public/assets/images/negotiation/negotiation.jpg";
import missionImage from "@/../public/assets/images/negotiation/about-mission.jpg";
import ProgramCard from "@/components/services/ProgramCard";

const programImages = [ivfLabImage, consultationImage, missionImage];

export default function ProgramsSection() {
  const t = useTranslations("ServicesPage");

  const programs = t.raw("programs") as Array<{
    title: string;
    description: string;
    highlights: string[];
  }>;

  const learnMoreLabel = t("learnMore");

  return (
    <>
      {programs.map((program, i) => (
        <section
          key={program.title}
          className={`py-20 ${i % 2 === 0 ? "bg-background" : "bg-warm-light"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <ProgramCard
              title={program.title}
              description={program.description}
              highlights={program.highlights}
              image={programImages[i]}
              isReversed={i % 2 !== 0}
              learnMoreLabel={learnMoreLabel}
            />
          </div>
        </section>
      ))}
    </>
  );
}
