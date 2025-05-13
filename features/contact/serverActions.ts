"use server";
import { _contactSchema } from "./schema.zod";

const token = process.env.TG_TOKEN!;
const id = process.env.TG_ID!;

export async function sendContact(message: typeof _contactSchema._type) {
  return new Promise<{ ok: boolean; result?: string; message?: string }>(async resolve => {
    try {
      const { success, data, error } = _contactSchema.safeParse(message);
      if (!success) {
        console.error("Error in sendContact:", error.message);
        throw new Error("Invalid data");
      }

      const text = `New Mesage :\nFrom : ${data.name}\nEmail : ${data.email}\nMessage : ${data.msg}`;
      const url = new URL(`https://api.telegram.org/bot${token}/sendMessage`);
      url.searchParams.set("parse_mode", "Markdown");
      url.searchParams.set("chat_id", id);
      url.searchParams.set("text", text);

      const req = await fetch(url.href);
      if (!req.ok) {
        console.error("Error in sendContact:", req.statusText);
        throw new Error("Failed to send message");
      }
      resolve({ ok: true, result: "Message sent successfully" });
    } catch ({ message }: any) {
      resolve({ ok: false, message });
    }
  });
}
