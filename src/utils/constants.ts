import { BREAKPOINT } from "#/styles/theme";
import { TRoute, TColor } from "./types";

interface IQueryBreakpoint {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface IRoute {
  home: TRoute;
  about: TRoute;
  skills: TRoute;
  experience: TRoute;
  portfolio: TRoute;
  contact: TRoute;
}

interface IDetect {
  mobile: boolean;
  safari: boolean;
}

interface IBlankLinkProps {
  target: string;
  rel: string;
}

export const ROUTE: IRoute = {
  home: "/",
  about: "/about",
  skills: "/skills",
  experience: "/experience",
  portfolio: "/portfolio",
  contact: "/contact",
};

export const QUERY_BREAKPOINT: IQueryBreakpoint = {
  xs: `(max-width: ${BREAKPOINT.xs}px)`,
  sm: `(max-width: ${BREAKPOINT.sm}px)`,
  md: `(max-width: ${BREAKPOINT.md}px)`,
  lg: `(max-width: ${BREAKPOINT.lg}px)`,
};

export const PATH_COLOR: Record<TRoute | string, TColor> = {
  [ROUTE.home]: "alternate",
  [ROUTE.about]: "green",
  [ROUTE.skills]: "blue",
  [ROUTE.experience]: "violet",
};

export const PATH_BACKGROUND_COLOR: Record<TRoute | string, TColor> = {
  [ROUTE.portfolio]: "blue",
  [ROUTE.contact]: "green",
};

export const TODAY = new Date();

export const BLANK_LINK_PROPS: IBlankLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export const DETECT: IDetect = {
  mobile: [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ].some((device: RegExp) => navigator.userAgent.match(device)),
  safari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
};
