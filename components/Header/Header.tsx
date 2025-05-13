"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Group, Stack, AppShell, ActionIcon, ScrollAreaAutosize, Container, Text } from "@mantine/core";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { PAGES } from "@/features/const";
import { NavItem } from "./NavItem";

type $Header = {
  opened: boolean;
  toggle: () => void;
  close: () => void;
};

export const Header = ({ opened, toggle, close }: $Header) => {
  const icon = `mdi:menu-${opened ? "open" : "close"}`;

  return (
    <>
      <AppShell.Header>
        <Container size="lg" p={0}>
          <Group h={60} justify="space-between" px={20}>
            <Group gap={10} align="center">
              <ActionIcon size={35} variant="default" children={<Icon height={25} icon={icon} />} onClick={toggle} />
              <Text component={Link} href="/" fz={25} fw="bold">
                Codjix
              </Text>
            </Group>
            <ThemeSwitcher />
          </Group>
          <div className="palestine-hr" />
        </Container>
      </AppShell.Header>
      {/* ============================== */}
      <AppShell.Navbar className="blur" p={20}>
        <ScrollAreaAutosize scrollbars={false}>
          <Stack gap={10} onClick={close}>
            {PAGES.map((link, index) => (
              <NavItem key={index} {...link} />
            ))}
          </Stack>
        </ScrollAreaAutosize>
      </AppShell.Navbar>
    </>
  );
};
