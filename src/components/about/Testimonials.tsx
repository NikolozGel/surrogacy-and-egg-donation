"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "FamilyWay made our dream of becoming parents come true. The entire team was incredibly supportive and professional throughout our surrogacy journey.",
    name: "Sarah & James K.",
    location: "United Kingdom",
  },
  {
    quote:
      "After years of unsuccessful treatments elsewhere, FamilyWay's expertise and compassion gave us hope again — and our beautiful twins.",
    name: "Maria & Thomas L.",
    location: "Germany",
  },
  {
    quote:
      "The level of care and communication we received was extraordinary. We always felt informed, supported, and never alone in this process.",
    name: "Chen Wei & Li Na",
    location: "Singapore",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          What Our Families Say
        </h2>

        <div className="relative min-h-55">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Quote className="h-10 w-10 text-primary/20 mx-auto mb-6" />
              <blockquote className="font-body text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
                {testimonials[current].quote}
              </blockquote>
              <p className="font-heading text-base font-semibold">
                {testimonials[current].name}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {testimonials[current].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
