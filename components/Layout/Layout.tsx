"use client";
import { AppShell, Container } from "@mantine/core";
import { useColorScheme, useDisclosure, useHeadroom, useMediaQuery } from "@mantine/hooks";
import { ScrollTop } from "../ScrollTop";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const scheme = useColorScheme();
  const color = scheme === "dark" ? "#242424" : "#ffffff";
  const viewStyle = { container: "main-view / inline-size" };
  const [opened, { toggle, close }] = useDisclosure();
  const isWide = useMediaQuery("(min-width: 768px)");
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{
        width: 300,
        collapsed: { mobile: !opened, desktop: !opened },
        breakpoint: "sm",
      }}
      layout={isWide ? "alt" : "default"}
    >
      <meta name="theme-color" content={color} />
      <Header {...{ opened, toggle, close }} />
      <AppShell.Main pt={60}>
        <Container style={viewStyle} size="lg" p={20} pt={25}>
          {children}
          <Footer />
        </Container>
        <ScrollTop />
      </AppShell.Main>
    </AppShell>
  );
};
