import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import { Rule, Section } from "./Content";
import { Header } from "./Header";
import logo from "./logo_yellow_20.png";

const RuleLight = ({
  title,
  description,
  anchor,
  onClick,
  scrolledPast,
}: {
  title: string;
  description: React.ReactNode;
  content?: React.ReactNode;
  anchor: string;
  onClick?: () => void;
  scrolledPast?: boolean;
}) => {
  return (
    <a className="block" href={anchor} onClick={onClick}>
      <div className="w-full flex items-center">
        <div
          className={`flex items-center justify-center mr-1  ${scrolledPast ? "bg-secondary text-woodland-400" : "bg-primary text-highlight"} transition-all duration-500 rounded-full h-6 w-6 min-h-6 left-4 min-w-6`}
        >
          <b className="text-xs">{title}</b>
        </div>{" "}
        <div
          className={`transition-all duration-500 ${scrolledPast ? "text-accent" : "text-primary"} rounded-lg text-sm font-extrabold  lg:min-h-10 flex items-center justify-start lg:justify-start w-full lg:w-full`}
        >
          <p className="">{description}</p>
        </div>
      </div>
    </a>
  );
};

interface AccordionProps {
  percentScrolled: number;
  markers: { title: string; percentageDownThePage: number }[];
}
const Accordion: React.FC<AccordionProps> = ({ percentScrolled, markers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeAccordion = () => setIsOpen(false);

  return (
    <div className="bg-background w-full z-50 shadow-lg">
      <div
        className="flex h-16 cursor-pointer items-center z-50 w-full justify-between p-4 bg-background  rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={logo}
          className="max-w-[50%] z-50"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <div className="flex items-center w-full justify-center bg-primary px-2 py-2 rounded-lg bg-opacity-20 ml-2">
          <h2 className="text-primary font-bold">The Rules</h2>
          <ChevronDownIcon
            className={`text-primary w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[400px]" : "max-h-0"} px-2`}>
        <div className="mb-2 gap-y-4 flex flex-col">
          <RuleLight
            scrolledPast={percentScrolled > markers[0].percentageDownThePage}
            anchor="#rulenumber1"
            title="1"
            description="No screens within 60 minutes"
            onClick={closeAccordion}
          />
          <RuleLight
            scrolledPast={percentScrolled > markers[1].percentageDownThePage}
            anchor="#rulenumber2"
            title="2"
            description="No screens during meals"
            onClick={closeAccordion}
          />
          <RuleLight
            scrolledPast={percentScrolled > markers[2].percentageDownThePage}
            anchor="#rulenumber3"
            title="3"
            description="No notifications except calls, messages, work"
            onClick={closeAccordion}
          />
          <RuleLight
            scrolledPast={percentScrolled > markers[3].percentageDownThePage}
            anchor="#rulenumber4"
            title="4"
            description="No infinitely scrolling apps"
            onClick={closeAccordion}
          />
          <RuleLight
            scrolledPast={percentScrolled > markers[4].percentageDownThePage}
            anchor="#rulenumber5"
            title="5"
            description="No idle phone usage"
            onClick={closeAccordion}
          />
          <RuleLight
            scrolledPast={percentScrolled > markers[5].percentageDownThePage}
            anchor="#rulenumber6"
            title="6"
            description="No screens within 60 minutes of bedtime"
            onClick={closeAccordion}
          />
        </div>
      </div>

      <div className="w-full h-[3px] bg-highlight relative flex items-center">
        <div
          className="h-[3px] bg-primary absolute left-0 "
          style={{
            width: `${percentScrolled * 100}%`,
          }}
        />
        {markers.map((marker) => (
          <div
            key={marker.title}
            className="py-6 absolute flex items-center justify-center"
            style={{
              left: `${marker.percentageDownThePage * 100}%`,
              // top: "-1px",
            }}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.scrollTo({
                  top: document.body.scrollHeight * marker.percentageDownThePage - 80,
                  behavior: "smooth",
                });
              }}
              key={marker.title}
              className={`transition-all absolute h-6 w-6 duration-500 ${marker.percentageDownThePage < percentScrolled ? "bg-accent" : "bg-primary"}  rounded-full flex items-center justify-center shadow-lg`}
            >
              <span
                className={`text-xs transition-all duration-500 ${marker.percentageDownThePage < percentScrolled ? "text-woodland-200" : "text-highlight"}   font-bold`}
              >
                {marker.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface SplashProps {
  markers: { title: string; percentageDownThePage: number }[];
  percentageOfScreenVerticallyScrolled: number;
}
export const Splash: React.FC<SplashProps> = ({ markers, percentageOfScreenVerticallyScrolled }) => {
  const matches = useMediaQuery("(min-width: 1024px)");

  const [scrollOffset, setScrollOffset] = useState<number>(0);
  const headerStickyCutoff = 650;

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
      <div
        className={`fixed z-50 top-0 w-full lg:w-fit flex flex-col  ${scrollOffset > headerStickyCutoff ? "opacity-100" : "opacity-0"} duration-500 transition-all`}
      >
        {matches ? (
          <div className="p-4">
            <h2 className="text-2xl font-bold text-[#A4853F] mb-0">The Rules</h2>
            <RuleLight anchor="#rulenumber1" title="1" description="No screens within 60 minutes" />
            <RuleLight anchor="#rulenumber2" title="2" description="No screens during meals" />
            <RuleLight anchor="#rulenumber3" title="3" description="No notifications except calls, messages, work" />
            <RuleLight anchor="#rulenumber4" title="4" description="No infinitely scrolling apps" />
            <RuleLight anchor="#rulenumber5" title="5" description="No idle phone usage" />
            <RuleLight anchor="#rulenumber6" title="6" description="No screens within 60 minutes of bedtime" />
          </div>
        ) : (
          <Accordion markers={markers} percentScrolled={percentageOfScreenVerticallyScrolled} />
        )}
      </div>
      <Header />

      <Section title="The Rules">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-0">
          <Rule
            anchor="#rulenumber1"
            title="1"
            description={
              <>
                No screens within <b>60 minutes of waking up</b>
              </>
            }
          />
          <Rule
            anchor="#rulenumber2"
            title="2"
            description={
              <>
                No screens <b>during meals</b>
              </>
            }
          />
          <Rule anchor="#rulenumber3" title="3" description={<>No notifications except calls, messages, work</>} />
          <Rule
            anchor="#rulenumber4"
            title="4"
            description={
              <>
                No <b>infinitely scrolling</b> apps
              </>
            }
          />
          <Rule
            anchor="#rulenumber5"
            title="5"
            description={
              <>
                No <b>idle</b> phone usage
              </>
            }
          />
          <Rule
            anchor="#rulenumber6"
            title="6"
            description={
              <>
                No screens within <b>60 minutes of bedtime</b>
              </>
            }
          />
        </div>
      </Section>

      <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />

      <h3 className="text-secondary text-xl my-12 mx-16 font-bold">
        Replug is about regaining agency over your <p className="inline text-primary">time</p> and{" "}
        <p className="inline text-primary">mental health</p> by trading <p className="inline line-through">screens</p>{" "}
        and <p className="inline line-through">notifications</p> for <b className="text-primary">presence</b> and
        <b className="text-primary"> intention</b>. <br />
        <br />
        Eliminate the noise for 20 days, and then with space, choose which habits you want to bring back.
      </h3>

      <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />
    </>
  );
};
