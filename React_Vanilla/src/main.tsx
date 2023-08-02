import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const renderRoot = document.getElementById("root");

if (renderRoot) {
  ReactDOM.createRoot(renderRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  throw new Error("Cannot find root element to render on page");
}
