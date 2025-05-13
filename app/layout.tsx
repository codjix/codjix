import { Metadata } from "next";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import type { MantineColorScheme as Scheme } from "@mantine/core";
import { mantineHtmlProps, ColorSchemeScript } from "@mantine/core";
import { Providers } from "@/components/Providers";
import { Layout } from "@/components/Layout";
import { CONFIG } from "@/features/const";

import banner from "@/assets/images/banner.png";

export const metadata: Metadata = {
  title: CONFIG.name,
  description: CONFIG.description,
  metadataBase: new URL(CONFIG.url),
  openGraph: {
    images: [{ url: banner.src, width: banner.width, height: banner.height }],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookie = await cookies();
  const scheme = (cookie.get("mantine-scheme")?.value as Scheme) ?? "auto";

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme={scheme} />
        <Analytics />
      </head>
      <body>
        <Providers scheme={scheme}>
          <Layout children={children} />
        </Providers>
      </body>
    </html>
  );
}
