"use client";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  ContactFormData,
  contactFormSchema,
} from "@/components/modal/ValidationSchema";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function FooterSubmitForm() {
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
            console.log("ERROR BODY: ", errorBody);
            message = errorBody?.message ?? message;
          } catch {
            console.log("NO JSON RESPONSE");
          }
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

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-start gap-2 text-white">
        <CheckCircle2 className="w-6 h-6 text-green-400" />
        <p className="text-lg">{t("successTitle")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3"
      noValidate
      data-testid="contact-form"
    >
      <h2 className="text-gray-200 text-3xl mb-4">{t("title")}</h2>

      <div>
        {errors.fullname && (
          <p className="mt-1 text-md text-white">{t("fieldRequired")}</p>
        )}
        <label htmlFor="fullname" className="sr-only">
          {t("fullName")}
        </label>
        <input
          id="fullname"
          type="text"
          {...register("fullname")}
          placeholder={t("fullName")}
          className="bg-white px-4 py-4 text-gray-700 w-115 "
          disabled={isSubmitting}
          aria-invalid={!!errors.fullname}
          data-testid="fullname-input"
        />
      </div>

      <div>
        {errors.email && (
          <p className="mt-1 text-md text-white">{t("fieldRequired")}</p>
        )}
        <label htmlFor="email" className="sr-only">
          {t("email")}
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder={t("email")}
          className="bg-white px-4 py-4 text-gray-700 w-115 "
          disabled={isSubmitting}
          aria-invalid={!!errors.email}
          data-testid="email-input"
        />
      </div>

      <div>
        {errors.phone && (
          <p className="mt-1 text-md text-white">{t("fieldRequired")}</p>
        )}
        <label htmlFor="phone" className="sr-only">
          {t("phone")}
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder={t("phone")}
          className="bg-white px-4 py-4 text-gray-700 w-115 "
          disabled={isSubmitting}
          aria-invalid={!!errors.phone}
          data-testid="phone-input"
        />
      </div>

      <div>
        {errors.country && (
          <p className="mt-1 text-md text-white">{t("fieldRequired")}</p>
        )}
        <label htmlFor="country" className="sr-only">
          {t("country")}
        </label>
        <input
          id="country"
          type="text"
          {...register("country")}
          placeholder={t("country")}
          className="bg-white px-4 py-4 text-gray-700 w-115 "
          disabled={isSubmitting}
          aria-invalid={!!errors.country}
          data-testid="country-input"
        />
      </div>

      <div>
        {errors.message && (
          <p className="mt-1 text-md text-white">{t("fieldRequired")}</p>
        )}
        <label htmlFor="message" className="sr-only">
          {t("message")}
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder={t("message")}
          rows={4}
          className="bg-white px-4 py-4 text-gray-700 w-115  resize-none"
          disabled={isSubmitting}
          aria-invalid={!!errors.message}
          data-testid="message-input"
        />
      </div>

      {submitStatus === "error" && submitError && (
        <p
          className="text-white text-md text-center"
          data-testid="submit-error"
        >
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#4287f5] text-white py-3 cursor-pointer rounded-full px-6 mt-2 hover:opacity-80 transition self-start"
        data-testid="submit-button"
      >
        {isSubmitting ? (
          <Loader2 className="animate-spin w-5 h-5 mx-auto" />
        ) : (
          t("submit")
        )}
      </button>
    </form>
  );
}
