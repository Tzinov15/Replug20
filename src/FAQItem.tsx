import { datadogRum } from "@datadog/browser-rum";

import { Collapsible } from "./Collapsible";

export const QuestionsAndAnswers = [
  {
    question: "How do I stay social while remaining off of social media?",
    answer:
      "We recommend using other forms of communication like texting, calling, or meeting in person. You can also use apps like WhatsApp or Signal to stay in touch with friends and family.",
  },
  {
    question: "Why 20 days?",
    answer: "",
  },
  {
    question: "What do I do about my Facebook groups and staying up to date about in-person events?",
    answer:
      "You can ask a friend or family member to keep you updated on important events or information. You can also set up email alerts for your Facebook groups so you don't miss any important updates.",
  },
  {
    question: "Why so strict?",
    answer:
      "The challenge is designed to help you create healthier habits and reduce your screen time. By setting strict rules, you can break the cycle of constant screen use and create space for other activities.",
  },
  {
    question: "What happens if I break a rule? Should I start over?",
    answer:
      "If you break a rule, don't worry! Just acknowledge the mistake and try to do better next time. You don't need to start over, but it's important to stay committed to the challenge and follow the rules as closely as possible.",
  },
  {
    question: "What benefits can I expect to see?",
    answer:
      "By taking a break from screens, you may experience improved sleep, reduced stress and anxiety, increased focus and productivity, and better relationships with others. You may also feel more present and connected to the world around you.",
  },
  {
    question: "What if I see no benefits at the end?",
    answer:
      "Everyone is different, and the benefits of the challenge may vary from person to person. If you don't see any benefits at the end of the challenge, consider what changes you can make to improve your relationship with technology and create healthier habits.",
  },
  {
    question: "What about work notifications? I NEED to be on slack!",
    answer:
      "If you need to be on Slack for work, you can set up notifications for important messages and calls. You can also schedule specific times to check Slack and limit your overall screen time.",
  },
];

export const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <Collapsible
      onClick={() => {
        datadogRum.addAction("faqItemClicked", {
          faqItemClicked: {
            question: question,
            answer: answer,
          },
        });
      }}
      content={<p className="text-start text-[16px] text-tertiary font-bold">{answer}</p>}
      header={
        <div className="">
          <li>
            <p className="text-start text-[16px]">{question}</p>
          </li>
        </div>
      }
    />
  );
};
