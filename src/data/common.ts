import { YouTube as YouTubeIcon } from "@mui/icons-material";

import { ISocialLink } from "#/utils/types";
import GitHubIcon from "#assets/icons/github.svg?react";
import InstagramIcon from "#assets/icons/instagram.svg?react";
import VKIcon from "#assets/icons/vk.svg?react";
import DuolingoIcon from "#assets/icons/duolingo.svg?react";
import TelegramIcon from "#assets/icons/telegram.svg?react";

interface IContactLink {
  gitHub: ISocialLink;
  youTube: ISocialLink;
  instagram: ISocialLink;
  vk: ISocialLink;
  telegram: ISocialLink;
  duolingo: ISocialLink;
}

export const MY_NAME = "Vladimir Mayevsky";

export const CONTACT_LINK: IContactLink = {
  gitHub: {
    title: "GitHub",
    href: "https://github.com/Vladimirmay",
    Icon: GitHubIcon,
    size: "lg",
  },
  telegram: {
    title: "Telegram",
    href: "https://t.me/VMayevskiy",
    Icon: TelegramIcon,
    size: "md",
  },
  youTube: {
    title: "YouTube",
    href: "",
    Icon: YouTubeIcon,
    size: "xl",
  },
  instagram: {
    title: "Instagram",
    href: "https://instagram.com/vmayevskiy",
    Icon: InstagramIcon,
    size: "md",
  },
  vk: {
    title: "VK",
    href: "https://vk.com/vova_maevsky",
    Icon: VKIcon,
    size: "md",
  },
  duolingo: {
    title: "Duolingo",
    href: "https://duolingo.com/profile/volodya-1",
    Icon: DuolingoIcon,
    size: "md",
  },
};

export const TECHNOLOGY_TITLE = {
  js: "JavaScript",
  ts: "TypeScript",
  react: "React",
  reactquery: "React Query",
  redux: "Redux",
  zustand: "Zustand",
  mobx: "MobX",
  preact: "Preact",
  vue: "Vue.js",
  html: "HTML",
  svg: "SVG",
  jsx: "JSX",
  pug: "Pug",
  handlebars: "Handlebars",
  markdown: "Markdown",
  blade: "Blade",
  css: "CSS",
  sass: "Sass",
  less: "Less",
  modules: "CSS Modules",
  bem: "BEM",
  styled: "styled-components",
  mui: "Material UI",
  ant: "Ant Design",
  tailwind: "Tailwind CSS",
  bulma: "Bulma",
  materialize: "Materialize",
  bootstrap: "Bootstrap",
  semantic: "Semantic UI",
  npm: "npm",
  pnpm: "pnpm",
  yarn: "Yarn",
  vite: "Vite",
  webpack: "webpack",
  gulp: "Gulp",
  gatsby: "Gatsby",
  gsap: "GSAP",
  next: "Next.js",
  nuxt: "Nuxt",
  git: "Git",
  babel: "Babel",
  prettier: "Prettier",
  eslint: "ESLint",
  storybook: "Storybook",
  jest: "Jest",
  cypress: "Cypress",
  iterm: "iTerm2",
  vscode: "Visual Studio Code",
  devtools: "Chrome DevTools",
  figma: "Figma",
  photoshop: "Photoshop",
  optim: "ImageOptim",
  browserstack: "BrowserStack",
  azure: "Azure",
  paw: "RapidAPI",
  clickup: "ClickUp",
  jira: "Jira",
  notes: "Notes",
  gpt: "ChatGPT",
  expo: "Expo",
  node: "Node.js",
  wordpress: "WordPress",
  docker: "Docker",
};

export const MAIN_TECHNOLOGY_LINK = {
  react: "https://reactjs.org",
  mui: "https://material-ui.com",
};
