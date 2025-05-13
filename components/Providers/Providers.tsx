"use client";
import { MantineColorScheme, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import { theme } from "./theme";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@/assets/scss/global.scss";

type $Providers = {
  children?: React.ReactNode;
  // get server data from app/layout.tsx
  scheme: MantineColorScheme;
};
export const Providers = ({ children, scheme }: $Providers) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MantineProvider theme={theme} defaultColorScheme={scheme}>
        {children}
        <Notifications />
      </MantineProvider>
    </QueryClientProvider>
  );
};
