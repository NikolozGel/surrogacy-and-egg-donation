"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/about-hero.jpg";
// import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* <Image
          src={heroImage}
          alt="Happy couple welcoming their newborn baby at FamilyWay International fertility clinic"
          className="w-full h-full object-cover"
          loading="eager"
        /> */}
        <div className="absolute inset-0 bg-linear-to-r from-heading/80 via-heading/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary! leading-tight mb-6">
            Your Journey to{" "}
            <span className="text-primary-foreground italic">Parenthood</span>{" "}
            Begins Here
          </h1>
          <p className="font-body text-lg md:text-xl text-secondary/85 leading-relaxed mb-8 max-w-lg">
            At FamilyWay International, we combine world-class fertility
            expertise with heartfelt compassion to turn your dream of becoming a
            parent into reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="link" size="lg">
              Book a Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary/40 text-secondary hover:bg-secondary/10"
            >
              Explore Our Programs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
