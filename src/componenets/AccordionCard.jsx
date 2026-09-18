import AccordionTitle from "./AccordionTitle";
import AccordionList from "./AccrodionList";

const AccordionCard = () => {
  return (
    <div className="bg-white padding mx-auto md:p-10 transition-all duration-200  flex justify-center p-[24px] rounded-2xl flex-col max-w-150 w-full gap-[24px]">
      <AccordionTitle />
      <AccordionList />
    </div>
  );
};

export default AccordionCard;
