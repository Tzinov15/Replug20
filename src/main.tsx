import { datadogRum } from "@datadog/browser-rum";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./index.css";

datadogRum.init({
  applicationId: import.meta.env.VITE_DATADOG_APPLICATION_ID,
  clientToken: import.meta.env.VITE_DATADOG_CLIENT_TOKEN,
  site: "us3.datadoghq.com",
  service: "replug",
  env: "prod",
  version: import.meta.env.VITE_COMMIT_HASH || "<missing-version>",
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
