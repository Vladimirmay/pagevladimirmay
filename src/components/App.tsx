import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import cn from "clsx";

import "./App.scss";
import {
  QUERY_BREAKPOINT,
  ROUTE,
  PATH_COLOR,
  PATH_BACKGROUND_COLOR,
} from "#/utils/constants";
import Sidebar from "./base/Sidebar";
import Home from "./pages/home/Home";
import Header from "./base/Header";
import { useMediaQuery } from "@mui/material";

function App() {
  const { pathname } = useLocation();
  const md = useMediaQuery(QUERY_BREAKPOINT.md);

  const lastSlashIndex = pathname.lastIndexOf("/");
  const pathnameEnd = pathname.slice(lastSlashIndex);

  const AppClassName = cn(
    `App App_page_${pathname.slice(1, lastSlashIndex || undefined) || "home"} App_color_${
      PATH_COLOR[pathnameEnd] ?? "white"
    }`,
    PATH_BACKGROUND_COLOR[pathnameEnd] &&
      `App_background_${PATH_BACKGROUND_COLOR[pathnameEnd]}`
  );

  return (
    <>
      <div className={AppClassName}>
        {md ? <Header /> : <Sidebar />}
        <main className="App-Main">
          <Routes>
            <Route path={ROUTE.home} element={<Home />} />
            {/* <Route path={ROUTE.about} element={<About />} />
            <Route path={ROUTE.skills} element={<Skills />} />
            <Route path={ROUTE.experience} element={<Experience />} />
            <Route path={ROUTE.portfolio}>
              <Route index element={<Portfolio />} />
              <Route path=":project" element={<Project />} />
            </Route>
            <Route path={ROUTE.contact} element={<Contact />} /> */}
            <Route path="*" element={<Navigate replace to={ROUTE.home} />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
