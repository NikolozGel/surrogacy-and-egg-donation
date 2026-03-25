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

const legalTopics = [
  {
    question: "Who is eligible for surrogacy in Georgia?",
    answer:
      "Under Georgian law, surrogacy is available to heterosexual married couples who are unable to carry a pregnancy due to medical reasons. The intended mother must have a documented medical indication, confirmed by a licensed physician, that pregnancy would pose a significant health risk or is not medically possible. Both intended parents must be legally married, and this status must be verifiable through official documentation. Georgian law does not currently extend surrogacy to single individuals or same-sex couples.",
  },
  {
    question: "How is parental rights established after surrogacy?",
    answer:
      "Georgia's Civil Code explicitly states that in gestational surrogacy, the intended parents are recognized as the legal parents from the moment of birth. The surrogate mother has no parental rights or obligations toward the child. The birth certificate is issued directly in the names of the intended parents, without any adoption process required. This legal clarity is one of the primary reasons Georgia is considered a favorable jurisdiction for international surrogacy.",
  },
  {
    question: "What legal documentation is required?",
    answer:
      "A legally binding surrogacy agreement must be signed before the embryo transfer procedure. This contract outlines the rights and obligations of all parties, including financial terms, medical responsibilities, and post-delivery procedures. Additionally, intended parents must provide notarized copies of their marriage certificate, passport identification, and a medical report confirming the need for surrogacy. Our legal team prepares all contracts and ensures every document meets Georgian regulatory standards.",
  },
  {
    question: "What are the legal protections for surrogates?",
    answer:
      "Georgian law protects surrogates by requiring comprehensive health insurance, fair compensation, and the right to independent legal counsel. Surrogacy contracts must include provisions for medical care during and after pregnancy. At FamilyWay, we go further by offering psychological support, regular wellness checks, and a dedicated coordinator who maintains ongoing communication with the surrogate throughout the process.",
  },
  {
    question: "How does IVF-related law differ from surrogacy law?",
    answer:
      "IVF procedures in Georgia are regulated under the Law on Health Care, which permits the use of assisted reproductive technologies for all individuals, including single women. Egg donation and sperm donation are legally permitted, and donors have no parental rights. Embryo cryopreservation is also regulated, with clear guidelines on storage duration and consent. Unlike surrogacy, IVF treatment does not require the intended patient to be married.",
  },
  {
    question: "What happens if intended parents are from another country?",
    answer:
      "International intended parents benefit from Georgia's straightforward legal process, but must also consider the laws of their home country regarding citizenship and entry of the child. Our legal team provides guidance on embassy requirements, travel documents, and any additional steps needed to ensure the child's legal status is recognized in the parents' country of residence. We recommend that international clients consult with a family law attorney in their home jurisdiction early in the process.",
  },
];

const keyPoints = [
  {
    icon: Scale,
    title: "Legally Recognized",
    text: "Surrogacy is fully regulated under Articles 143 and 144 of Georgia's Civil Code, providing clear legal standing for intended parents.",
  },
  {
    icon: FileCheck,
    title: "Birth Certificate Rights",
    text: "Intended parents are named directly on the birth certificate — no adoption or court order required.",
  },
  {
    icon: Shield,
    title: "Surrogate Protections",
    text: "Georgian law mandates health coverage, fair compensation, and independent legal representation for surrogates.",
  },
  {
    icon: Globe,
    title: "International Accessibility",
    text: "Georgia's legislation specifically accommodates international intended parents, making it one of the most accessible surrogacy jurisdictions globally.",
  },
];

const documentChecklist = [
  "Notarized copy of marriage certificate",
  "Valid passport copies for both intended parents",
  "Medical report confirming need for surrogacy",
  "Signed surrogacy agreement (prepared by our legal team)",
  "Power of attorney (for clients not present at delivery)",
  "Embassy-specific documentation for child's travel documents",
  "Notarized consent forms for IVF procedures",
  "Insurance documentation for surrogate",
];

export default function Law() {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPoints.map((point, i) => (
              <div
                key={i}
                className="bg-[#faf9f9] rounded-xl p-6 border border-gray-300"
              >
                <point.icon className="h-8 w-8 text-[#1E9BD7] mb-4 " />
                <h3 className="font-heading text-gray-700 text-lg font-semibold mb-2">
                  {point.title}
                </h3>
                <p className="font-body text-md text-gray-600 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <div>
                <h2 className="text-gray-600 text-3xl md:text-4xl font-bold mb-8">
                  Understanding the Legal Process
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
                  Document Checklist
                </h3>
                <ul className="space-y-3">
                  {documentChecklist.map((doc) => (
                    <li key={doc} className="flex items-start gap-3">
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
                      <strong className="text-foreground">Important:</strong>{" "}
                      Legal requirements may vary depending on your country of
                      residence. We strongly recommend scheduling a legal
                      consultation before beginning the process.
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
                alt="Legal documents and contracts for surrogacy agreements in Georgia"
                className="w-full object-cover aspect-16/10"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl text-gray-600 font-bold mb-6">
                Our Legal Team Works for You
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                At FamilyWay International, you never have to navigate the legal
                process alone. Our in-house legal team has handled surrogacy and
                IVF agreements for families from over 40 countries. We prepare
                every contract, coordinate with local authorities, and liaise
                with your home country's embassy to ensure a smooth transition.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                We believe legal clarity is the foundation of trust. That is why
                we explain every clause, answer every question, and never rush
                the process. Your peace of mind matters as much as the medical
                outcome.
              </p>
              <button className="font-bold cursor-pointer">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
