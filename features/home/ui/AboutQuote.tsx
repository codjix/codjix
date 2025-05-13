import { Blockquote, Text, BlockquoteProps, Anchor, Stack, Title } from "@mantine/core";
import { Icon } from "@iconify/react";

export const AboutQuote = (props: BlockquoteProps) => {
  const icon = <Icon width={25} icon="tabler:info-circle" />;

  return (
    <Blockquote cite="-- Ibrahim Megahed" icon={icon} {...props}>
      <Stack ta="justify" gap={5}>
        <Title order={2}>About Me :</Title>
        <Text>
          As a full-stack React software engineer. I use <b>Node.js</b>,<b> React</b>, <b>Next.js</b>, and{" "}
          <b>TypeScript</b> to create efficient and scalable web applications. Currently studying Computer Science at
          <Anchor href="https://aou.edu.eg" target="_blank">
            <b> Arab Open University. </b>
          </Anchor>
          I keep learning backend architectures and frontend optimizations for achieving clean code and best practices.
          I'm interested in open-source, SaaS products, and containerized development.
        </Text>
      </Stack>
    </Blockquote>
  );
};
