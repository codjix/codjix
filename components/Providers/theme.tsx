"use client";
import * as Core from "@mantine/core";

export const theme = Core.createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "green",
  defaultRadius: 5,
  colors: { green: Core.colorsTuple("#00A550") },
  components: {
    Badge: Core.Badge.extend({ defaultProps: { radius: 5 } }),
    Avatar: Core.Avatar.extend({ defaultProps: { radius: 5 } }),
    Card: Core.Card.extend({ defaultProps: { withBorder: true } }),
    Button: Core.Button.extend({ defaultProps: { variant: "default" } }),
    NavLink: Core.NavLink.extend({ styles: { root: { borderRadius: 5 } } }),
    Stack: Core.Stack.extend({ defaultProps: { gap: 20 } }),
    Modal: Core.Modal.extend({
      defaultProps: {
        centered: true,
        transitionProps: { transition: "fade-up" },
        overlayProps: { blur: 5 },
      },
    }),
    Menu: Core.Menu.extend({
      defaultProps: {
        shadow: "sm",
        keepMounted: true, // keep in DOM, required for modals
        arrowPosition: "center",
        withArrow: true,
        arrowSize: 12,
      },
    }),
  },
});
