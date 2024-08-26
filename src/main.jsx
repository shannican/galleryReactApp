import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import IndexContext from "./contextIndex/IndexContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <IndexContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IndexContext>
);
