import { memo } from "react";

import "./Sidebar.scss";
import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

const Sidebar = memo(() => (
  <aside className="Sidebar">
    <div>
      <Logo />
      <Navigation />
    </div>
  </aside>
));

export default Sidebar;
