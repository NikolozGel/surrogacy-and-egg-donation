"use client";

import HowItWorksSection from "@/components/services/HowItWorks";
import ProgramsSection from "@/components/services/ProgramSection";

export default function page() {
  return (
    <section className="px-10">
      <ProgramsSection />
      <HowItWorksSection />
    </section>
  );
}
