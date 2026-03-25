"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface ProgramCardProps {
  title: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  isReversed: boolean;
  learnMoreLabel: string;
}

export default function ProgramCard({
  title,
  description,
  highlights,
  image,
  isReversed,
  learnMoreLabel,
}: ProgramCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className={isReversed ? "md:order-2" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-heading text-gray-600 text-3xl md:text-4xl font-bold">
            {title}
          </h2>
        </div>

        <p className="font-body text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-sky-500 mt-0.5 shrink-0" />
              <span className="font-body text-gray-600">{h}</span>
            </li>
          ))}
        </ul>

        <button className="bg-sky-500 flex items-center py-3 px-7 text-white cursor-pointer hover:opacity-70 transition-opacity">
          {learnMoreLabel} <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      <div className={isReversed ? "md:order-1" : ""}>
        <Image
          src={image}
          alt={`${title} at FamilyWay International fertility clinic in Georgia`}
          className="w-full object-cover aspect-4/3"
          loading="lazy"
        />
      </div>
    </div>
  );
}
