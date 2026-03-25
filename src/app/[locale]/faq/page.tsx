"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  sectionId: string;
  sectionTitle: string;
  items: FAQItem[];
}

export default function FAQPage() {
  const t = useTranslations("faq");

  const meta = t.raw("meta") as {
    contactHeading1: string;
    contactHeading2: string;
    contactHeadingEm: string;
    contactSub: string;
    btnEmail: string;
    btnCall: string;
  };

  const sections = t.raw("sections") as FAQSection[];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <main className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        {sections.map((section) => (
          <div key={section.sectionId} className="mb-20 pb-20 last:pb-0">
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-gray-600 leading-tight mb-4">
              {section.sectionTitle}
            </h2>

            <div className="flex flex-col gap-5">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-stone-200 px-8 py-9"
                >
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-gray-700 leading-snug mb-5">
                    {item.question}
                  </h3>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-stone-100" />
                    <div className="w-1 h-1 rounded-full bg-stone-300" />
                  </div>

                  <p className="text-lg md:text-xl text-gray-700 leading-loose font-light">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      <section
        id="contact"
        className="bg-white border-t border-stone-200 px-6 lg:px-16 py-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl font-normal text-gray-600 leading-snug mb-3">
              {meta.contactHeading1}
              <br />
              {meta.contactHeading2}{" "}
              <span className="italic text-[#1E9BD7]">
                {meta.contactHeadingEm}
              </span>
            </h3>

            <p className="text-lg text-gray-700 font-light leading-relaxed max-w-md">
              {meta.contactSub}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <Link
              href="mailto:info@newlifegeorgia.com"
              className="inline-block bg-[#1E9BD7] text-stone-100 text-xs uppercase tracking-widest font-medium px-7 py-4 rounded-sm hover:bg-[#8fb7c9]"
            >
              {meta.btnEmail}
            </Link>

            <Link
              href="tel:+995575757535"
              className="text-xs uppercase tracking-widest text-gray-600 hover:text-stone-700 font-medium border-b border-stone-300 pb-0.5 hover:border-stone-600"
            >
              {meta.btnCall}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
