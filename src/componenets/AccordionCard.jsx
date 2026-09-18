import { useRef } from "react";
import AccordionTitle from "./AccordionTitle";
import AccordionList from "./AccrodionList";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AccordionCard = () => {
  const cardRef = useRef();

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.9,
      duration: 0.7,
      padding: 10,
      ease: "sine",
    });
  });

  return (
    <div
      ref={cardRef}
      className="bg-white padding mx-auto md:p-10  flex justify-center p-[24px] rounded-2xl flex-col max-w-160 w-full gap-[24px]"
    >
      <AccordionTitle />
      <AccordionList />
    </div>
  );
};

export default AccordionCard;
