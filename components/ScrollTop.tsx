"use client";
import { useMediaQuery } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import { Icon } from "@iconify/react";

export const ScrollTop = () => {
  const wide = useMediaQuery("(min-width: 767px)");

  const target = globalThis?.document?.documentElement;
  const totalHeight = target?.scrollHeight - target?.clientHeight;
  const progress = Math.ceil((target?.scrollTop / totalHeight) * 100);

  return (
    <Affix zIndex={500} position={{ bottom: 20, right: wide ? "20px" : "calc(50% - 85px)" }}>
      <Transition transition="slide-up" mounted={progress > 0}>
        {trz => (
          <Button.Group style={trz} orientation={wide ? "vertical" : undefined}>
            <Button
              onClick={() => target?.scrollTo({ top: 0 })}
              children={<Icon icon="tabler:arrow-bar-to-up" />}
              className="blur"
            />
            <Button className="blur" children={`${progress} %`} />
            <Button
              onClick={() => target?.scrollTo({ top: totalHeight })}
              children={<Icon icon="tabler:arrow-bar-to-down" />}
              className="blur"
            />
          </Button.Group>
        )}
      </Transition>
    </Affix>
  );
};
