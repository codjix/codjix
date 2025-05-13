import { Icon } from "@iconify/react";
import { ActionIcon, MantineColorScheme, useMantineColorScheme } from "@mantine/core";

export const ThemeSwitcher = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const schemes = [
    ["Auto", "tabler:contrast-filled"],
    ["Dark", "tabler:moon"],
    ["Light", "tabler:sun"],
  ].map(([title, icon]) => ({
    icon: <Icon height={20} icon={icon} />,
    value: title.toLowerCase() as MantineColorScheme,
    title,
  }));

  const curentScheme = schemes.find(item => item.value == colorScheme);
  const currentIndex = schemes.indexOf(curentScheme as (typeof schemes)[0]);

  return (
    <ActionIcon
      size={35}
      variant="default"
      onClick={() => setColorScheme(schemes[(currentIndex + 1) % 3].value)}
      children={curentScheme?.icon}
    />
  );
};
