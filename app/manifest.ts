import type { MetadataRoute } from "next";

import dark from "#a/images/screenshots/dark.png";
import light from "#a/images/screenshots/light.png";
import logo192 from "#a/images/logo-192.png";
import logo512 from "#a/images/logo-512.png";

export default function manifest(): MetadataRoute.Manifest {
  return {
    scope: "/",
    start_url: "/",
    name: "Codjix",
    display: "standalone",
    short_name: "Codjix",
    description: "Codjix - Ibrahim Megahed's personal website.",
    background_color: "#242424",
    theme_color: "#242424",
    screenshots: [
      { src: dark.src, type: "image/png", sizes: "1811x3500" },
      { src: light.src, type: "image/png", sizes: "1811x3500", form_factor: "wide" } as any,
    ],
    icons: [
      { src: logo192.src, type: "image/png", sizes: "192x192" },
      { src: logo192.src, type: "image/png", sizes: "192x192", purpose: "monochrome" },
      { src: logo512.src, type: "image/png", sizes: "512x512" },
      { src: logo512.src, type: "image/png", sizes: "512x512", purpose: "monochrome" },
    ],
  };
}
