import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const PUBLIC_URL = import.meta.env.PUBLIC_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
