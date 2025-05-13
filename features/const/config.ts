const isProd = process.env.NODE_ENV === "production";

export const CONFIG = {
  name: "Codjix",
  description: "Ibrahim Megahed - Codjix personal website.",
  url: isProd ? "https://codjix.me" : "http://localhost:3000",
} as const;
