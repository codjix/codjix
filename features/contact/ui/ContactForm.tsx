"use client";
import { Alert, Box, Button, LoadingOverlay, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { useForm, zodResolver } from "@mantine/form";
import { useNotify } from "@/hooks/useNotify";
import { _contactSchema } from "../schema.zod";
import { sendContact } from "../serverActions";

export const ContactForm = () => {
  const notify = useNotify();

  const Form = useForm({
    mode: "uncontrolled",
    validate: zodResolver(_contactSchema),
    initialValues: { name: "", email: "", msg: "" },
  });

  const { mutate, error, status } = useMutation({
    mutationFn: sendContact,
    onSuccess: data => {
      const color = data.ok ? "green" : "red";
      const message = data.ok ? data.result : data.message;
      const icon = data.ok ? "tabler:check" : "tabler:alert-triangle";
      notify({ message, color, icon });
      Form.reset();
    },
  });

  return (
    <Box component="form" onSubmit={Form.onSubmit(e => mutate(e))}>
      <Stack pos="relative" p={10}>
        <LoadingOverlay visible={status == "pending"} />
        <Title order={2}>Get in touch:</Title>
        <Alert variant="light" hidden={status !== "error"}>
          {error?.message}
        </Alert>
        <TextInput
          label="Name"
          variant="filled"
          placeholder="ex: Mohamed"
          {...Form.getInputProps("name")}
          key={Form.key("name")}
          withAsterisk
        />
        <TextInput
          label="Email"
          variant="filled"
          placeholder="ex: user@domain.tld"
          {...Form.getInputProps("email")}
          key={Form.key("email")}
          withAsterisk
        />
        <Textarea
          label="Message"
          variant="filled"
          placeholder="Think about it (^_^)"
          {...Form.getInputProps("msg")}
          key={Form.key("msg")}
          resize="vertical"
          withAsterisk
          rows={5}
        />
        <Button type="submit" variant="filled" w={100}>
          Send
        </Button>
      </Stack>
    </Box>
  );
};
