import { PropsWithChildren } from "react";

import "./App.css";
import { Header } from "./Header";

interface SectionProps extends PropsWithChildren {
  title: string;
}
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="my-6  mx-auto text-center px-10">
    <h2 className="text-3xl font-bold text-[#A4853F] mb-6">{title}</h2>
    <div className="text-lg text-gray-700 leading-relaxed">{children}</div>
  </div>
);

const NotificationItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <li className="my-6 text-left mx-auto grid grid-cols-2">
      <span className="font-bold text-primary mr-2">{title}:</span>
      <span className="text-gray-700">{description}</span>
    </li>
  );
};

const Rule = ({ title, description }: { title: string; description: React.ReactNode }) => {
  return (
    <div className="bg-accent px-6 py-2 rounded-lg text-highlight relative flex items-start justify-start">
      <div className="flex items-center justify-center  bg-highlight text-accent rounded-full h-8 w-8 min-h-8 min-w-8">
        {title}
      </div>{" "}
      <span className="ml-2">{description}</span>
    </div>
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
                No screens within <b>60 minutes of bedtime</b>
              </>
            }
          />
          <Rule
            title="3"
            description={
              <>
                No screens <b>during meals</b>
              </>
            }
          />
          <Rule
            title="4"
            description={
              <>
                No <b>infinitely</b> scrolling
              </>
            }
          />
          <Rule
            title="5"
            description={
              <>
                No notifications except <b>calls & messages</b>
              </>
            }
          />
          <Rule title="6" description="No phone checking out of boredom" />
        </div>
        {/* <div className="bg-accent mt-4 px-6 py-2 rounded-lg text-highlight relative flex items-center justify-center">
          One 36 hour technology hiatus
        </div> */}
      </Section>

      <Section title="The Upside">
        <div className="overflow-x-scroll justify-start max-w-[calc(100vw-64px)]  flex items-center gap-x-4">
          <p className="mb-4 whitespace-nowrap"> Better sleep</p>
          <p className="mb-4 whitespace-nowrap ">Lower stress levels</p>
          <p className="mb-4 whitespace-nowrap ">Lower anxiety levels</p>
          <p className="mb-4 whitespace-nowrap ">Deeper connection with nature</p>
          <p className="mb-4 whitespace-nowrap ">Deeper connection with others</p>
        </div>
        <div className="overflow-x-scroll justify-start max-w-[calc(100vw-64px)]  flex items-center gap-x-4">
          <p className="mb-4 whitespace-nowrap ">Deeper connection with ourselves</p>
          <p className="mb-4 whitespace-nowrap ">Intentionality and purpose</p>
          <p className="mb-4 whitespace-nowrap ">Increased motivation</p>
          <p className="mb-4 whitespace-nowrap ">Increased emotional regulation</p>
        </div>
        <div className="overflow-x-scroll justify-start max-w-[calc(100vw-64px)]  flex items-center gap-x-4">
          <p className="mb-4 whitespace-nowrap ">Less depression and anxiety</p>
          <p className="mb-4 whitespace-nowrap ">Increased focus and willpower</p>
          <p className="mb-4 whitespace-nowrap ">Less mood swings</p>
          <p className="mb-4 whitespace-nowrap ">Less irritability</p>
        </div>
      </Section>

      <hr className="border-t-2 border-primary w-3/4 mx-auto my-8" />

      <Section title="The Rules Expanded">
        <div className="text-left mx-auto max-w-2xl">
          <strong>#1:</strong> No phones / computers / screens within 60 minutes of waking up.
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
            <NotificationItem title="News" description="Often anxiety, despair, or rage-provoking" />
            <NotificationItem
              title="Work notifications"
              description="Emails, Slack messages, or calendar reminders are often stressful and instill an illusion of urgency"
            />
            <NotificationItem
              title="Stock market updates"
              description="Often trigger feelings of regret, stress, or greed."
            />
            <NotificationItem
              title="Financial notifications"
              description="Credit card statements or bank alerts can evoke shame or worry."
            />
            <NotificationItem
              title="Texts (or the lack thereof)"
              description="Can lead to feelings of sadness, loneliness, or pressure to respond."
            />
            <NotificationItem
              title="Dating app notifications"
              description="May trigger shame, despair, or self-doubt."
            />
            <NotificationItem
              title="Social media (Reddit, Instagram, Snapchat)"
              description="Can often instill FOMO, loneliness, or rage by surfacing curated realities and polarizing opinions."
            />
            <NotificationItem title="Sports Scores / Betting Updates" description="Can instill disappointment" />
            <NotificationItem
              title="Short-form content (TikTok, YouTube Reels)"
              description="Encourages a cycle of dopamine-driven, instant gratification-seeking behaviors that distract from deeper focus."
            />

            <p>
              While many of the above notifications can be positive inducing - your favorite team winning a game, a text
              from a long ago friend, a bonus at work - they are not predictable, and the goal with this rule is to take
              ownership over how our day starts.
            </p>
            <br />
            <p>
              Instead one can go on an early morning walk, do yoga, cook a meal for later in the day, journal, read a
              book
            </p>
          </ul>
        </div>

        <div className="text-left mx-auto max-w-2xl">
          <hr className="border-t-2 border-secondary w-3/4 mx-auto my-8" />
          <strong>#2:</strong> No phones / computers / screens within 60 minutes of going to bed.
          <i className="text-secondary font-extrabold my-4 block">
            Self care and checking in over dissociating and numbing out
          </i>
          <p>
            Use this time instead to connect with family or partners, journal, stretch, set intentions for the next day,
            take a bath, emotionally regulate, and slow down. We so often pile up anxiety throughout the day from work
            stressors, life stressors, and todo-lists and rarely step off the hamster wheel.
          </p>
        </div>

        <div className="text-left mx-auto max-w-2xl">
          <hr className="border-t-2 border-secondary w-3/4 mx-auto my-8" />
          <strong>#3:</strong> No infinite scrolling.
          <i className="text-secondary font-extrabold my-4 block">
            If it has infinite scroll, or can have you go on forever, it's not allowed.
          </i>
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

        <div className="text-left mx-auto max-w-2xl">
          <hr className="border-t-2 border-secondary w-3/4 mx-auto my-8" />
          <strong>#4:</strong> No screens during meals
          <i className="text-secondary font-extrabold my-4 block">
            A regular opportunity to drop into presence that appears every day.
          </i>
          <p>
            There’s an old Zen saying: “If you don’t have time to meditate for five minutes, you should sit and meditate
            for two hours.”
          </p>
          <br />
          <p>
            Setting aside 15–20 minutes for a screen-free meal can feel impossible, especially in a world and age where
            down time is seen as wasted or eating alone is uncomfortable. Over these 20 days, use meals as a time to
            pause, recharge, and reconnect—with your food, your thoughts, and the present moment.
          </p>
        </div>

        <div className="text-left mx-auto max-w-2xl">
          <hr className="border-t-2 border-secondary w-3/4 mx-auto my-8" />
          <strong>#5:</strong> No phone checking out of boredom
          <i className="text-secondary font-extrabold my-4 block">
            Feel the compulsion; resist the compulsion; take note of what triggered it
          </i>
          <p>
            If you just make a commitment to never pull out your phone unless you need to, you'll be shocked at the
            tick-like behavior to check when we're bored, on the toilet, waiting in line, waiting for someone, riding in
            an Uber, riding in an elevator, waiting for the microwave, the list goes on.
          </p>
          <br />
          <p>
            Again, use these 20 days as an opportunity to drop in and start noticing what triggers pull out the screen,
            and why.
          </p>
        </div>
        <div className="text-left mx-auto max-w-2xl">
          <hr className="border-t-2 border-secondary w-3/4 mx-auto my-8" />
          <strong>#6: No notifications except messages and phone calls.</strong>
          <i className="text-secondary font-extrabold my-4 block">Reduce the pings</i>
          <p>
            We are as connected as ever, and yet often as anxious as we've ever been, as unable to focus as we've ever
            been, and as brain numbed as we've ever been. Free yourself from the constant chatter and regain a sense of
            agency.
          </p>
          <br />
        </div>
      </Section>

      <Section title="Do I need to buy anything?">Coming Soon</Section>

      <Section title="Steps to Get Started">Coming Soon</Section>

      <Section title="Themes & Wins">Coming Soon</Section>

      <Section title="What's this 36 hour technology hiatus">Coming Soon</Section>

      <footer className="mt-16 text-[#A4853F] text-lg">
        <p>Inspired by various digital detox programs.</p>
      </footer>
    </div>
  );
};
