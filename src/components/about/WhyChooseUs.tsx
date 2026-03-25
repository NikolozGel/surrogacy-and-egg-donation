import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: HeartPulse,
    title: "Leading IVF Success Rates",
    description:
      "Our clinic consistently achieves above-average IVF success rates thanks to cutting-edge laboratory technology and experienced specialists.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Legal & Transparent",
    description:
      "Every surrogacy and IVF program is fully aligned with Georgia's legal framework, ensuring clarity and peace of mind for international parents.",
  },
  {
    icon: Globe,
    title: "International Patient Care",
    description:
      "We serve families from over 40 countries, offering multilingual coordination, travel assistance, and comprehensive support from start to finish.",
  },
  {
    icon: Award,
    title: "Decade of Excellence",
    description:
      "With 10+ years of experience, our multidisciplinary team has helped thousands of individuals and couples achieve their dream of parenthood.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-warm-light">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Families Choose Us
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We combine medical expertise with genuine care here&apos;s what sets
            FamilyWay International apart from other fertility clinics.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-card">
                <CardContent className="pt-8 pb-6 px-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <reason.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
