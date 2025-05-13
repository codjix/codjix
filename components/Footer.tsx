"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ActionIcon, ActionIconGroup, Divider, Flex, Group, Image, Stack, Text } from "@mantine/core";
import { SOCIALS } from "@/features/const";

import logo from "@/assets/images/logo.svg";

export const Footer = () => (
  <Stack mt={20} mb={60}>
    <Divider />
    <Flex align="center" justify="space-between">
      <Group>
        <Image h={40} src={logo.src} visibleFrom="sm" />
        <Text component={Link} href="/" fz={30} fw="bold">
          Codjix
        </Text>
      </Group>
      <ActionIconGroup>
        {SOCIALS.map((social, index) => (
          <ActionIcon
            size="40px"
            key={index}
            component="a"
            target="_blank"
            title={social.label}
            href={social.href}
            children={<Icon height="25px" icon={social.icon} />}
            variant="default"
          />
        ))}
      </ActionIconGroup>
    </Flex>
    <Divider />
    <Flex align="center" justify="space-between">
      <Text>Copyright &copy; 2019 - {new Date().getFullYear()} Codjix.</Text>
    </Flex>
  </Stack>
);
