import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import "./18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio">
      <Suspense fallback={<p>"Loading..."</p>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
