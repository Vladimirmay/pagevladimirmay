import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getHours } from "date-fns";
import { Button } from "@mui/material";
import {
  WidgetsRounded as WidgetsIcon,
  MailRounded as MailIcon,
} from "@mui/icons-material";

import "./Greeting.scss";
import frontendImg from "#assets/img/pictures/frontend.svg";
import Section from "#/components/common/Section";
import HelloIcon from "#assets/icons/hello.svg?react";
import { CONTACT_LINK } from "#data/common";
import { ROUTE } from "#utils/constants";

export default function Greeting() {
  const { t } = useTranslation();

  return (
    <Section className="Greeting">
      <div>
        <p className="Greeting-Text Greeting-First Title">
          {t(`home.hi.${getDayTime()}`)}
          <span className="Greeting-Nowrap">
            !
            <span className="Greeting-Second">
              <HelloIcon className="Greeting-Icon" />
            </span>
          </span>
        </p>
      </div>
      <h1 className="Greeting-Text Title">
        <span className="Greeting-Part Greeting-Text Greeting-Third Title">
          {t("home.iam")}
        </span>{" "}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_second">
          <span className="Greeting-Main">Vladimir</span>
        </span>{" "}
        <span className="Greeting-Part Greeting-Third Greeting-Third_order_third">
          <span className="Greeting-Main">May</span>
          <span className="Greeting-Part Greeting-Fourth Greeting-Fourth_first">,</span>
        </span>
      </h1>
      <p className="Greeting-Text Greeting-Fifth Title">
        <strong>
          <span className="Greeting-Word">
            {t("home.occupation.part1")}
            <Link className="Greeting-Extra Greeting-Extra_first" to={ROUTE.skills}>
              <img
                className="Greeting-ExtraImg"
                width={60}
                height={68}
                src={frontendImg}
                alt="Frontend"
              />
            </Link>
          </span>
          <br />
          {t("home.occupation.part2")}
        </strong>
        <span className="Greeting-Part Greeting-Fourth Greeting-Fourth_second">,</span>
      </p>
      <p className="Greeting-SubText Greeting-Seventh MainText">
        {t("about.feature.position.label")}{" "}
        {t("about.feature.vlogger.extraLabel", {
          replace: [CONTACT_LINK.youTube.title],
        })}
        .
      </p>
      <div className="Greeting-Actions Actions">
        {links.map(({ Icon, ...link }) => (
          <Button
            key={link.key}
            className={`Greeting-${link.order} Greeting-Button Button Button_color_${link.color}`}
            component={Link}
            to={ROUTE[link.key]}
            size="large"
            endIcon={<Icon />}
          >
            {t(`title.${link.key}`)}
          </Button>
        ))}
      </div>
    </Section>
  );
}

const getDayTime = (): "night" | "morning" | "afternoon" | "evening" => {
  const hours: number = getHours(new Date());
  if (hours >= 0 && hours < 6) return "night";
  if (hours >= 6 && hours < 12) return "morning";
  if (hours >= 12 && hours < 18) return "afternoon";
  return "evening";
};

const links = [
  { key: "portfolio", color: "blue", order: "Eighth", Icon: WidgetsIcon },
  { key: "contact", color: "green", order: "Nineth", Icon: MailIcon },
];
