import { Link } from "react-router-dom";
import { ROUTE } from "#/utils/constants";

import LogoSvg from "#assets/img/logo.svg?react";

export default function Logo() {
  return (
    <Link className="Logo Colorful" to={ROUTE.home}>
      <LogoSvg className="Logo-Svg" />
    </Link>
  );
}
