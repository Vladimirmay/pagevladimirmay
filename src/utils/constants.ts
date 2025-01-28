import { BREAKPOINT } from "#/styles/theme";
import { TRoute } from "./types";

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
  vlog: TRoute;
  contact: TRoute;
}

export const ROUTE: IRoute = {
  home: "/",
  about: "/about",
  skills: "/skills",
  experience: "/experience",
  portfolio: "/portfolio",
  vlog: "/vlog",
  contact: "/contact",
};

export const QUERY_BREAKPOINT: IQueryBreakpoint = {
  xs: `(max-width: ${BREAKPOINT.xs}px)`,
  sm: `(max-width: ${BREAKPOINT.sm}px)`,
  md: `(max-width: ${BREAKPOINT.md}px)`,
  lg: `(max-width: ${BREAKPOINT.lg}px)`,
};
