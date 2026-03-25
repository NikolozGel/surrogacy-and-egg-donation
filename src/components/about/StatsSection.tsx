"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Baby, Globe, TrendingUp, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [Baby, Globe, TrendingUp, Users];

export function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const t = useTranslations("statsSection");

  const stats = [
    { value: 200, key: "1" },
    { value: 30, key: "2" },
    { value: 92, key: "3" },
    { value: 20, key: "4" },
  ];

  return (
    <section className="py-20 border-x-indigo-400">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = icons[i];

            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <Icon className="h-8 w-8 text-[#4287f5] mx-auto mb-3" />

                <div className="font-heading text-4xl text-gray-600 md:text-5xl font-bold mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={t(`stats.${stat.key}.suffix`)}
                  />
                </div>

                <p className="font-body text-gray-600 text-sm">
                  {t(`stats.${stat.key}.label`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
