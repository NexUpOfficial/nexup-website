// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx"; // Note: changed AppWrapper to App
import "../index.css";

// NOTE: We rely on <AnalyticManage /> inside App.jsx to handle initialization
// No need for a separate initAnalytics() call here, which prevents duplication.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);