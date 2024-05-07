import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
