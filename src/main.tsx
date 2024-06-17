import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#25ae9c",
      dark: "#048e90",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fa8e61",
      dark: "#dc7c55",
      contrastText: "#ffffff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
