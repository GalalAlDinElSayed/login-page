import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n"; // <== أضف هذا السطر

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
