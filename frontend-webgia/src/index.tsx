import React from "react";
import ReactDOM from "react-dom/client";
import theme from './theme/style';
import { ThemeProvider } from '@emotion/react';
// import { CssBaseline } from '@mui/material';
import "./theme/index.css";
import AppRouter from "./Routes/App";
import reportWebVitals from "./reportWebVitals";
// import { Global, css } from '@emotion/react';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();