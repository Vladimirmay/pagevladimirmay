import { memo } from "react";

import "./Sidebar.scss";
import Logo from "../common/Logo";
import Navigation from "../common/Navigation";
import Settings from "./Settings";

const Sidebar = memo(() => (
  <aside className="Sidebar">
    <div>
      <Logo />
      <Navigation />
    </div>
    <Settings />
  </aside>
));

export default Sidebar;
