type Skill = {
  name: string;
  description: string;
  icon: string;
  tags: ("All" | "Frontend" | "Backend" | "DevOps" | "Tools")[];
  color?: string;
};

const tags = ["All", "Backend", "Frontend", "DevOps", "Tools"] as const;

const list: Skill[] = [
  {
    name: "HTML",
    icon: "simple-icons:html5",
    description: "HyperText Markup Language",
    tags: ["Frontend"],
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: "simple-icons:css3",
    description: "Cascading Style Sheets",
    tags: ["Frontend"],
    color: "#1572B6",
  },
  {
    name: "SASS",
    icon: "logos:sass",
    description: "Syntactically Awesome Style Sheets",
    tags: ["Frontend"],
  },
  {
    name: "React",
    icon: "logos:react",
    description: "A frontend JavaScript framework",
    tags: ["Frontend"],
  },
  {
    name: "Mantine",
    icon: "logos:mantine-icon",
    description: "A React component library with a focus on usability",
    tags: ["Frontend"],
  },
  {
    name: "Socket.io",
    icon: "logos:socket-io",
    description: "A library for real-time web applications",
    tags: ["Frontend"],
  },
  {
    name: "Iconify",
    icon: "simple-icons:iconify",
    description: "A library for using icons in web applications",
    tags: ["Frontend"],
    color: "#1769AA",
  },
  {
    name: "Vite",
    icon: "logos:vitejs",
    description: "A frontend bundler with plugins",
    tags: ["Frontend"],
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    description: "The core technology of the Web",
    tags: ["Frontend", "Backend"],
  },
  {
    name: "Typescript",
    icon: "logos:typescript-icon",
    description: "A superset of JavaScript with types",
    tags: ["Frontend", "Backend"],
  },
  {
    name: "Zod",
    icon: "logos:zod",
    description: "A TypeScript-first schema declaration and validation library",
    tags: ["Frontend", "Backend"],
  },
  {
    name: "Figma",
    icon: "logos:figma",
    description: "A web-based UI/UX design application",
    tags: ["Frontend", "Tools"],
  },
  {
    name: "Drizzle ORM",
    icon: "simple-icons:drizzle",
    description: "A TypeScript ORM for SQL databases",
    tags: ["Backend"],
    color: "#C5F74F",
  },
  {
    name: "Hono",
    icon: "logos:hono",
    description: "A fast and lightweight web framework",
    tags: ["Backend"],
  },
  {
    name: "Express.js",
    icon: "simple-icons:express",
    description: "A popular and flexible Node.js web framework",
    tags: ["Backend"],
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    description: "An open-source relational database",
    tags: ["Backend"],
  },
  {
    name: "Redis",
    icon: "logos:redis",
    description: "An open-source in-memory key-value data store",
    tags: ["Backend"],
  },
  {
    name: "SQLite",
    icon: "devicon:sqlite",
    description: "A self-contained SQL database",
    tags: ["Backend"],
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    description: "A full-stack React framework",
    tags: ["Backend"],
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    description: "An asynchronous event-driven JavaScript runtime",
    tags: ["Backend", "DevOps"],
  },
  {
    name: "Bun.sh",
    icon: "logos:bun",
    description: "A fast all-in-one JavaScript runtime",
    tags: ["Backend", "DevOps"],
  },
  {
    name: "Nginx",
    icon: "logos:nginx",
    description: "A high-performance web server",
    tags: ["DevOps"],
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    description: "A container management platform and cli",
    tags: ["DevOps", "Tools"],
  },
  {
    name: "GIT",
    icon: "logos:git-icon",
    description: "A distributed version control system",
    tags: ["DevOps", "Tools"],
  },
  {
    name: "Debian",
    icon: "logos:debian",
    description: "A secure and stable linux distribution",
    tags: ["DevOps", "Tools"],
  },
  {
    name: "Ubuntu",
    icon: "logos:ubuntu",
    description: "A popular and rich Linux distribution",
    tags: ["DevOps", "Tools"],
  },
  {
    name: "Alpine Linux",
    icon: "simple-icons:alpinelinux",
    description: "A samll and secure Linux distribution",
    tags: ["DevOps", "Tools"],
    color: "#0D597F",
  },
  {
    name: "Bash",
    icon: "logos:bash-icon",
    description: "A Unix shell and command language",
    tags: ["DevOps", "Tools"],
  },
  {
    name: "VS Code",
    icon: "devicon:vscode",
    description: "A popular source-code editor with extensions",
    tags: ["Tools"],
  },
  {
    name: "JWT",
    icon: "logos:jwt-icon",
    description: "Share JSON data as self-contained stateless tokens",
    tags: ["Tools"],
  },
];

const SKILLS = { tags, list };

export { type Skill, SKILLS };
