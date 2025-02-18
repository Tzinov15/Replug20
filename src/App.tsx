/*

TODO
- Add the rules to the floating pinned header so that they are always visible (TBD on how this works on mobile)

*/
import { datadogRum } from "@datadog/browser-rum";
import { useEffect, useState } from "react";

import "./App.css";
import { fireConfetti } from "./Components/confetti";
import { Content } from "./Content";
import { Content36Hour } from "./Content36Hour";

if (import.meta.env.PROD) {
  datadogRum.init({
    applicationId: "c9cce2ed-0f44-46ee-8ea7-34a285a25f29",
    clientToken: "pubb852f0baec6bba31b4d86967b5b873de",
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: "datadoghq.com",
    service: "replug20",
    env: "<ENV_NAME>",
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    defaultPrivacyLevel: "mask-user-input",
  });
}

export const App = () => {
  const [mode, setMode] = useState<"20day" | "36hour">("20day");

  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname === "/tech-hiatus") {
      setMode("36hour");
    }
  }, [pathname]);

  useEffect(() => {
    if (mode === "36hour") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      fireConfetti({ colors: ["#E3C892", "#F5F1E0"], duration: 0.4, particleCount: 50 });
      document.body.style.backgroundColor = "#040F0F";
    } else {
      document.body.style.backgroundColor = "#F5F1E0";
    }
  }, [mode]);

  if (mode === "20day") {
    return <Content setMode={() => setMode("36hour")} />;
  } else {
    return <Content36Hour setMode={() => setMode("20day")} />;
  }
};
