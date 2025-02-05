import { useMediaQuery } from "@mui/material";

import Sections from "#/components/common/Sections";
import { QUERY_BREAKPOINT } from "#utils/constants";
import Greeting from "./Greeting";
import Banner from "./Banner";

export default function Home() {
  const md: boolean = useMediaQuery(QUERY_BREAKPOINT.md);

  return (
    <Sections key={String(md)} firstSection={<Greeting />} secondSection={<Banner />} />
  );
}
