import { useState } from "react";

const ACCORDION_ITEMS = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    description: ` Frontend Mentor offers realistic coding challenges to help developers improve their
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
  all levels and ideal for portfolio building.`,
  },
  {
    title: "Is Frontend Mentor free?",
    description: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free
  option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    description: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!`,
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    description: `The best place to get help is inside Frontend Mentor's Discord community. There's a help
  channel where you can ask questions and seek support from other community members.`,
  },
];

const AccordionList = () => {
  const [isOpenAccordions, setIsOpenAccordions] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    const prevArray = [...isOpenAccordions];
    prevArray[index] = !prevArray[index];

    setIsOpenAccordions(prevArray);
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {ACCORDION_ITEMS.map((accordion, index) => (
        <article
          className={`flex flex-col gap-[24px] ${index + 1 !== ACCORDION_ITEMS.length ? "border-b border-purple-1000 pb-[24px]" : ""}`}
        >
          <button
            onClick={() => {
              handleClick(index);
            }}
            className="flex justify-between gap-2 items-start"
          >
            <h3 className={`text-purple-9000 text-left font-bold  `}>
              {accordion.title}
            </h3>
            <img
              src={`${isOpenAccordions[index] === true ? "/images/icon-minus.svg" : "/images/icon-plus.svg"}`}
              alt=""
            />
          </button>
          <p
            className={`text-purple-6000 overflow-hidden transition-all duration-200 ${isOpenAccordions[index] === true ? "max-h-fit" : "max-h-0"}`}
          >
            {accordion.description}
          </p>
        </article>
      ))}
    </div>
  );
};

export default AccordionList;
