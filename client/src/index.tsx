import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/routes.tsx";
import AppRouter from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>
);
