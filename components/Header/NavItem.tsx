"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@mantine/core";
import { Icon } from "@iconify/react";

type $NavItem = Record<"href" | "icon" | "label", string>;
export const NavItem = ({ href, icon, label }: $NavItem) => {
  const pathname = usePathname();

  return (
    <NavLink
      href={href}
      label={label}
      variant="light"
      component={Link}
      active={pathname === href}
      leftSection={<Icon width={30} icon={icon} />}
      style={{ borderRadius: 10 }}
    />
  );
};
