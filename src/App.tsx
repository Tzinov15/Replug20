/*

TODO
- Add the rules to the floating pinned header so that they are always visible (TBD on how this works on mobile)

*/
import { useEffect, useState } from "react";

import "./App.css";
import { fireConfetti } from "./Components/confetti";
import { Content } from "./Content";
import { Content36Hour } from "./Content36Hour";

export const App = () => {
  const [mode, setMode] = useState<"20day" | "36hour">("36hour");

  useEffect(() => {
    if (mode === "36hour") {
      fireConfetti({ colors: ["#E3C892", "#F5F1E0"], duration: 0.1, particleCount: 50 });
    }
  }, [mode]);

  if (mode === "20day") {
    return <Content setMode={() => setMode("36hour")} />;
  } else {
    return <Content36Hour setMode={() => setMode("20day")} />;
  }
};
