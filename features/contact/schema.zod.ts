import { z } from "zod";

export const _contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email").min(6, "Email must be at least 6 characters"),
  msg: z.string().min(10, "Message must be at least 10 characters"),
});
