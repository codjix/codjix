import Link from "next/link";
import { Icon } from "@iconify/react";
import { ActionIcon, Anchor, Group, NavLink } from "@mantine/core";
import { SOCIALS } from "@/features/const";

export const ProfileSocials = () => {
  return (
    <Group gap={10}>
      <NavLink
        active
        label="Contact"
        href="/contact"
        variant="filled"
        visibleFrom="sm"
        component={Link}
        leftSection={<Icon height="25px" icon="ph:envelope-simple" />}
        w="fit-content"
      />
      <Anchor
        href="/contact"
        component={Link}
        title="Contact me"
        hiddenFrom="sm"
        children={
          <ActionIcon size="40px" variant="default" children={<Icon height="25px" icon="ph:envelope-simple" />} />
        }
      />
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
    </Group>
  );
};
