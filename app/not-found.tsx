import Link from "next/link";
import { Button, Group, Stack, Text, Title } from "@mantine/core";

export const metadata = {
  title: "Not Found | Codjix",
};

export default function NotFound() {
  return (
    <Stack gap={20} align="center" h="calc(100vh - 130px - 130px)" justify="center">
      <Text c="green">404</Text>
      <Title order={2}>Not Found</Title>
      <Text c="dimmed">
        Sorry, couldn't find the page you're looking for. It might be deleted or moved to another URL.
      </Text>
      <Group justify="center">
        <Button w={100} component={Link} href="/">
          Go Home
        </Button>
        <Button w={100} component={Link} href="/contact">
          Get Help
        </Button>
      </Group>
    </Stack>
  );
}
