"use client";
import { Carousel } from "antd";
import Image from "next/image";
import baby from "@/../public/assets/images/babies/baby-1.jpg";
import family from "@/../public/assets/images/babies/baby.jpg";
import SurrogacyAndEggDonationOptions from "@/components/surrogacy/SurrogacyOptions";

const images = [
  {
    src: baby,
    alt: "Description of happy-parents",
  },
  {
    src: family,
    alt: "Description of family-play",
  },
];

export default function Slider() {
  return (
    <>
      <Carousel
        className="custom-carousel bg-[#F1F5F9]"
        arrows
        speed={1500}
        touchMove
        effect="fade"
        waitForAnimate
      >
        {images.map((image, index) => (
          <div
            className="relative w-full h-[37vh] sm:h-[60vh] lg:h-[73vh] overflow-hidden"
            key={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={100}
              className="object-cover"
              sizes="100vw"
              priority
            />
            <SurrogacyAndEggDonationOptions />
          </div>
        ))}
      </Carousel>
    </>
  );
}
