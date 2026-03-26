import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clinicInterior from "@/../public/assets/images/ivf/ivf-2.jpg";
import motherBaby from "@/../public/assets/images/mother/mother.jpg";
import embryoLab from "@/../public/assets/images/egg-donation/microscope.jpg";
import { useLocale } from "next-intl";

const services = [
  {
    title: "IVF Treatment",
    description:
      "Advanced in vitro fertilization with experienced specialists and high success rates.",
    link: "/services",
    image: clinicInterior,
  },
  {
    title: "Surrogacy Program",
    description:
      "Legal, safe, and fully managed gestational surrogacy programs in Georgia.",
    link: "/services",
    image: motherBaby,
  },
  {
    title: "Egg Donation",
    description:
      "Carefully screened donors matched to your preferences with comprehensive support.",
    link: "/services",
    image: embryoLab,
  },
];

const ProgramSections = () => {
  const locale = useLocale();
  return (
    <section className="w-full pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <p className="max-w-5xl font-serif text-4xl text-gray-600 leading-[1.08] md:text-5xl lg:text-6xl xl:text-[4.5rem] text-balance">
            Our Programs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <Link
              key={s.title}
              href={`${locale}/${s.link}`}
              className="group h-full"
            >
              <div className="bg-[#faf9f9] h-full overflow-hidden border border-[#d2c2c2] flex flex-col">
                <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6 flex flex-col grow">
                  <h3 className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">
                    {s.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 grow">
                    {s.description}
                  </p>

                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSections;
