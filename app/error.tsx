"use client";
import { useEffect } from "react";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

type $Error = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: $Error) {
  useEffect(() => console.error(error), [error]);

  return (
    <Stack gap={20} align="center" h="calc(100vh - 130px - 130px)" justify="center">
      <Title order={2}>Internal Error</Title>
      <Text c="dimmed">Somthing went wrong while loading the page. Please try again.</Text>
      <Group justify="center">
        <Button w={100} component={Link} href="/">
          Go Home
        </Button>
        <Button w={100} onClick={() => reset()}>
          Try Again
        </Button>
      </Group>
    </Stack>
  );
}
