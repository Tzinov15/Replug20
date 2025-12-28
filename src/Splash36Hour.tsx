import { datadogRum } from "@datadog/browser-rum";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { fireConfetti } from "./Components/confetti";
import { Rule, Section } from "./Content36Hour";
import { Header36Hour } from "./Header36Hour";
import drivingIcon from "./driving2.png";
import drivingPic from "./driving.jpg";
import focusIcon from "./focus2.png";
import messageScreenshot from "./messageScreenshot.jpg";
import settingsIcon from "./settings-icon.png";

interface IndicatorIconProps {
  src: string;
}
const IndicatorIcon: React.FC<IndicatorIconProps> = ({ src }) => {
  return <img src={src} className="min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10" />;
};

interface SplashProps {
  setMode: () => void;
}
export const Splash36Hour: React.FC<SplashProps> = ({ setMode }) => {
  const [textCopied, setTextCopied] = useState(false);
  return (
    <div className="px-4 max-w-4xl mx-auto">
      <Header36Hour />

      <div className="p-2 flex items-center cursor-pointer text-background hover:text-accent transition-all">
        <ArrowLeftIcon className=" w-6 h-6" />
        <p onClick={() => setMode()} className="">
          Go back to Replug20
        </p>
      </div>

      <h3 className="text-highlight text-xl my-12 mx-8 font-bold">
        While the 7 day Replug detox is about curbing and reintegrating phone habits for long term change, this 36 hour
        hiatus is about going entirely off the grid for a day and a half to reset in a way that remains responsible and
        reachable.
        <br />
        <br />
        No more excuses that "being available" is why you can't take a break from technology. Here's how to do it:
      </h3>

      <hr className="border-t border-background w-[90vw] left-0 mx-auto my-8" />

      <Rule
        anchor={"helllo"}
        description={"Setup an Auto Reply message so that others get notified that you're off the grid"}
        title="1"
      />

      <p className="text-background text-sm opacity-50 mt-4">
        On iOS, this can be done by repurposing the Do Not Disturb Driving mode and changing the default auto-reply
        message
      </p>

      <div className="flex items-center justify-around w-full my-4">
        <div className="flex flex-col items-center">
          <IndicatorIcon src={settingsIcon} />
          <p className={`text-xs md:text-md my-1 `} style={{ color: "white" }}>
            Settings
          </p>
        </div>

        <ArrowRightIcon className="text-background w-4 h-4" />

        <div className="flex flex-col items-center">
          <IndicatorIcon src={focusIcon} />
          <p className={`font-bold text-xs md:text-md my-1 `} style={{ color: "#575ACE" }}>
            Focus
          </p>
        </div>
        <ArrowRightIcon className="text-background w-4 h-4" />

        <div className="flex flex-col items-center">
          <IndicatorIcon src={drivingIcon} />
          <p className={`text-xs md:text-md my-1 `} style={{ color: "#33379D" }}>
            Driving
          </p>
        </div>
        <ArrowRightIcon className="text-background w-4 h-4" />
        <p className="bg-[#151517] text-white p-4 rounded-lg">Auto-Reply</p>
      </div>

      <p className="text-background text-sm opacity-50 mt-6">It should look something like this when you're done</p>

      <div className="flex items-center justify-between w-full my-4">
        <img src={messageScreenshot} className="w-[60vw] lg:w-[30vw] h-auto my-8" />
        <p
          className="p-4 bg-richBlack text-background hover:text-highlight cursor-pointer rounded-lg"
          onClick={async () => {
            if (typeof window !== undefined) {
              window.navigator.clipboard.writeText(
                `Hi! You’ve reached me on a day where I'm taking a break from technology for 36 ohurs. Feel free to call, I'd love to chat and will pick up, otherwise I won't see your text until Sunday at 8:00am and will get back to you then. Thanks! 😎. If you're curious about what I'm doing and why, and want to learn more, checkout https://replug20.com/tech-hiatus`,
              );
              fireConfetti({ colors: ["#E3C892", "#F5F1E0"], duration: 0.1, particleCount: 50 });
              setTextCopied(true);
              setTimeout(() => setTextCopied(false), 3000);
              datadogRum.addAction("autoReplyMessageCopied");
            }
          }}
        >
          {textCopied ? "Copied!" : "Copy this message"}
        </p>
      </div>

      <p className="text-background text-sm opacity-50 mt-2 mb-6">
        If you have an Android phone and are willing to provide us the steps to achieve this, reach out at
        replug7challenge@gmail.com
      </p>

      <Rule
        anchor={"helllo"}
        description={"Enable Driving Mode so that all inbound messages get this auto response"}
        title="2"
      />

      <img src={drivingPic} className="w-[70vw] lg:w-[30vw]  h-auto mx-auto my-8" />
      <p className="text-background text-sm opacity-50 my-6">
        Now, you can ask a friend or family member to text you and ensure that a.) you don't get a ping and b.) they get
        the auto reply explaining what you are doing
      </p>

      <Rule
        anchor={"helllo"}
        description={"Turn on ringer on loud and keep phone on you at all times to stay reachable for emergencies"}
        title="3"
      />

      <p className="text-background text-sm opacity-50 my-6">
        Despite going "off the grid", this is the most important step to being able to do something like an Unplug day
        without stressing out anyone who might need to reach you in an emergency (friends, loved ones, etc). <br />{" "}
        <br />
        Should you <i>need</i> to be reached, you're available, otherwise, you now have the greenlight to not check your
        phone or light it up a single time for the next 36 hours
      </p>

      <Rule
        anchor={"helllo"}
        description={"Go the next 36 hours with no TV, no phone, no tablets, no smart watches, no video games, etc"}
        title="4"
      />

      <p className="text-background text-sm opacity-50 mt-6">
        Just about anything - cooking something new, going for a walk, meditating, taking a nap, reading a book,
        organizing your closet, donating clothes, driving to a park, etc - is fair game. The only rule is that it can't
        involve a screen or a screen-like device
      </p>

      {/* <p className="text-background" onClick={() => setMode()}>
        Back to Replug20
      </p> */}

      <Section title="Some Tips">
        <p className="text-background text-xl mt-6">
          Going 36 hours without any kind of screens requires a good amount of prep ahead of time. Here are some things
          that have helped us in the past
        </p>

        <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />

        <ul className="list-disc ml-4 marker:text-highlight">
          <li>
            <p className="text-highlight text-[16px]">Printing out recipes ahead of time</p>
          </li>
          <li>
            <p className="text-highlight text-[16px]">Printing out driving instructions ahead of time</p>
          </li>
          <li>
            <p className="text-highlight text-[16px]">
              Coordinating with any plans and letting them know to call for changes in plans, otherwise you will show up
              at the arranged time & place
            </p>
          </li>
          <li>
            <p className="text-highlight text-[16px]">Tell friends and family ahead of time</p>
          </li>
        </ul>
        <div className="h-40" />
      </Section>
    </div>
  );
};
