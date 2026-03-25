import { Card, CardContent } from "@/components/ui/card";

interface ProcessStepCardProps {
  step: string;
  title: string;
  description: string;
}

export default function ProcessStepCard({
  title,
  description,
}: ProcessStepCardProps) {
  return (
    <Card className="border-none">
      <CardContent className="pt-8 pb-8 px-6">
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-2xl text-sky-500 font-semibold mb-3">
          {title}
        </h3>
        <p className="font-body text-lg sm:text-xl lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
