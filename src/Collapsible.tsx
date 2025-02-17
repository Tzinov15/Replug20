import { Disclosure, Transition } from "@headlessui/react";
import React, { useEffect } from "react";

export interface CollapsibleProps {
  defaultOpenState?: boolean;
  headerContent: React.ReactNode;
  bodyContent: React.ReactNode;
  headerIsClickable?: boolean;
}
export const Collapsible: React.FC<CollapsibleProps> = ({
  defaultOpenState = false,
  headerContent,
  bodyContent,
  headerIsClickable = false,
}) => {
  const [open, setOpen] = React.useState<boolean>(defaultOpenState);
  useEffect(() => {
    setOpen(defaultOpenState);
  }, [defaultOpenState]);
  return (
    <div className="relative my-2 flex w-full items-center rounded-md  ">
      <Disclosure defaultOpen={defaultOpenState}>
        {({}) => (
          <div className="flex w-full flex-col">
            <div
              className={`relative flex w-full items-center ${headerIsClickable ? "hover:cursor-pointer" : ""}`}
              onClick={() => {
                if (headerIsClickable) {
                  setOpen((o) => !o);
                }
              }}
            >
              {headerContent}
            </div>

            <Transition
              show={open}
              enter="transition transition-[max-height] duration-500 ease-in"
              enterFrom="transform max-h-0"
              enterTo="transform max-h-screen"
              leave="transition transition-[max-height] duration-500 ease-out"
              leaveFrom="transform max-h-screen"
              leaveTo="transform max-h-0"
            >
              <Disclosure.Panel static>
                <div className="flex flex-col ">{bodyContent}</div>
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};
