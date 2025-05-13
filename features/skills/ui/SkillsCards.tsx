"use client";
import {
  Badge,
  Box,
  BoxProps,
  Card,
  ScrollAreaAutosize,
  SegmentedControl,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { SKILLS, type Skill } from "../index";
import styles from "./skills.module.scss";

const label = (tag: Skill["tags"][0]) => {
  let count = SKILLS.list.filter(({ tags }) => tags.includes(tag)).length;
  if (tag === "All") count = SKILLS.list.length;
  return (
    <Box>
      {tag}{" "}
      <Badge size="sm" px={5} variant="light">
        {count}
      </Badge>
    </Box>
  );
};

export const SkillsCards = (props: BoxProps) => {
  const [tag, setTag] = useState<Skill["tags"][0]>("All");
  const data = SKILLS.tags.map((value) => ({ value, label: label(value) }));

  return (
    <>
      <ScrollAreaAutosize>
        <SegmentedControl miw={600} w="100%" data={data} onChange={setTag as any} value={tag} />
      </ScrollAreaAutosize>
      <Box {...props} className={styles.skills}>
        {SKILLS.list.map((skill, index) => {
          if (tag !== "All" && !skill.tags.includes(tag)) return null;

          return (
            <Card key={index} className={styles.card}>
              <ThemeIcon variant="light" c={skill.color} size={80} radius={15}>
                <Icon width={50} height={50} icon={skill.icon} />
              </ThemeIcon>
              <Title order={3}>{skill.name}</Title>
              <Text c="dimmed" fz="sm" ta="center">
                {skill.description}
              </Text>
            </Card>
          );
        })}
      </Box>
    </>
  );
};
