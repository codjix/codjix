import Head from "next/head";
import { cookies } from "next/headers";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { GoogleTagManager } from "@next/third-parties/google";
import { Notifications } from "@mantine/notifications";
import { Analytics } from "@vercel/analytics/react";

import LayoutX from "#c/LayoutX";
import MetaTheme from "#c/LayoutX/MetaTheme";
import mkMetaData from "#/lib/utils/mkMetaData";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "#a/styles/globals.scss";

export const metadata = mkMetaData({
  title: "Codjix",
  description: "Ibrahim Megahed - Codjix personal website.",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "yellow",
  });
  const Co = cookies();

  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>
      <Analytics />
      <meta name="google-adsense-account" content="ca-pub-2060833228835984" />
      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GTAG}
        gtmScriptUrl="https://www.googletagmanager.com/gtag/js"
      />
      <body>
        <MantineProvider
          theme={theme}
          defaultColorScheme={(Co.get("color-scheme")?.value as any) ?? "auto"}
        >
          <MetaTheme />
          <LayoutX wideOpen={Co.get("wide-open")?.value}>{children}</LayoutX>
          <Notifications zIndex={550} />
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
