import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from "@mui/material";

import "#styles/index.scss";
import "#utils/i18n";
import { HashRouter as Router } from "react-router-dom";
import App from "./components/App.tsx";
import THEME from "#styles/theme";
import { handleAppLoaded } from "#utils/base";

const theme: Theme = createTheme(THEME as object);

window.addEventListener("load", handleAppLoaded);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <App />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>
);
