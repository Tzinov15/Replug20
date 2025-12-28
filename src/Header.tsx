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

  return (
    <>
      <header className={`bg-transparent z-50  top-0 pt-4 mt-0 lg:mt-0 flex items-center flex-col  w-full `}>
        <div
          style={{
            transformOrigin: "top",
            transform: `scale(${scrollOffset < headerStickyCutoff ? 1 : 1 - (scrollOffset - headerStickyCutoff) / 300 < 0.42 ? 0.42 : 1 - (scrollOffset - headerStickyCutoff) / 300})`,
          }}
          className={`flex flex-col  items-center justify-center w-full py-4 border-b border-b-primary border-opacity-50 `}
        >
          <img src={logo} className={`max-w-[90%] lg:max-w-[40%]`} />
          <p className="text-primary text-xl mt-6">
            A <p className="inline font-bold">7 day technology detox</p>
            <br /> with <p className="inline font-bold text-accent">7 simple rules</p>
          </p>
        </div>
      </header>
    </>
  );
};
