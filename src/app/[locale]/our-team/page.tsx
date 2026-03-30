import Image, { StaticImageData } from "next/image";

import doctorZizi from "@/../public/assets/images/doctors/zizi.jpg";
import sopoCkheidze from "@/../public/assets/images/doctors/sopo-chkeidze-Pediatrician-Neeonatologist.jpg";
import roinRekvava from "@/../public/assets/images/doctors/roin-rekvava-urologist.jpg";
import tiniSolomonidze from "@/../public/assets/images/doctors/tini-solomonidze-mean-Gynecologist.jpg";
import nanaShubitidze from "@/../public/assets/images/doctors/nana-shubitidze-Gynecologist-Reproductologist.jpg";
import lelaUridia from "@/../public/assets/images/doctors/lela-uridia-Gynecologist.jpg";
import ninoKhabeishvili from "@/../public/assets/images/doctors/nino-khabeishvili-Gynecologist.jpg";
import mananaSepashvili from "@/../public/assets/images/doctors/manana-sepashvili-Radiologist.jpg";
import CustomModal from "@/components/modal/CostumModal";
import DialogDemo from "@/components/modal/Modal";
import { useTranslations } from "next-intl";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Zizi Gabelashvili",
    role: "Gynecologist & Fertility Specialist",
    image: doctorZizi,
  },
  {
    name: "Dr. Sopo Ckheidze",
    role: "Pediatrician & Neonatologist",
    image: sopoCkheidze,
  },
  {
    name: "Dr. Giorgi Aghniashvili",
    role: "Urologist",
    image: roinRekvava,
  },
  {
    name: "Dr. Tini Solomonidze",
    role: "Obstetrician Gynecologist",
    image: tiniSolomonidze,
  },
  {
    name: "Dr. Nana Shubitidze",
    role: "Gynecologist & Reproductologist",
    image: nanaShubitidze,
  },
  {
    name: "Dr. Lela Uridia",
    role: "Gynecologist",
    image: lelaUridia,
  },
  {
    name: "Dr. Nino Khabeishvili",
    role: "Gynecologist",
    image: ninoKhabeishvili,
  },
  {
    name: "Dr. Manana Sepashvili",
    role: "Radiologist",
    image: mananaSepashvili,
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden px-10">
      <div className="aspect-3/4 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-600">{member.name}</h3>
        <p className="text-md text-gray-500">{member.role}</p>
      </div>
    </div>
  );
}

export default function Team() {
  const t = useTranslations("ContactCta");
  return (
    <section className="bg-background pb-20 flex flex-col items-center">
      <p className="py-20 text-4xl text-center font-semibold text-gray-600">
        FamilyWay International Team
      </p>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-20">
        <p className="text-gray-600 md:text-2xl">
          Book your online meeting fill out the form, and we’ll reach out
          quickly.
        </p>
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
    </section>
  );
}
