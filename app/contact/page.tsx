import { Title, Group, Text, Stack, Card, NavLink, Badge } from "@mantine/core";
import { Icon } from "@iconify/react";
import { SOCIALS } from "@/features/const";

import styles from "./page.module.scss";
import waves from "@/assets/images/waves.svg";
import { ContactForm } from "@/features/contact";

export const metadata = {
  title: "Contact | Codjix",
  description: "I'm looking forward to hearing from you.",
};

export default function ContactPage() {
  const badge = <Badge variant="white" h={25} children="@codjix" />;
  return (
    <Stack>
      <Title component={Group} order={1} my={0}>
        <Icon icon="tabler:mail" />
        Contact Me
      </Title>
      <Text c="dimmed" size="lg">
        I'm looking forward to hearing from you.
      </Text>
      <Card className={styles.contact}>
        <Stack className={styles.social} bg={`url(${waves.src}) no-repeat`}>
          <Title order={2}>Social Media:</Title>
          {SOCIALS.map(({ label, href, icon }, key) => (
            <NavLink
              key={key}
              c="#ffffff"
              variant="subtle"
              {...{ label, href }}
              leftSection={<Icon icon={icon} />}
              rightSection={badge}
              target="_blank"
              active
            />
          ))}
        </Stack>
        <ContactForm />
      </Card>
    </Stack>
  );
}
