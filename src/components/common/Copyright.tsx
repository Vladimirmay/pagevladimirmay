import { FunctionComponent, SVGProps } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@mui/material";
import {
  CopyrightRounded as CopyrightIcon,
  FavoriteRounded as FavoriteIcon,
} from "@mui/icons-material";

import "./Copyright.scss";
import ReactIcon from "#assets/icons/react.svg?react";
import MuiIcon from "#assets/icons/mui.svg?react";
import { TODAY, BLANK_LINK_PROPS } from "#utils/constants";
import { CONTACT_LINK, MAIN_TECHNOLOGY_LINK, TECHNOLOGY_TITLE } from "#/data/common";
import Tooltip from "./Tooltip";

const year = TODAY.getFullYear();

const links: ILink[] = [
  {
    title: TECHNOLOGY_TITLE.react,
    href: MAIN_TECHNOLOGY_LINK.react,
    Icon: ReactIcon,
  },
  {
    title: TECHNOLOGY_TITLE.mui,
    href: MAIN_TECHNOLOGY_LINK.mui,
    Icon: MuiIcon,
  },
];

interface ILink {
  title: string;
  href: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export default function Copyright() {
  const { t } = useTranslation();

  return (
    <div className="Copyright">
      <p>
        <CopyrightIcon className="Copyright-Icon" /> <time>{year}</time>,{" "}
        {t("copyright.crafted")}{" "}
        <Link
          {...BLANK_LINK_PROPS}
          className="Link Link_white"
          href={CONTACT_LINK.gitHub.href}
        >
          {t("copyright.me")}
        </Link>{" "}
        {t("copyright.with")} <FavoriteIcon className="Copyright-Icon" />
      </p>
      <div className="Copyright-Links">
        {links.map(({ Icon, ...link }, index) => (
          <Tooltip key={index} title={link.title}>
            <a {...BLANK_LINK_PROPS} className="Copyright-Link" href={link.href}>
              <Icon />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
