import type { MetadataRoute } from "next";

import logo192 from "@/assets/images/logo-192.png";
import logo512 from "@/assets/images/logo-512.png";

const isProd = process.env.NODE_ENV === "production";

export default function manifest(): MetadataRoute.Manifest {
  const icons = [
    { src: logo192.src, type: "image/png", sizes: "192x192" },
    { src: logo512.src, type: "image/png", sizes: "512x512" },
  ];

  return {
    scope: "/",
    start_url: "/",
    name: "Codjix",
    display: "minimal-ui",
    short_name: "Codjix",
    description: "Codjix - Ibrahim Megahed's personal website.",
    background_color: "#242424",
    theme_color: "#242424",
    ...(isProd ? { icons } : {}),
  };
}
