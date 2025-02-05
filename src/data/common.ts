import { YouTube as YouTubeIcon } from "@mui/icons-material";

import { ISocialLink } from "#/utils/types";
import GitHubIcon from "#assets/icons/github.svg?react";

interface IContactLink {
  gitHub: ISocialLink;
  // linkedIn: ISocialLink
  // sevenGlyphs: ISocialLink
  youTube: ISocialLink;
  // instagram: ISocialLink
  // vk: ISocialLink
  // facebook: ISocialLink
  // telegram: ISocialLink
  // duolingo: ISocialLink
}

export const MY_NAME = "Vladimir Mayevsky";

export const CONTACT_LINK: IContactLink = {
  gitHub: {
    title: "GitHub",
    href: "https://github.com/michaelany",
    Icon: GitHubIcon,
    size: "lg",
  },
  // linkedIn: {
  //   title: 'LinkedIn',
  //   href: 'https://linkedin.com/in/michaelany',
  //   Icon: LinkedInIcon,
  //   size: 'sm',
  // },
  // telegram: {
  //   title: 'Telegram',
  //   href: 'https://t.me/michaelany',
  //   Icon: TelegramIcon,
  //   size: 'md',
  // },
  youTube: {
    title: "YouTube",
    href: "https://youtube.com/@michaelany",
    Icon: YouTubeIcon,
    size: "xl",
  },
  // instagram: {
  //   title: 'Instagram',
  //   href: 'https://instagram.com/anymichael',
  //   Icon: InstagramIcon,
  //   size: 'md',
  // },
  // facebook: {
  //   title: 'Facebook',
  //   href: 'https://facebook.com/michaelany.fb',
  //   Icon: FacebookIcon,
  //   size: 'sm',
  // },
  // sevenGlyphs: {
  //   title: `${COMPANY.sevenGlyphs.title} Team`,
  //   href: 'https://7glyphs.com/agency/team',
  //   Icon: SevenGlyphsIcon,
  //   size: 'xs',
  // },
  // vk: {
  //   title: 'VK',
  //   href: 'https://vk.com/michaelany',
  //   Icon: VKIcon,
  //   size: 'md',
  // },
  // duolingo: {
  //   title: 'Duolingo',
  //   href: 'https://duolingo.com/profile/michael.any',
  //   Icon: DuolingoIcon,
  //   size: 'md',
  // },
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
