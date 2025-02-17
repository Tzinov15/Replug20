import React, { useEffect, useState } from "react";

import { DesktopSideBar } from "./DesktopSideBar";
import { MobileSideBar } from "./MobileSideBar";
import { MobileTopBar } from "./MobileTopBar";

export interface SidebarLayoutProps {
  sidePanelContent: React.ReactNode;
  collapsedSidePanelContent?: React.ReactNode;
  mainContent: React.ReactNode;
  user: null | {
    imageSrc: string;
    title: string;
    logout: () => void;
    orgName?: string;
  };
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  invertedTheme?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
}
export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  sidePanelContent,
  collapsedSidePanelContent,
  mainContent,
  user,
  sidebarOpen,
  setSidebarOpen,
  invertedTheme = false,
  onCollapseChange,
}) => {
  const LOCAL_STORAGE_KEY = "frontera-health__sidebar-collapse-status";

  const [collapsed, setCollapsed] = useState<boolean>(() => {
    const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(collapsed));
    if (onCollapseChange) {
      onCollapseChange(collapsed);
    }
  }, [collapsed, onCollapseChange]);

  const handleToggle = () => {
    setCollapsed((prev) => {
      const newCollapsedState = !prev;
      if (onCollapseChange) {
        onCollapseChange(newCollapsedState);
      }
      return newCollapsedState;
    });
  };

  return (
    <div className="h-full overflow-x-visible">
      {/* This only renders / shows on viewport below 1024px */}
      <MobileSideBar
        user={user}
        sidePanelContent={sidePanelContent}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        invertedTheme={invertedTheme}
      />
      {/* This only renders / shows on viewport below 1024px */}
      <MobileTopBar user={user} setSidebarOpen={setSidebarOpen} invertedTheme={invertedTheme} />

      {/* This only renders / shows on viewport above 1024px */}
      <DesktopSideBar
        user={user}
        sidePanelContent={sidePanelContent}
        collapsedSidePanelContent={collapsedSidePanelContent}
        invertedTheme={invertedTheme}
        collapsed={collapsed}
        setCollapsed={handleToggle}
      />

      {/* Main Body Content - always shows, up to the client that passes in `mainContent` to ensure it's mobile responsive */}
      <main
        data-testid="sidebar-main-content"
        className={`h-full ${invertedTheme ? "bg-background-secondary" : "bg-background"} py-10 ${collapsed ? "lg:pl-[72px]" : "lg:pl-72"} transition-all duration-[400ms]`}
      >
        <div className={`h-full${invertedTheme ? "bg-background-secondary" : "bg-white"} lg:px-8" `}>{mainContent}</div>
      </main>
    </div>
  );
};
