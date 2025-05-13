"use client";
import { useRouter } from "next/navigation";
import { Flex, Input, Pagination, Select } from "@mantine/core";

type ControlsProps = {
  sort?: string;
  total: number;
  page?: number;
  sorts: {
    value: string;
    label: string;
  }[];
};

export const Controls = ({ sort, page = 1, total, sorts }: ControlsProps) => {
  const router = useRouter();

  const push = (key: string, value: string) => {
    const url = new URL(globalThis?.location.href);
    url.searchParams.set(key, value);
    router.push(url.href);
  };

  return (
    <Flex justify="space-between" mb={20}>
      <Pagination.Root total={total} defaultValue={page} onChange={e => push("page", String(e))}>
        <Flex gap={5} align="center">
          <Pagination.Previous h={36} />
          <Input readOnly h={36} w={80} value={`${page} / ${total}`} />
          <Pagination.Next h={36} />
        </Flex>
      </Pagination.Root>
      <Select w={130} value={sort} onChange={e => push("sort", String(e))} data={sorts} />
    </Flex>
  );
};
