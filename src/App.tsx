/*

TODO
- Add the rules to the floating pinned header so that they are always visible (TBD on how this works on mobile)

*/
import { PropsWithChildren } from "react";

import "./App.css";
import { Collapsible } from "./Collapsible";
import { Header } from "./Header";
import { TheUpside } from "./TheUpside";

interface SectionProps extends PropsWithChildren {
  title: string;
}
export const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="my-6  mx-auto text-center px-6 lg:px-10">
    <h2 className="text-3xl font-bold text-[#A4853F] mb-6">{title}</h2>
    <div className="text-lg text-gray-700 leading-relaxed">{children}</div>
  </div>
);

const NotificationItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <li className="my-12 text-left mx-auto grid grid-cols-2">
      <span className="font-bold text-primary mr-8">{title}:</span>
      <span className="text-gray-700">{description}</span>
    </li>
  );
};

const Rule = ({
  title,
  description,
  content,
}: {
  title: string;
  description: React.ReactNode;
  content?: React.ReactNode;
}) => {
  return (
    <Collapsible
      headerIsClickable
      bodyContent={content}
      headerContent={
        <div className="bg-accent px-6 py-2 rounded-lg text-highlight relative flex items-start justify-start">
          <div className="flex items-center justify-center  bg-highlight text-accent rounded-full h-8 w-8 min-h-8 min-w-8">
            {title}
          </div>{" "}
          <span className="ml-2">{description}</span>
        </div>
      }
    />
  );
};

