import { Section } from "./App";

export const TheUpside = () => {
  return (
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
  );
};
