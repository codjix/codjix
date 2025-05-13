import { Icon } from "@iconify/react";
import { Group, Stack, Text, Title } from "@mantine/core";
import { SkillsCards } from "@/features/skills";

export const metadata = {
  title: "Skills | Codjix",
  description: "Here you can see my skills and the software I usually use.",
};

export default function SkillsPage() {
  return (
    <Stack>
      <Title component={Group} order={1} my={0}>
        <Icon icon="tabler:atom" />
        My Skills
      </Title>
      <Text c="dimmed" size="lg">
        Here you can see my skills and the software I usually use.
      </Text>
      <SkillsCards />
    </Stack>
  );
}
