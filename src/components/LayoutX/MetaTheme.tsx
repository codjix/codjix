"use client";
import { useEffect, useState } from "react";
import { useMantineColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

const MetaTheme = () => {
  const sysScheme = useColorScheme("dark");
  const { colorScheme } = useMantineColorScheme();
  const [scheme, setScheme] = useState<string>();
  useEffect(() => {
    if (colorScheme !== "auto") {
      setScheme(colorScheme === "dark" ? "#242424" : "#ffffff");
    } else {
      setScheme(sysScheme !== "light" ? "#242424" : "#ffffff");
    }
  }, [colorScheme]);
  return <meta name="theme-color" content={scheme} />;
};

export default MetaTheme;
