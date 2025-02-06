import { FunctionComponent, SVGProps } from "react";
import { SvgIcon } from "@mui/material";

type TSvgIcon = typeof SvgIcon;

export type TLng = "ru" | "eng";

export type TRoute =
  | "/"
  | "/about"
  | "/skills"
  | "/experience"
  | "/portfolio"
  | "/contact";

export type TColor =
  | "alternate"
  | "white"
  | "default"
  | "blue"
  | "green"
  | "grass"
  | "red"
  | "yellow"
  | "violet";

export type TEffect =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "zoomIn"
  | "zoomInSm"
  | "zoomOut"
  | "zoomOutSm";

export interface ISocialLink {
  title: string;
  href: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>> | TSvgIcon;
  size: "xs" | "sm" | "md" | "lg" | "xl";
}
