"use client";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Phone, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  ContactFormData,
  contactFormSchema,
} from "@/components/modal/ValidationSchema";

import Link from "next/link";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const t = useTranslations("contact");

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
        console.log(response);
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
        setSubmitStatus("error");
        setSubmitError(
          error instanceof Error ? error.message : t("genericError"),
        );
      }
    },
    [reset, t],
  );

  return (
    <main>
      <section className="relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-heading/70" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20 text-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-600 font-bold mb-4">
              {t("hero.heading")}
            </h1>
            <p className="font-body text-lg text-gray-600 max-w-xl mx-auto">
              {t("hero.subheading")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-gray-600">
                {t("form.heading")}
              </h2>
              <p className="font-body text-gray-600 mb-8">
                {t("form.subheading")}
              </p>

              {submitStatus === "success" ? (
                <div
                  className="flex flex-col items-center justify-center py-12 space-y-4 bg-card shadow-md"
                  data-testid="contact-success"
                >
                  <CheckCircle2 className="h-16 w-16 text-sky-600" />
                  <h3 className="font-heading text-2xl font-bold text-gray-600 text-center">
                    {t("success.heading")}
                  </h3>
                  <p className="font-body text-gray-600 text-center max-w-md">
                    {t("success.body")}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-8 shadow-md space-y-4"
                  noValidate
                  data-testid="contact-form"
                >
                  <div>
                    <label htmlFor="fullname" className="sr-only">
                      {t("form.fullName")}
                    </label>
                    <Input
                      id="fullname"
                      {...register("fullname")}
                      placeholder={t("form.fullName")}
                      className="h-12 border-gray-500 text-gray-600 placeholder:text-gray-400 font-body"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.fullname}
                      data-testid="fullname-input"
                    />
                    {errors.fullname && (
                      <p className="mt-1 text-sm text-gray-800">
                        {t("form.fieldRequired")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      {t("form.emailAddress")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder={t("form.emailAddress")}
                      className="h-12 border-gray-500 text-gray-600 placeholder:text-gray-400 font-body"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.email}
                      data-testid="email-input"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-gray-800">
                        {t("form.fieldRequired")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      {t("form.phoneNumber")}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder={t("form.phoneNumber")}
                      className="h-12 border-gray-500 text-gray-600 placeholder:text-gray-400 font-body"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.phone}
                      data-testid="phone-input"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-gray-800">
                        {t("form.fieldRequired")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="country" className="sr-only">
                      {t("form.country")}
                    </label>
                    <Input
                      id="country"
                      {...register("country")}
                      placeholder={t("form.country")}
                      className="h-12 border-gray-500 text-gray-600 placeholder:text-gray-400 font-body"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.country}
                      data-testid="country-input"
                    />
                    {errors.country && (
                      <p className="mt-1 text-sm text-gray-800">
                        {t("form.fieldRequired")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">
                      {t("form.message")}
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      placeholder={t("form.messagePlaceholder")}
                      rows={5}
                      className="w-full border border-gray-400 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-400 font-body resize-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={isSubmitting}
                      aria-invalid={!!errors.message}
                      data-testid="message-input"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-gray-800">
                        {t("form.fieldRequired")}
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

                  <p className="font-body text-md text-gray-600">
                    {t("form.privacy")}
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="submit-button"
                    className="py-3.5 text-xl px-5 cursor-pointer font-semibold rounded-full text-white bg-[#4287f5] hover:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>{t("form.submit")}</>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="overflow-hidden shadow-md aspect-4/3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23826.97535687477!2d44.7767!3d41.7151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084eed2576f38!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2s!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("map.title")}
                />
              </div>

              <div className="p-8 shadow-md">
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  {t("talk.body")}
                </p>
                <div className="space-y-3">
                  <Link
                    href="tel:+995575757535"
                    className="flex items-center gap-3 text-primary font-body font-medium hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {t("talk.phone")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
