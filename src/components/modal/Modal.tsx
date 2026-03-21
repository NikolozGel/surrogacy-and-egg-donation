"use client";
import { useCallback, useState } from "react";
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

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      setSubmitStatus("loading");
      setSubmitError(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          let message = t("genericError");

          try {
            const errorBody = await response.json();
            message = errorBody?.message ?? message;
          } catch {}

          throw new Error(message);
        }

        setSubmitStatus("success");
        reset();
      } catch (error) {
        console.error("Contact form submission failed:", error);
        setSubmitStatus("error");
        setSubmitError(
          error instanceof Error ? error.message : t("genericError"),
        );
      }
    },
    [reset, t],
  );

  return (
    <div className="">
      <div className="p-10 bg-white">
        {submitStatus === "success" ? (
          <div
            className="flex flex-col items-center justify-center py-12 space-y-4"
            data-testid="contact-success"
          >
            <CheckCircle2 className="h-16 w-16 text-[#4287f5]" />
            <h3 className="text-3xl font-normal text-[#4287f5] text-center">
              {t("successTitle")}
            </h3>
            <p className="text-base  text-gray-600 text-center max-w-md">
              {t("successMessage")}
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-normal text-[#4287f5] mb-4">
              {t("title")}
            </h3>

            <p className="text-base text-gray-600 mb-6">
              {t("description")}
              <br />
              <br />
              {t("descriptionSecond")}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
              data-testid="contact-form"
            >
              <div>
                <label htmlFor="fullname" className="sr-only">
                  {t("fullName")}
                </label>
                <Input
                  id="fullname"
                  {...register("fullname")}
                  placeholder={t("fullName")}
                  className="h-12"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.fullname}
                  data-testid="fullname-input"
                />
                {errors.fullname && (
                  <p className="mt-1 text-sm text-gray-800">
                    {t("fieldRequired")}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  {t("email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder={t("email")}
                  className="h-12"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  data-testid="email-input"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-gray-800">
                    {t("fieldRequired")}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  {t("phone")}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder={t("phone")}
                  className="h-12"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.phone}
                  data-testid="phone-input"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-gray-800">
                    {t("fieldRequired")}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="sr-only">
                  {t("country")}
                </label>
                <Input
                  id="country"
                  {...register("country")}
                  placeholder={t("country")}
                  className="h-12"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.country}
                  data-testid="country-input"
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-gray-800">
                    {t("fieldRequired")}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  {t("message")}
                </label>
                <Input
                  id="message"
                  {...register("message")}
                  placeholder={t("message")}
                  className="h-12"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.message}
                  data-testid="message-input"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-gray-800">
                    {t("fieldRequired")}
                  </p>
                )}
              </div>

              {submitStatus === "error" && submitError && (
                <p
                  className="text-sm text-red-600 text-center"
                  data-testid="submit-error"
                >
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                className="h-12 px-8 bg-[#4287f5] rounded-full cursor-pointer hover:opacity-70 text-white float-right"
                disabled={isSubmitting}
                data-testid="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {/* {t("submit")} */}
                  </>
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
