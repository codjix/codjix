export type Page = {
  label: string;
  icon: string;
  href: string;
  list?: Page[];
};

export const PAGES: Page[] = [
  { label: "Home", icon: "tabler:user-circle", href: "/" },
  { label: "Contact", icon: "tabler:mail", href: "/contact" },
  { label: "Projects", icon: "tabler:cube-spark", href: "/projects" },
  { label: "Skills", icon: "tabler:atom", href: "/skills" },
];
