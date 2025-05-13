"use client";
import { notifications } from "@mantine/notifications";
import { DefaultMantineColor, ThemeIcon } from "@mantine/core";
import { Icon } from "@iconify/react";

export interface $Notify {
  message: React.ReactNode;
  color?: DefaultMantineColor;
  icon?: string;
}

export const useNotify = () => Notify;
const Notify = ({ message, color, icon }: $Notify) => {
  notifications.show({
    color,
    message,
    withBorder: true,
    autoClose: true,
    icon: (
      <ThemeIcon color={color} size="35px">
        <Icon style={{ width: "70%", height: "70%" }} icon={icon ?? "tabler:info-circle"} />
      </ThemeIcon>
    ),
  });
};
