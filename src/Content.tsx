import { datadogRum } from "@datadog/browser-rum";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { fireConfetti } from "./Components/confetti";
import { FAQItem, QuestionsAndAnswers } from "./FAQItem";
import { Splash } from "./Splash";
import drivingIcon from "./driving2.png";
import drivingPic from "./driving.jpg";
import focusIcon from "./focus2.png";
import messageScreenshot from "./messageScreenshot.jpg";
import settingsIcon from "./settings-icon.png";

interface SectionProps extends PropsWithChildren {
  title: string;
}
export const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mt-6 mb-1  mx-auto text-center px-4 lg:px-10">
    <h2 className="text-2xl font-bold text-primary mb-0">{title}</h2>
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

const NotificationItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <li className="my-8 text-left mx-auto grid grid-cols-5 border-b items-center border-b-primary border-opacity-50 w-full pb-4 ">
      <p className="font-[700] text-lg text-primary mr-8 col-span-2">{title}</p>
      <p className="text-black opacity-60 text-[14px] col-span-3">{description}</p>
    </li>
  );
};

export const Rule = ({
  title,
  description,
  anchor,
  inverted = false,
}: {
  anchor: string;
  title?: string;
  description: React.ReactNode;
  content?: React.ReactNode;
  inverted?: boolean;
}) => {
  return (
    <a
      className="block"
      href={anchor}
      onClick={() => {
        datadogRum.addAction("ruleClick", { ruleClick: { rule: title } });
      }}
    >
      <div className="w-full flex items-center my-[6px] ">
        {title ? (
          <div
            className={`flex items-center justify-center ${inverted ? "bg-accent text-highlight" : "bg-primary text-highlight"} rounded-full h-8 w-8 min-h-8 left-4 min-w-8 shadow-md active:shadow-sm active:scale-[0.96] transition-transform transition-shadow duration-150 cursor-pointer`}
          >
            <b className="text-xs">{title}</b>
          </div>
        ) : null}
        <div
          className={`${inverted ? "bg-highlight text-accent" : "bg-accent text-highlight"} ${title ? "ml-2" : ""} px-2 py-2 rounded-lg lg:min-h-10 relative flex items-center justify-center lg:justify-start w-full lg:w-full shadow-[0_4px_7px_rgba(0,0,0,0.5)] active:shadow-[0_2px_6px_rgba(0,0,0,0.12)] active:scale-[0.98] transition-transform transition-shadow duration-150 cursor-pointer`}
        >
          <p className="text-[14px]">{description}</p>
        </div>
      </div>
    </a>
  );
};

interface IndicatorIconProps {
  src: string;
}
const IndicatorIcon: React.FC<IndicatorIconProps> = ({ src }) => {
  return <img src={src} className="min-w-10 min-h-10 max-w-10 max-h-10 w-10 h-10" />;
};

