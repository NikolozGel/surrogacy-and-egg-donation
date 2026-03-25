import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Scale,
  FileCheck,
  Shield,
  Globe,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import lawImage from "@/../public/assets/images/law-documents.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const keyPointIcons = [Scale, FileCheck, Shield, Globe];

export default function Law() {
  const t = useTranslations("law");

  const keyPoints = t.raw("keyPoints") as { title: string; text: string }[];
  const legalTopics = t.raw("legalProcess.topics") as {
    question: string;
    answer: string;
  }[];
  const checklistItems = t.raw("checklist.items") as string[];

  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, i) => {
              const Icon = keyPointIcons[i];
              return (
                <div
                  key={i}
                  className="bg-[#faf9f9] rounded-xl p-6 border border-gray-300"
                >
                  <Icon className="h-8 w-8 text-[#1E9BD7] mb-4" />
                  <h3 className="font-heading text-gray-700 text-lg font-semibold mb-2">
                    {point.title}
                  </h3>
                  <p className="font-body text-md text-gray-600 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <div>
                <h2 className="text-gray-600 text-3xl md:text-4xl font-bold mb-8">
                  {t("legalProcess.heading")}
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {legalTopics.map((topic, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-[#faf9f9] rounded-lg border border-gray-300 px-6"
                  >
                    <AccordionTrigger className="font-heading text-base text-gray-700 font-semibold text-left py-5 hover:no-underline">
                      {topic.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                      {topic.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-[#faf9f9] rounded-2xl p-8 shadow-md border border-gray-300 sticky top-24">
                <h3 className="font-heading text-xl text-gray-700 font-semibold mb-6 flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-gray-700" />
                  {t("checklist.heading")}
                </h3>
                <ul className="space-y-3">
                  {checklistItems.map((doc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-gray-700 mt-1" />
                      <span className="font-body text-md text-gray-700">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-[#faf9f9] rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-warm mt-0.5 shrink-0" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">
                        {t("checklist.warning.label")}
                      </strong>{" "}
                      {t("checklist.warning.text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={lawImage}
                alt={t("legalTeam.imageAlt")}
                className="w-full object-cover aspect-16/10"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-gray-600 font-bold mb-6">
                {t("legalTeam.heading")}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                {t("legalTeam.paragraph1")}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {t("legalTeam.paragraph2")}
              </p>
              <button className="font-bold cursor-pointer">
                {t("legalTeam.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
