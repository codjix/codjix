import { Text, Anchor, SimpleGridProps, Stack, Title, Card, SimpleGrid, ThemeIcon } from "@mantine/core";
import { Icon } from "@iconify/react";
import { INFO_CARDS } from "../const";
import styles from "./home.module.scss";

export const InfoCards = (props: SimpleGridProps) => {
  return (
    <SimpleGrid spacing={20} {...props}>
      {INFO_CARDS.map((link, index) => (
        <Anchor href={link.href} title={link.title} underline="never" target="_blank" key={index}>
          <Card className={styles.card}>
            <ThemeIcon variant="light" size={80} radius={15}>
              <Icon width={60} height={60} icon={link.icon} />
            </ThemeIcon>
            <Title order={3} ta="center">
              {link.label}
            </Title>
            <Text maw={450} c="dimmed" fz="sm" ta="center">
              {link.desc}
            </Text>
          </Card>
        </Anchor>
      ))}
    </SimpleGrid>
  );
};
