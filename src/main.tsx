import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ErrorBoundary } from "./ErrorBoundary";

// If you still want an ErrorBoundary, keep it OUTSIDE the Router or around the whole tree
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
    <HashRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <App />
    </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
