import { useState, memo } from "react";
import { useScrollTrigger, Slide, IconButton } from "@mui/material";
import { MenuRounded as MenuIcon } from "@mui/icons-material";

import "./Header.scss";
import Logo from "../common/Logo";
import Drawer from "./Drawer";

const Header = memo(() => {
  const [open, setOpen] = useState<boolean>(false);
  const trigger = useScrollTrigger();

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Slide appear={false} in={!trigger}>
        <header className="Header">
          <div className="Header-Content">
            <IconButton className="Colorful" aria-label="Show" onClick={handleOpen}>
              <MenuIcon className="ButtonIcon" />
            </IconButton>
            <Logo />
          </div>
        </header>
      </Slide>
      <Drawer open={open} onClose={handleClose} />
    </>
  );
});

export default Header;
