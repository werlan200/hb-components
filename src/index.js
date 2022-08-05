import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GeneralProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GeneralProvider>
    <App />
  </GeneralProvider>
);
