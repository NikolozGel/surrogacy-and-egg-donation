import { z } from "zod";

export const contactFormSchema = z.object({
  fullname: z
    .string()
    .min(1, "errorRequired")
    .min(2, "Full name must be at least 2 characters"),
  email: z.string().min(1, "errorRequired").email("errorEmail"),
  phone: z
    .string()
    .min(1, "errorRequired")
    .regex(/^\+?[1-9]\d{1,14}$/, "errorPhone"),
  country: z
    .string()
    .min(1, "errorRequired")
    .min(2, "Country must be at least 2 characters"),
  message: z
    .string()
    .min(1, "errorRequired")
    .min(8, "Message must be at least 8 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
