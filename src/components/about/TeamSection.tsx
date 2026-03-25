"use client";
import doctorLali from "@/../public/assets/doctors/lali-manager.jpg";
import doctorZizi from "@/../public/assets/doctors/zizi.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TeamSection() {
  const t = useTranslations("teamSection");

  const team = [
    {
      id: 1,
      name: t("members.1.name"),
      role: t("members.1.role"),
      image: doctorLali,
    },
    {
      id: 2,
      name: t("members.2.name"),
      role: t("members.2.role"),
      image: doctorZizi,
    },
    {
      id: 3,
      name: t("members.3.name"),
      role: t("members.3.role"),
      image: doctorLali,
    },
    {
      id: 4,
      name: t("members.4.name"),
      role: t("members.4.role"),
      image: doctorZizi,
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-gray-600 text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative overflow-hidden mb-5 aspect-3/4">
                <Image
                  src={member.image}
                  alt={t("imageAlt", {
                    name: member.name,
                    role: member.role,
                  })}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-gray-600 text-2xl font-semibold">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium mb-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
