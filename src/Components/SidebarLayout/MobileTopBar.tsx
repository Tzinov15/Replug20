import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";

import { SidebarLayoutProps } from "./SidebarLayout";

interface Props extends Pick<SidebarLayoutProps, "setSidebarOpen" | "user" | "invertedTheme"> {}
export const MobileTopBar: React.FC<Props> = ({ setSidebarOpen, invertedTheme }) => {
  // The Top Nav Bar On Mobile
  return (
    <div
      className={`sticky top-0 z-40 flex items-center justify-between gap-x-6 border-b ${invertedTheme ? "border-globemallow-100 bg-background" : "border-gray-300 bg-background-secondary"}  px-4 py-4 sm:px-6 lg:hidden`}
    >
      <button type="button" className="-m-2.5 p-2.5 text-gray-800 lg:hidden" onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-8 w-8 text-text-secondary" aria-hidden="true" />
      </button>
    </div>
  );
};
