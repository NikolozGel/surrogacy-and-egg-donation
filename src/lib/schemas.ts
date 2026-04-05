import { z } from "zod";

export const contactSchema = z.object({
  fullname: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(30),
  country: z.string().min(1).max(2000),
  message: z.string().min(1).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
