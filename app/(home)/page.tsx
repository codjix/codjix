import {
  ActionIcon,
  Anchor,
  Badge,
  Card,
  Text,
  CardSection,
  Flex,
  Group,
  Image,
  NavLink,
  Title,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import { Icon } from "@iconify/react";

import me from "#a/images/me.webp";
import palestine from "#a/images/palestine.svg";
import banner from "#a/images/banners/home.png";
import AboutLinks from "./about.json";
import socials from "#a/res/socials.json";
import classes from "./styles.module.scss";
import mkMetaData from "#/lib/utils/mkMetaData";
import CanvasBG from "#c/CanvasBG";
import Quote from "./Quote";

export const metadata = mkMetaData({
  title: "Home | Codjix",
  description: "Learn about the passion behind me and how I empower my community.",
  images: [{ url: banner.src }],
});

const interests = [
  "Learn English",
  "Swimming",
  "Studying",
  "Learn to code",
  "Learn Russian",
  "Learn Arabic",
  "Learn Frinch",
];

const page = () => {
  const viewOnly = ["Facebook", "Twitter (X)", "Telegram", "LinkedIn"];
  const aboutSocials = socials.filter((link) => viewOnly.includes(link.label));

  return (
    <>
      <Card withBorder shadow="sm">
        <CardSection>
          <CanvasBG className={classes.banner} geometry={[1185, 420]} spacing={5} />
        </CardSection>
        <div className={classes.user}>
          <Image w={250} h={250} src={me.src} alt="Me" />
          <Stack className={classes.info} gap={5}>
            <Title order={1} p={0}>
              Ibrahim Megahed
            </Title>
            <Text mb={5}>Software Developer & UI-UX Designer</Text>
            <Flex>
              <NavLink
                active
                label="Contact"
                href="/contact"
                variant="filled"
                visibleFrom="sm"
                component={Link}
                aria-label="Contact"
                className={classes.mainLink}
                leftSection={<Icon height="25px" icon="ph:envelope-simple" />}
              />
              <Anchor href="/contact" component={Link} title="Contact me" hiddenFrom="sm">
                <ActionIcon size="40px" variant="default" aria-label="Contact">
                  <Icon height="25px" icon="ph:envelope-simple" />
                </ActionIcon>
              </Anchor>
              {aboutSocials.map((social, index) => (
                <Anchor
                  href={social.href}
                  title={social.label}
                  key={index}
                  style={{ marginLeft: 10 }}
                  target="_blank"
                >
                  <ActionIcon size="40px" variant="default" aria-label={social.label}>
                    <Icon height="25px" icon={social.icon} />
                  </ActionIcon>
                </Anchor>
              ))}
            </Flex>
            <a href="https://palestinecampaign.org/" target="_blank">
              <Image mt={10} h={20 * 1.5} w={155 * 1.5} src={palestine.src} />
            </a>
          </Stack>
        </div>
      </Card>
      <Quote />
      <Card withBorder shadow="sm" mt={20}>
        <Group gap="10px">
          <Icon icon="tabler:star-filled" />
          {interests.map((skill) => (
            <Badge size="lg" key={skill} radius="sm">
              {skill}
            </Badge>
          ))}
        </Group>
      </Card>
      <div className={classes.aboutLinks}>
        {AboutLinks.map((link, index) => (
          <Anchor
            href={link.href}
            target="_blank"
            key={index}
            aria-label={link.title}
            title={link.title}
          >
            <Card component={Stack} gap={5} p={20} withBorder shadow="sm" ta="center">
              <Icon width={80} height={80} style={{ margin: "0 auto" }} icon={link.icon} />
              <Title order={3} ta="center">
                {link.label}
              </Title>
              <Text c="dimmed" fz="sm" ta="center">
                {link.desc}
              </Text>
            </Card>
          </Anchor>
        ))}
      </div>
    </>
  );
};

export default page;
