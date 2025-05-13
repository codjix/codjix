import { Icon } from "@iconify/react";
import { Badge, Card, Text, CardSection, Group, Image, Title, Stack, Anchor } from "@mantine/core";
import { AboutQuote, CanvasBG, InfoCards, INTERESTS, ProfileSocials } from "@/features/home";

import me from "@/assets/images/me.webp";
import palestine from "@/assets/images/palestine.svg";
import styles from "./page.module.scss";

export const metadata = {
  title: "Home | Codjix",
  description: "Learn about the passion behind me and how I empower my community.",
};

export default function HomePage() {
  return (
    <Stack>
      <Card pb={30}>
        {/* ========== Canvas ========== */}
        <CardSection>
          <CanvasBG className={styles.banner} geometry={[1185, 420]} />
        </CardSection>
        {/* ========== Profile ========== */}
        <div className={styles.profile}>
          <Image className={styles.avatar} src={me.src} />
          <Stack gap={10}>
            <Title order={1} c="green">
              Ibrahim Megahed
            </Title>
            <Text>Software Developer & UI-UX Designer</Text>
            <ProfileSocials />
            <Anchor href="https://palestinecampaign.org/" target="_blank">
              <Image h={35} w="fit-content" src={palestine.src} />
            </Anchor>
          </Stack>
        </div>
      </Card>
      {/* ========== About Me ========== */}
      <AboutQuote mt={10} p={20} />
      {/* ========== Interests ========== */}
      <Card>
        <Group gap="10px">
          <Icon icon="tabler:star-filled" />
          {INTERESTS.map((skill, i) => (
            <Badge key={i} size="lg" radius="sm">
              {skill}
            </Badge>
          ))}
        </Group>
      </Card>
      {/* ========== Info Cards ========== */}
      <InfoCards cols={{ sm: 2, base: 1 }} />
    </Stack>
  );
}
