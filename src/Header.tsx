import { useEffect, useState } from "react";

import logo from "./logo_yellow_20.png";

export const Header = () => {
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const headerStickyCutoff = 144;
  scrollOffset;
  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY;
      setScrollOffset(offset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStartsResizing = scrollOffset > 144;

  return (
    <>
      <header
        className={`bg-transparent z-50  sticky top-0 pt-4 mt-36 flex items-center flex-col  ${headerStartsResizing ? "bg-beige-clear-mb lg:bg-beige-clear" : ""} w-full `}
      >
        <div
          style={{
            transformOrigin: "top",
            transform: `scale(${scrollOffset < headerStickyCutoff ? 1 : 1 - (scrollOffset - headerStickyCutoff) / 300 < 0.42 ? 0.42 : 1 - (scrollOffset - headerStickyCutoff) / 300})`,
          }}
          className={`flex flex-col  items-center justify-center w-full py-4 border-b border-b-primary border-opacity-50 `}
        >
          <img src={logo} className={`max-w-[90%] lg:max-w-[70%]`} />
          <p className="text-primary text-xl mt-6">
            A <span className="font-bold">20 day technology detox</span> with{" "}
            <span className="font-bold">6 simple rules</span>
          </p>
        </div>
      </header>
    </>
  );
};
