import { Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";
import { QUERY_BREAKPOINT, ROUTE } from "#/utils/constants";
import Sidebar from "./base/Sidebar";
import Home from "./pages/home/Home";
import Header from "./base/Header";
import { useMediaQuery } from "@mui/material";

function App() {
  const md = useMediaQuery(QUERY_BREAKPOINT.md);
  return (
    <>
      <div className="App">
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
            <Route path={ROUTE.vlog}>
              <Route index element={<Vlog />} />
              <Route path=":video" element={<Video />} />
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
