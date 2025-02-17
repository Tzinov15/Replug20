import React from "react";

import { SidebarLayoutProps } from "./SidebarLayout";

interface Props
  extends Pick<SidebarLayoutProps, "user" | "sidePanelContent" | "invertedTheme" | "collapsedSidePanelContent"> {
  collapsed: boolean;
  setCollapsed: (c: boolean) => void;
}

export const DesktopSideBar: React.FC<Props> = ({ sidePanelContent, invertedTheme }) => {
  return (
    <div
      className={`hidden transition-all duration-[400ms] lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col`}
      data-testid="desktop-sidebar"
    >
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div
        className={`relative flex grow flex-col items-start overflow-x-visible border-r ${invertedTheme ? "border-globemallow-100 bg-background" : "bg-background"}`}
      >
        <div className={`flex max-h-[calc(100vh-192px)] grow  overflow-y-scroll px-6`}>{sidePanelContent}</div>
      </div>
    </div>
  );
};
