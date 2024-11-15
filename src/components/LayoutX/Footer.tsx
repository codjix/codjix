"use client";
import { Icon } from "@iconify/react";
import {
  ActionIcon,
  ActionIconGroup,
  Divider,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import socials from "#a/res/socials.json";
import logo from "#a/images/logo.svg";

const Footer = () => {
  const aboutSocials = socials.filter((link) =>
    ["Facebook", "Twitter (X)", "Telegram"].includes(link.label)
  );
  return (
    <Stack mt={20} mb={60}>
      <Divider />
      <Flex align="center" justify="space-between">
        <Group>
          <Image h={40} src={logo.src} alt="Codjix logo" visibleFrom="sm" />
          <Title order={3} fz={30}>
            Codjix
          </Title>
        </Group>
        <ActionIconGroup>
          {aboutSocials.map((social, index) => (
            <ActionIcon
              size="40px"
              key={index}
              component="a"
              target="_blank"
              title={social.label}
              href={social.href}
              variant="default"
            >
              <Icon height="25px" icon={social.icon} />
            </ActionIcon>
          ))}
        </ActionIconGroup>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between">
        <Text>Copyright &copy; 2019 - {new Date().getFullYear()} Codjix.</Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
