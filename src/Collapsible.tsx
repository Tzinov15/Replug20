import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface CollapsibleProps {
  header: React.ReactNode;
  content: React.ReactNode;
  onClick: () => void;
}
export const Collapsible: React.FC<CollapsibleProps> = ({ header, content, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const closeAccordion = () => setIsOpen(false);

  return (
    <div
      onClick={() => onClick()}
      className="bg-background w-full z-50 border-b border-lotus-500 border-opacity-50 my-4"
    >
      <div
        className="grid grid-cols-[1fr_20px] h-fit cursor-pointer items-center z-50 w-full  px-4 py-2 bg-background  rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {header}
        <ChevronDownIcon
          className={`max-w-6 text-tertiary w-6 h-6 transition-transform duration-30 delay-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[400px]" : "max-h-0"} px-2`}>
        {content}
      </div>
    </div>
  );
};