export const App = () => {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-background text-center relative">
      <Header />

      <Section title="The Rules">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
          <Rule
            title="1"
            description={
              <>
                No screens within <b>60 minutes of waking up</b>
              </>
            }
          />
          <Rule
            title="2"
            description={
              <>
                No screens <b>during meals</b>
              </>
            }
          />
          <Rule
            title="3"
            description={
              <>
                No notifications except <b>calls & messages</b>
              </>
            }
          />
          <Rule
            title="4"
            description={
              <>
                No <b>doom-scrolling</b> apps
              </>
            }
          />
          <Rule
            title="5"
            description={
              <>
                No <b>idle</b> phone usage
              </>
            }
          />
          <Rule
            title="6"
            description={
              <>
                No screens within <b>60 minutes of bedtime</b>
              </>
            }
          />
        </div>
        {/* <div className="bg-accent mt-4 px-6 py-2 rounded-lg text-highlight relative flex items-center justify-center">
          One 36 hour technology hiatus
        </div> */}
      </Section>

      <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />

      <Section title="The Rules Expanded">
        <div className="text-left mx-auto max-w-2xl">
          <strong>#1: No screens within 60 minutes of waking up.</strong>
          <i className="text-secondary font-extrabold block my-4">Intentionality over reactivity</i>
          <p>
            Treat the first 60 minutes of your day as sacred and intentional. Avoid all forms of digital engagement to
            prevent your morning from getting derailed.{" "}
          </p>
          <br />
          <p>
            The following types of notifications / content that are often consumed first thing in the morning can
            negatively influence your mood and set the tone for the day. This is why for the first 60 minutes, we are
            removing:
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
              While many of the above notifications can induce positive emotions - your favorite team winning a game, a
              text from a long ago friend, a bonus at work - they are not predictable, and the goal with this rule is to
              take ownership over how our day starts.
            </p>
            <br />
            <p>
              Instead one can go on an early morning walk, do yoga, cook a meal for later in the day, journal or read a
              book.
            </p>
          </ul>
        </div>

        <hr className="border-t-2 border-highlight w-[90vw] -ml-12 left-0 mx-auto my-8" />
        <div className="text-left mx-auto max-w-2xl">
          <strong>#2: No screens during meals</strong>
          <i className="text-secondary font-extrabold my-4 block">
            A regular opportunity to drop into presence that appears every day.
          </i>
          <p>
            Treat each meal as an opportunity to slow down and surface from the rush that is constantly being on all the
            time.
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
            Setting aside 15–20 minutes for a screen-free meal can feel impossible, especially in a world and age where
            down time is seen as wasted or eating alone is uncomfortable, yet it is one of the most available moments we
            have to pause and connect with ourselves.
          </p>

          <br />
          <p>
            Over these 20 days, use meals as a time to pause, recharge, and reconnect—with your food, your thoughts, and
            the present moment.
          </p>
        </div>

        <hr className="border-t-2 border-highlight w-[90vw] -ml-12 left-0 mx-auto my-8" />
        <div className="text-left mx-auto max-w-2xl">
          <strong>#3: No notifications except messages and phone calls.</strong>
          <i className="text-secondary font-extrabold my-4 block">Reduce the pings</i>
          <p>Treat these 20 days as an experiment in reducing notification overload and seeing what happens....</p>
          <p>
            We are as connected as ever, and yet often as anxious as we've ever been, as unable to focus as we've ever
            been, and as brain numbed as we've ever been. Free yourself from the constant chatter and regain a sense of
            agency.
          </p>
          <br />
        </div>

        <hr className="border-t-2 border-highlight w-[90vw] -ml-12 left-0 mx-auto my-8" />
        <div className="text-left mx-auto max-w-2xl">
          <strong>#4: No dooms-scrolling apps.</strong>
          <i className="text-secondary font-extrabold my-4 block">
            If it has infinite scroll, or can have you go on forever, it's not allowed.
          </i>
          <p>Treat...</p>
          <p>
            The internet has provided us with a near endless number of options for content that we can scroll forever.
            Much like the slot machines of Vegas, every refresh, every flick of the thumb, every new app provides new
            stimulation, and is thus incredibly mind consuming and addicting. The goal here is to curb the compulsive
            behavior of continuing to scroll
          </p>
          <NotificationItem
            title="Social Media"
            description="Facebook / Snapchat / Reddit / Twitter / TikTok / Snapchat / LinkedIn"
          />
          <NotificationItem title="Fitness Apps" description="Strava / Peloton activity feeds" />
          <NotificationItem title="Sports Scores" description="NBA / NFL / MLB / NHL / MLS / etc" />
          <NotificationItem title="News" description="News websites, news on tv, news podcasts, etc" />
          <NotificationItem title="Dating Apps" description="Hinge / Tinder / Bumble" />
        </div>

        <hr className="border-t-2 border-highlight w-[90vw] -ml-12 left-0 mx-auto my-8" />
        <div className="text-left mx-auto max-w-2xl">
          <strong>#5:</strong> No idle phone usage
          <i className="text-secondary font-extrabold my-4 block">
            Feel the compulsion; resist the compulsion; take note of what triggered it
          </i>
          Many of us have developed a tick-like habit of reaching for our phones during every idle moment in our day and
          getting lost in the digital stimulus at our fingertips. This rule is about breaking that automatic response
          and reclaiming agency over our time.
          <br />
          <br />
          <b>Examples of passive phone usage</b>
          <br />
          <ul className="list-disc">
            <li>Checking your phone while waiting in line at Chipotle</li>
            <li>Scrolling while heating up food in the microwave</li>
            <li>Mindlessly browsing while sitting on the porcelain throne in the bathroom</li>
            <li>Opening your phone while in the elevator</li>
          </ul>
          <br />
          <p>
            Replug is about regaining our agency over our time. Every time we let an idle moment drive us to pull out
            our phones, we are letting our attention and presence get hijacked by an external force.
          </p>
          <br />
          <p>
            An important thing to note about this rule:{" "}
            <b>
              it is highly, highly likely that you will slip up on at least one occasion, especially in the beginning,
              on this rule.
            </b>{" "}
            Like any other deeply ingrained behavior, it will take some time to go through the awareness, interrupt, and
            modify cycle of this habit, and that's ok.
          </p>
          <p>
            Treat these 20 days as an opportunity to drop in and start noticing what triggers pull out the screen, and
            why.
          </p>
        </div>

        <hr className="border-t-2 border-highlight w-[90vw] -ml-12 left-0 mx-auto my-8" />
        <div className="text-left mx-auto max-w-2xl">
          <strong>#6: No screens within 60 minutes of bedtime.</strong>
          <i className="text-secondary font-extrabold my-4 block">
            Self care and checking in over dissociating and numbing out
          </i>
          <p>
            Treat the last 60 minutes of your day as relaxing and restorative. Again avoid all forms of digital
            engagement to carve out a sanctuary of an evening before bed.
          </p>
          <br />
          <p>
            Use this time instead to connect with family or partners, journal, stretch, set intentions for the next day,
            take a bath, emotionally regulate, and slow down. We so often pile up anxiety throughout the day from work
            stressors, life stressors, and todo-lists and rarely step off the hamster wheel.
          </p>
        </div>
      </Section>
      <hr className="border-t-2 border-secondary w-3/4 mx-auto my-8" />

      <Section title="Steps to Get Started">
        <div className="flex flex-col items-start justify-start">
          <p>
            1.) Look at your calendar, and decide when it makes most sense to start the 20 day detox. Keep in mind
            existing committiments that come into conflict with the rules. Pick a start date, mark it on your calendar
          </p>
          <br />
          <p>
            2.) Set aside 30-60 minutes the day before you start to delete unneccessary apps, update notification
            settings, communicate with any online connections (dating apps, social media DMs, etc) that you will be
            unavailable over those platforms
          </p>
          <br />
          <p>
            3.) Communicate with friends and family what you will be doing and why, setup in person hangs, and invite
            friends to come along and join you
          </p>
          <br />
          <p>4.) Identify why you are doing this. Some benefits people have reported are </p>
          <br />
          <p>
            5.) Write yourself a letter to be opened in 20 days. Take inventory of where you currently are at in terms
            of sleep quality, average anxiety levels throughout the day, current screen time
          </p>
          <br />
        </div>
      </Section>
      <Section title="Do I need to buy anything?">
        No! However, some people have said the following things are useful and enhance their experiences: a separate
        alarm clock, journals, physical paper calendars, printers, books,
      </Section>

      <Section title="FAQ">
        <p>How do I stay social while remaining off of social media?</p>
        <p>Why 20 days?</p>
        <p>
          I've struggled deeply in the past with loneliness and social isolation and I'm afraid I will relapse into dark
          places if I do this - is this challenge for me?
        </p>
        <p>What do I do about my Facebook groups and staying up to date about in-person events?</p>
        <p>Why so strict?</p>
        <p>What happens if I break a rule? Should I start over?</p>
        <p>What benefits can I expect to see?</p>
        <p>What if I see no benefits at the end?</p>
      </Section>

      <Section title="Questions?">Contact us at</Section>
      <TheUpside />

      {/* <Section title="What's this 36 hour technology hiatus">Coming Soon</Section> */}

      <footer className="mt-16 text-[#A4853F] text-lg">
        <p>Inspired by various digital detox programs.</p>
      </footer>
    </div>
  );
};
