import { Icon } from "@iconify/react";
import { Stack, Title, Group, Text, Card, ThemeIcon } from "@mantine/core";

export const metadata = {
  title: "Projects | Codjix",
  description: "Here are some of the projects I've worked on.",
};

export default function ProjectsPage() {
  return (
    <Stack>
      <Title component={Group} order={1} my={0}>
        <Icon icon="tabler:cube-spark" />
        My Projects
      </Title>
      <Text c="dimmed" size="lg">
        Here are some of the projects I've worked on.
      </Text>
      <Stack component={Card} h={400} align="center" justify="center">
        <ThemeIcon variant="light" size={80} radius={15}>
          <Icon width={50} height={50} icon="tabler:clock" />
        </ThemeIcon>
        <Text>Coming Soon</Text>
      </Stack>
    </Stack>
  );
}
