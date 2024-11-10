"use client";
import Link from "next/link";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { ActionIcon, AppShell, Container, Flex, Group, rem, Text } from "@mantine/core";
import { useDisclosure, useHeadroom, useMediaQuery } from "@mantine/hooks";
import Cookies from "universal-cookie";

import Affix from "./Affix";
import NavBar from "./NavBar";
import ThemeSwitcher from "./ThemeSwitcher";
import Footer from "./Footer";

const LayoutX = ({ children, wideOpen }: { children: React.ReactNode; wideOpen?: string }) => {
  const Co = new Cookies();
  const pinned = useHeadroom({ fixedAt: 120 });
  const [mOpened, mHandlers] = useDisclosure();
  const [wOpened, wHandlers] = useDisclosure(wideOpen !== "false");
  const match = useMediaQuery("(max-width: 767px)");

  useEffect(() => Co.set("wide-open", wOpened), [wOpened]);

  const shellProps = {
    header: { height: 70, collapsed: !pinned, offset: true },
    navbar: { width: 300, breakpoint: "sm", collapsed: { desktop: !wOpened, mobile: !mOpened } },
    aside: {
      width: 300,
      breakpoint: "md",
      collapsed: { desktop: true, mobile: true },
    },
  };

  return (
    <AppShell layout="alt" padding="md" {...shellProps}>
      <AppShell.Header px={20}>
        <Container h="100%" p={0} w="100%" maw={1000}>
          <Group h="100%" justify="space-between" gap={10}>
            <Flex h="100%" align="center" gap={10}>
              {Burger(wHandlers, wOpened, true)}
              {Burger(mHandlers, mOpened, false)}
              <Text component={Link} href="/" size="20px">
                Codjix
              </Text>
            </Flex>
            <ThemeSwitcher wide={!match} noLabel />
          </Group>
          <div className="palestine-hr" />
        </Container>
      </AppShell.Header>
      <AppShell.Navbar style={blur} zIndex={999} px="md" pb="md">
        <NavBar menu={Burger(mHandlers, mOpened, false)} close={mHandlers.close} />
      </AppShell.Navbar>
      <AppShell.Main pt={`calc(${rem(60)} + 30px)`}>
        <Container p={0} w="100%" maw={1000}>
          {children}
          <Footer />
        </Container>
        <Affix />
      </AppShell.Main>
    </AppShell>
  );
};

const blur = {
  background: "color-mix(in srgb, var(--mantine-color-default), transparent 50%)",
  backdropFilter: "blur(10px)",
};

const Burger = (h: any, o: boolean, v: boolean) => (
  <ActionIcon
    aria-label="Menu"
    onClick={h.toggle}
    visibleFrom={v == true && "sm"}
    hiddenFrom={v == false && "sm"}
    variant="subtle"
    color="gray"
    size="lg"
  >
    <Icon height={25} icon={"mdi:menu-" + (o ? "open" : "close")} />
  </ActionIcon>
);

export default LayoutX;