export const Content = () => {
  const firstRuleRef = useRef<HTMLDivElement>(null);
  const secondRuleRef = useRef<HTMLDivElement>(null);
  const thirdRuleRef = useRef<HTMLDivElement>(null);
  const fourthRuleRef = useRef<HTMLDivElement>(null);
  const fifthRuleRef = useRef<HTMLDivElement>(null);
  const sixthRuleRef = useRef<HTMLDivElement>(null);
  const seventhRuleRef = useRef<HTMLDivElement>(null);

  const [textCopied, setTextCopied] = useState(false);

  const rulesSectionRef = useRef<HTMLDivElement>(null);

  const firstRulePercentageOfPageDown = (firstRuleRef.current?.offsetTop || 0) / document.body.scrollHeight;
  const secondRulePercentageOfPageDown = (secondRuleRef.current?.offsetTop || 0) / document.body.scrollHeight;
  const thirdRulePercentageOfPageDown = (thirdRuleRef.current?.offsetTop || 0) / document.body.scrollHeight;
  const fourthRulePercentageOfPageDown = (fourthRuleRef.current?.offsetTop || 0) / document.body.scrollHeight;
  const fifthRulePercentageOfPageDown = (fifthRuleRef.current?.offsetTop || 0) / document.body.scrollHeight;
  const sixthRulePercentageOfPageDown = (sixthRuleRef.current?.offsetTop || 0) / document.body.scrollHeight;
  const seventhRulePercentageOfPageDown = (seventhRuleRef.current?.offsetTop || 0) / document.body.scrollHeight;

  const stepsSectionRef = useRef<HTMLDivElement>(null);

  const stepsSectionIsInView = (stepsSectionRef.current?.getBoundingClientRect().top || 0) < window.innerHeight;

  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const totalPageHeight = document.body.scrollHeight - window.innerHeight;

  const percentageOfScreenVerticallyScrolled = scrollOffset / totalPageHeight;

  // const ruleSectionHeight = (rulesSectionRef.current?.offsetTop || 0) + (rulesSectionRef.current?.scrollHeight || 0);
  // const percentageOfRuleSectionVerticallyScrolled = scrollOffset / ruleSectionHeight;

  const percentageOfRuleSectionVerticallyScrolled = scrollOffset / (rulesSectionRef.current?.scrollHeight || 0);

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

  const accordionMarkers = [
    { title: "1", percentageDownThePage: firstRulePercentageOfPageDown },
    { title: "2", percentageDownThePage: secondRulePercentageOfPageDown },
    { title: "3", percentageDownThePage: thirdRulePercentageOfPageDown },
    { title: "4", percentageDownThePage: fourthRulePercentageOfPageDown },
    { title: "5", percentageDownThePage: fifthRulePercentageOfPageDown },
    { title: "6", percentageDownThePage: sixthRulePercentageOfPageDown },
    { title: "7", percentageDownThePage: seventhRulePercentageOfPageDown },
  ];

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-background text-center ">
      <Splash
        percentageOfRuleSectionVerticallyScrolled={percentageOfRuleSectionVerticallyScrolled}
        markers={accordionMarkers}
        percentageOfScreenVerticallyScrolled={percentageOfScreenVerticallyScrolled}
        stepsSectionIsInView={stepsSectionIsInView}
      />
      <div ref={rulesSectionRef} className="mx-auto text-center">
        <Section title="The Rules Explained">
          <div className="text-left mx-auto max-w-2xl">
            <strong id="rulenumber1" ref={firstRuleRef} className="scroll-mt-20" />
            <Rule
              title="1"
              anchor="#rulenumber1"
              description={
                <>
                  No screens within <b>60 minutes of waking up</b>
                </>
              }
            />
            <p className="mt-8">Treat the first 60 minutes of your day as sacred and intentional.</p>
            <br />
            <p>
              The following types of notifications / content that are often consumed first thing in the morning can
              negatively influence your mood and set the tone for the day. While they are fine - and sometimes
              neccessary - to consume throughout the day, there is no need to subject the fresh start of a new day to
              emotions wrapped up in this content. This is why for the first 60 minutes, we are removing:
            </p>
            <ul>
              <NotificationItem title="News" description="Often provokes anxiety, despair, or rage" />
              <NotificationItem
                title="Work notifications (email, Slack, calendar reminders)"
                description="Often invokes stress and instills an illusion of urgency"
              />
              <NotificationItem
                title="Stock market updates"
                description="Often trigger feelings of regret, stress, or greed"
              />
              <NotificationItem
                title="Financial notifications (credit card statements, bank alerts)"
                description="Can evoke shame, worry, or despair"
              />
              <NotificationItem
                title="Texts (or the lack thereof)"
                description="Can lead to feelings of sadness, loneliness, or pressure to respond"
              />
              <NotificationItem
                title="Dating app notifications"
                description="May trigger shame, despair, or self-doubt"
              />
              <NotificationItem
                title="Social media (Reddit, Instagram, Snapchat)"
                description="Can often instill FOMO, loneliness, or rage by surfacing curated realities and polarizing opinions"
              />
              <NotificationItem title="Sports Scores / Betting Updates" description="Can instill disappointment" />
              <NotificationItem
                title="Short-form content (TikTok, YouTube Reels)"
                description="Encourages a cycle of dopamine-driven and instant gratification-seeking behaviors"
              />

              <p>
                While many of the above notifications can induce positive emotions - your favorite team winning a game,
                a text from a long ago friend, a bonus at work - they are not predictable, and the goal with this rule
                is to take ownership over how our day starts.
              </p>
              <br />
              <p>
                Instead one can go on an early morning walk, do yoga, cook a meal for later in the day, journal or read
                a book.
              </p>
            </ul>
          </div>

          <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />
          <div className="text-left mx-auto max-w-2xl">
            <strong id="rulenumber2" ref={secondRuleRef} className="scroll-mt-20" />
            <Rule anchor="#rulenumber2" title="2" description={<>No screens during meals</>} />
            <p className="mt-8">
              Treat each meal as an opportunity to slow down and surface from the rush that is constantly being "on" all
              the time.
            </p>
            <br />
            {/* <p>
                  There’s an old Zen saying: “If you don’t have time to meditate for five minutes, you should sit and meditate
                  for two hours.”
                </p> */}
            <p>
              Idle time sitting in presence without a distraction will initially be anxiety provoking, but once you come
              out the other side, see if you can approach what comes up within you with curiosity and compassion.
            </p>
            <br />

            <p>
              {" "}
              Setting aside 15–20 minutes for a screen-free meal can feel impossible, especially in a world and age
              where down time is seen as wasted or eating alone is uncomfortable, yet it is one of the most available
              moments we have to pause and connect with ourselves.
            </p>

            <br />
            <p>
              Over these 7 days, use meals as a time to pause, recharge, and reconnect—with your food, your thoughts,
              and the present moment.
            </p>
          </div>

          <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />
          <div className="text-left mx-auto max-w-2xl">
            <strong id="rulenumber3" ref={thirdRuleRef} className="scroll-mt-20" />
            <Rule anchor="#rulenumber3" title="3" description={<>No notifications except calls, messages, work</>} />
            <p className="mt-8">
              Treat these 7 days as an experiment in reducing notification overload and relaxing in longer periods of
              uninterrupted time.
            </p>
            <br />
            <p>
              We are as connected as ever, and yet often as anxious as we've ever been, as unable to focus as we've ever
              been, and as irritable as we've ever been. Free yourself from the constant chatter and regain a sense of
              calm.
            </p>
            <br />
            <p>
              Try to utilize Do Not Disturb more often and try to batch how often you check and respond to messages so
              that instead of reacting in the moment to every message, you can proactively choose when to engage and
              respond.
            </p>
          </div>

          <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />
          <div className="text-left mx-auto max-w-2xl">
            <strong id="rulenumber4" ref={fourthRuleRef} className="scroll-mt-20" />
            <Rule anchor="#rulenumber4" title="4" description={<>No infinitely scrolling apps</>} />
            <p className="mt-8">
              Zombie scrolling, brain-rotting, dopamine looping, pulling the slot-machine lever, whatever you want to
              call it, a deep truth we all know is that the pattern of "infinite scroll" is profoundly addictive and
              potent. The internet has provided us with a near endless number of options for content that we can scroll
              forever.
            </p>
            <br />
            <p>
              Much like the slot machines of Vegas, every refresh, every flick of the thumb, every new app provides new
              stimulation, and is thus incredibly consuming and addicting. The goal here is to entirely eliminate any
              apps that have the concept of "infinitely providing new content".
            </p>
            <NotificationItem
              title="Social Media"
              description="Facebook / Snapchat / Reddit / Twitter / TikTok / Snapchat / LinkedIn"
            />
            <NotificationItem title="Fitness Apps" description="Strava / Peloton activity feeds" />
            <NotificationItem title="Sports Scores" description="NBA / NFL / MLB / NHL / MLS / etc" />
            <NotificationItem title="News" description="News websites, news on tv, news podcasts, etc" />
            <NotificationItem title="Entertainment" description="9GAG / iFunny / Imgur / YouTube Shorts / YouTube" />
            <NotificationItem title="Shopping" description="Amazon / Groupon / Wayfair" />
            <NotificationItem title="Dating Apps" description="Hinge / Tinder / Bumble" />
            <p>
              Often times when faced with an uncomfortable state of being - boredom, angst, anxiety, stress, fatigue,
              etc - one of our go to coping mechanisms is the endless set of dopamine that infinite scroll provides. So
              often it doesn't matter <i>what</i> it is that we consume, as long as it is novel and new - something all
              of the above apps are designed to provide.
            </p>
            <br />
            <p>
              For this reason, we are with one-fell-swoop removing <i>all</i> such sources of numbing to return to
              ourselves and our experience instead.
            </p>
          </div>

          <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />
          <div className="text-left mx-auto max-w-2xl">
            <strong id="rulenumber5" ref={fifthRuleRef} className="scroll-mt-20" />
            <Rule anchor="#rulenumber5" title="5" description={<>No idle phone usage</>} />
            <p className="mt-8">
              Many of us have developed a tick-like habit of reaching for our phones during every idle moment in our day
              and getting lost in the digital stimulus at our fingertips. This rule is about breaking that automatic
              response and reclaiming agency over our time.
            </p>
            <br />
            <br />
            <b>Examples of passive phone usage</b>
            <br />
            <ul className="list-disc ml-4 marker:text-primary">
              <li>Checking your phone while waiting in line at Chipotle</li>
              <li>Scrolling while heating up food in the microwave</li>
              <li>Mindlessly browsing while sitting on the porcelain throne in the bathroom</li>
              <li>Opening your phone while in the elevator</li>
              <li>Checking your phone while at a red light or in traffic</li>
              <li>Opening your phone as soon as the commercial break starts</li>
            </ul>
            <br />
            <p>
              Replug is about regaining our agency over our time. Every time we let an idle moment drive us to pull out
              our phones, we are letting our attention and presence get hijacked by an external force.
            </p>
            <br />
            <p>
              An important thing to note about this rule:{" "}
              <b className="text-primary">
                it is highly, highly likely that you will slip up on at least one occasion, especially in the beginning,
                on this rule.
              </b>{" "}
              Like any other deeply ingrained behavior, it will take some time to go through the awareness, interrupt,
              and modify cycle of this habit, and that's ok.
            </p>
            <br />
            <p>
              Treat these 7 days as an opportunity to drop in and start noticing what triggers pull out the screen, and
              why.
            </p>
          </div>

          <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />
          <div className="text-left mx-auto max-w-2xl">
            <strong id="rulenumber6" ref={sixthRuleRef} className="scroll-mt-20" />
            <Rule anchor="#rulenumber6" title="6" description={<>No screens within 60 minutes of bedtime</>} />
            <p className="mt-8">
              Treat the last 60 minutes of your day as relaxing and restorative. Again avoid all forms of digital
              engagement to carve out a sanctuary of an evening before bed.
            </p>
            <br />
            <p>
              Use this time instead to connect with family or partners, journal, stretch, set intentions for the next
              day, take a bath, emotionally regulate, and slow down. We so often pile up anxiety throughout the day from
              work stressors, life stressors, and todo-lists and rarely step off the hamster wheel.
            </p>
          </div>

          <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />
          <div className="text-left mx-auto max-w-2xl">
            <strong id="rulenumber7" ref={seventhRuleRef} className="scroll-mt-20" />
            <Rule anchor="#rulenumber7" title="7" description={<>0 technology Sunday</>} />
            <p className="mt-8">
              While the 7 day Replug detox is about curbing and reintegrating phone habits for long term change, this 36
              hour hiatus is about going entirely off the grid for a day and a half to reset in a way that remains
              responsible and reachable.
            </p>
            <br />
            <p>
              No more excuses that "being available" is why you can't take a break from technology. Here's how to do it:
            </p>
            <br />

            <h3 className="text-primary font-bold text-lg mt-6 mb-4">
              1. Setup an Auto Reply message so that others get notified that you're off the grid
            </h3>
            <p className="mb-4">
              On iOS, this can be done by repurposing the Do Not Disturb Driving mode and changing the default
              auto-reply message.
            </p>

            <div className="flex items-center justify-around w-full my-4">
              <div className="flex flex-col items-center">
                <IndicatorIcon src={settingsIcon} />
                <p className="text-xs md:text-md my-1 text-gray-700">Settings</p>
              </div>
              <ArrowRightIcon className="text-primary w-4 h-4" />
              <div className="flex flex-col items-center">
                <IndicatorIcon src={focusIcon} />
                <p className="font-bold text-xs md:text-md my-1 text-primary">Focus</p>
              </div>
              <ArrowRightIcon className="text-primary w-4 h-4" />
              <div className="flex flex-col items-center">
                <IndicatorIcon src={drivingIcon} />
                <p className="text-xs md:text-md my-1 text-gray-700">Driving</p>
              </div>
              <ArrowRightIcon className="text-primary w-4 h-4" />
              <p className="bg-accent text-highlight p-4 rounded-lg">Auto-Reply</p>
            </div>

            <p className="text-sm text-gray-600 mt-6 mb-4">It should look something like this when you're done:</p>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full my-4 gap-4">
              <img src={messageScreenshot} className="w-[60vw] lg:w-[30vw] h-auto my-8" />
              <p
                className="p-4 bg-richBlack text-background hover:text-highlight cursor-pointer rounded-lg"
                onClick={async () => {
                  if (typeof window !== "undefined") {
                    window.navigator.clipboard.writeText(
                      `Hi! You've reached me on a day where I'm taking a break from technology for 36 hours. Feel free to call, I'd love to chat and will pick up, otherwise I won't see your text until Sunday at 8:00am and will get back to you then. Thanks! 😎. If you're curious about what I'm doing and why, and want to learn more, checkout https://replug20.com/tech-hiatus`,
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

            <p className="text-sm text-gray-600 mt-2 mb-6">
              If you have an Android phone and are willing to provide us the steps to achieve this, reach out at
              replug7challenge@gmail.com
            </p>

            <h3 className="text-primary font-bold text-lg mt-6 mb-4">
              2. Enable Driving Mode so that all inbound messages get this auto response
            </h3>
            <img src={drivingPic} className="w-[70vw] lg:w-[30vw] h-auto mx-auto my-8" />
            <p className="mb-4">
              Now, you can ask a friend or family member to text you and ensure that a.) you don't get a ping and b.)
              they get the auto reply explaining what you are doing.
            </p>

            <h3 className="text-primary font-bold text-lg mt-6 mb-4">
              3. Turn on ringer on loud and keep phone on you at all times to stay reachable for emergencies
            </h3>
            <p className="mb-4">
              Despite going "off the grid", this is the most important step to being able to do something like an Unplug
              day without stressing out anyone who might need to reach you in an emergency (friends, loved ones, etc).
            </p>
            <br />
            <p className="mb-4">
              Should you <i>need</i> to be reached, you're available, otherwise, you now have the greenlight to not
              check your phone or light it up a single time for the next 36 hours.
            </p>

            <h3 className="text-primary font-bold text-lg mt-6 mb-4">
              4. Go the next 36 hours with no TV, no phone, no tablets, no smart watches, no video games, etc
            </h3>
            <p className="mb-4">
              Just about anything - cooking something new, going for a walk, meditating, taking a nap, reading a book,
              organizing your closet, donating clothes, driving to a park, etc - is fair game. The only rule is that it
              can't involve a screen or a screen-like device.
            </p>

            <div className="mt-8">
              <h3 className="text-primary font-bold text-xl mb-4">Some Tips</h3>
              <p className="mb-4">
                Going 36 hours without any kind of screens requires a good amount of prep ahead of time. Here are some
                things that have helped us in the past:
              </p>
              <ul className="list-disc ml-4 marker:text-primary">
                <li className="mb-2">Printing out recipes ahead of time</li>
                <li className="mb-2">Printing out driving instructions ahead of time</li>
                <li className="mb-2">
                  Coordinating with any plans and letting them know to call for changes in plans, otherwise you will
                  show up at the arranged time & place
                </li>
                <li className="mb-2">Tell friends and family ahead of time</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
      <hr className="border-t-2 border-secondary w-3/4 mx-auto my-8" />

      <div className="text-left mx-auto max-w-2xl">
        <div ref={stepsSectionRef} className="mx-auto text-center">
          <Section title="Steps to Get Started">
            <div className="flex flex-col items-start justify-start">
              <Heading title="Pick a Start Date" />
              <strong id="stepnumber1" className="scroll-mt-20" />
              <p className="mt-4">
                Look at your calendar, and decide when it makes most sense to start the 7 day detox. Keep in mind
                existing committiments that come into conflict with the rules. Pick a start date, mark it on your
                calendar
              </p>
              <Heading title="Prepare your Phone" />
              <strong id="stepnumber2" className="scroll-mt-20" />
              <br />
              <p>
                Set aside time the day before you start to delete unneccessary apps, update notification settings,
                communicate with any online connections (dating apps, social media DMs, etc) that you will be
                unavailable over those platforms
              </p>
              <br />
              <Heading title="Communicate your Commitment" />
              <strong id="stepnumber3" className="scroll-mt-20" />
              <p className="mt-4">
                Tell your friends and family what you will be doing and why, setup in person hangs, and invite friends
                to come along and join you! Some will, some will consider it, and some will fight it.
              </p>

              <br />
              <p>
                {" "}
                This is where it is likely you will get push back; people will say you're crazy, people will project
                their own insecurities onto you, people will say you're being dramatic, people will say this is over the
                top, people will say you're being extreme. This is normal. Stick to your guns and recognize you're doing
                something for yourself.{" "}
              </p>
              <br />
              <p>
                <i className="text-primary font-bold">
                  "Whenever you find yourself on the side of the majority, it is time to pause and reflect"
                </i>{" "}
                <p className="inline ml-2">- Mark Twain</p>
              </p>
              <br />

              <Heading title="Identify your Why" />
              <strong id="stepnumber4" className="scroll-mt-20" />
              <p className="mt-4">
                As confident as we are in how transformative these 7 days will be, we are equally as confident in their
                challenging nature.{" "}
              </p>
              <br />
              <p>
                Our phone habits have become so deeply and profoundly ingrained in us that shifting them takes momentous
                willpower. Like any other addiction, it will get harder before it gets better. Spend some time
                reflecting on why you're doing this.
              </p>
              <br />

              <Heading title="Write to your future self" />
              <strong id="stepnumber5" className="scroll-mt-20" />
              <p className="mt-4">
                Take inventory of where you currently are at in terms of sleep quality, average anxiety levels
                throughout the day, current screen time, motivation levels, and overall sense of connection with
                yourself and others.
              </p>
              <br />
              <p className="mt-4">
                Make a commitment to your future self - the future self that could be slightly less anxious, slightly
                more present, and slightly more intentional - that you will try your best to follow these 6 rules over
                the next 7 days.
              </p>
              <br />
            </div>
          </Section>
        </div>
        {/* <Section title="Do I need to buy anything?">
        No! However, some people have said the following things are useful and enhance their experiences: a separate
        alarm clock, journals, physical paper calendars, printers, books,
      </Section> */}

        <Section title="">
          <FAQHeading title="FAQ - [Work In Progress]" />

          <ul className="list-disc ml-0 marker:text-tertiary">
            {QuestionsAndAnswers.map((qa) => (
              <FAQItem key={qa.question} question={qa.question} answer={qa.answer} />
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Questions?">
        Contact us at
        <code className="block font-bold text-primary text-xl p-4 ">replug7challenge@gmail.com</code>
      </Section>
    </div>
  );
};
