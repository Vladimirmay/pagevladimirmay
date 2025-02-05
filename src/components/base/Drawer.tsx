import { Drawer as MuiDrawer, IconButton } from "@mui/material";
import { ArrowBackRounded as ArrowBackIcon } from "@mui/icons-material";

import "./Drawer.scss";
import Navigation from "../common/Navigation";

interface IDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function Drawer({ open, onClose }: IDrawerProps) {
  return (
    <MuiDrawer open={open} onClose={onClose}>
      <div className="Drawer-Content">
        <div>
          <div className="Drawer-Block">
            <IconButton className="Colorful" aria-label="Hide" onClick={onClose}>
              <ArrowBackIcon className="ButtonIcon" />
            </IconButton>
          </div>
          <Navigation onClose={onClose} />
        </div>
      </div>
    </MuiDrawer>
  );
}
