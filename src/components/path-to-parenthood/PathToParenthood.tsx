import Image from "next/image";
import parent from "@/../public/assets/pregnant-women/pregnant-women.jpg";
import { useTranslations } from "next-intl";

export default function PathToParenthood() {
  const t = useTranslations("PathToParenthood");

  return (
    <section className="relative overflow-hidden bg-card py-20">
      <div className="flex flex-col items-center mb-10"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <h2 className="max-w-5xl font-serif text-4xl text-gray-600 leading-[1.08] md:text-5xl lg:text-6xl xl:text-[4.5rem] text-balance">
            {t("heading")}
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative aspect-5/6">
              <Image
                src={parent}
                alt={t("imageAlt")}
                fill
                className="object-center object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <p className="text-lg leading-[1.8] text-muted-foreground lg:text-xl">
              {t("body1")}
            </p>
            <p className="text-lg leading-[1.8] text-muted-foreground lg:text-xl">
              {t("body2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
