"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import {
  ContactFormData,
  contactFormSchema,
} from "@/components/modal/ValidationSchema";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function DialogDemo() {
  const t = useTranslations("modal");

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    shouldFocusError: true,
  });

  const isSubmitting = submitStatus === "loading";

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(response);

      if (!response.ok) {
        let message = t("genericError");

        try {
          const errorBody = await response.json();
          if (errorBody?.message) {
            message = errorBody.message;
          }
        } catch {
          console.log(errors);
        }

        setSubmitStatus("error");
        setSubmitError(message);
        return;
      }

      setSubmitStatus("success");
      reset();
    } catch (err) {
      console.error("Contact form submission failed:", err);

      setSubmitStatus("error");
      setSubmitError(t("genericError"));
    }
  };

  return (
    <div>
      <div className="p-4 sm:p-10 bg-white">
        {submitStatus === "success" ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <CheckCircle2 className="h-16 w-16 text-[#4287f5]" />
            <h3 className="text-3xl text-[#4287f5] text-center">
              {t("successTitle")}
            </h3>
            <p className="text-base text-gray-600 text-center max-w-md">
              {t("successMessage")}
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-xl sm:text-3xl text-gray-600 font-semibold mb-4">
              {t("title")}
            </h3>

            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              {t("description")}
              <br />
              <br />
              {t("descriptionSecond")}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mb-5">
              {errors.fullname && (
                <p className="text-sm text-gray-800">{t("fieldRequired")}</p>
              )}
              <Input
                {...register("fullname")}
                placeholder={t("fullName")}
                className="h-12 border-gray-400"
                disabled={isSubmitting}
              />

              {errors.email && (
                <p className="text-sm text-gray-800">{t("fieldRequired")}</p>
              )}
              <Input
                type="email"
                {...register("email")}
                placeholder={t("email")}
                className="h-12 border-gray-400"
                disabled={isSubmitting}
              />

              {errors.country && (
                <p className="text-sm text-gray-800">{t("fieldRequired")}</p>
              )}
              <Input
                type="tel"
                {...register("phone")}
                placeholder={t("phone")}
                className="h-12 border-gray-400"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-sm text-gray-800">{t("fieldRequired")}</p>
              )}

              <Input
                {...register("country")}
                placeholder={t("country")}
                className="h-12 border-gray-400"
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="text-sm text-gray-800">{t("fieldRequired")}</p>
              )}
              <Input
                {...register("message")}
                placeholder={t("message")}
                className="h-12 border-gray-400"
                disabled={isSubmitting}
              />

              {submitStatus === "error" && submitError && (
                <p className="text-sm text-red-600 text-center">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                className="h-12 border-gray-400 cursor-pointer px-8 mt-2 bg-[#4287f5] rounded-full cursor-po hover:opacity-70 text-white float-right flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  t("submit")
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
