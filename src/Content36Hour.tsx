import { PropsWithChildren } from "react";

import { Splash36Hour } from "./Splash36Hour";

interface SectionProps extends PropsWithChildren {
  title: string;
}
export const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mt-6 mb-1  mx-auto text-center px-4 lg:px-10">
    <h2 className="text-2xl font-bold text-highlight mb-0">{title}</h2>
    <div className="text-lg text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="mt-6 mb-1 bg-primary  mx-auto text-center px-6 py-2 rounded-xl lg:px-10">
      <h2 className="text-xl font-bold text-highlight mb-0">{title}</h2>
    </div>
  );
};

export const FAQHeading = ({ title }: { title: string }) => {
  return (
    <div className="mt-6 mb-1 bg-lotus-500  mx-auto text-center px-6 py-2 rounded-xl lg:px-10">
      <h2 className="text-xl font-bold text-lotus-300 mb-0">{title}</h2>
    </div>
    // <div className="mt-6 mb-1 bg-blue-smoke-500  mx-auto text-center px-6 py-2 rounded-xl lg:px-10">
    //   <h2 className="text-xl font-bold text-blue-smoke-300 mb-0">{title}</h2>
    // </div>
  );
};

export const Rule = ({
  title,
  description,
  anchor,
}: {
  anchor: string;
  title?: string;
  description: React.ReactNode;
  content?: React.ReactNode;
}) => {
  return (
    <a className="block" href={anchor}>
      <div className="w-full flex items-center my-[6px] ">
        {title ? (
          <div className="flex items-center justify-center  bg-highlight text-richBlack rounded-full h-8 w-8 min-h-8 left-4 min-w-8">
            <b>{title}</b>
          </div>
        ) : null}
        <div
          className={`bg-background ${title ? "ml-2" : ""} px-2 py-2 rounded-lg text-richBlack lg:min-h-10 relative flex items-center justify-center lg:justify-start w-full lg:w-full`}
        >
          <p className="">{description}</p>
        </div>
      </div>
    </a>
  );
};

export const Content36Hour = ({ setMode }: { setMode: () => void }) => {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-richBlack text-center ">
      <Splash36Hour setMode={setMode} />
    </div>
  );
};
