import AccordionCard from "./componenets/AccordionCard";

const App = () => {
  return (
    <main
      className="
    min-h-screen
    bg-purple-100
    bg-top
    bg-no-repeat
    xl:bg-size-[100vw]

    pt-[24vh]
    px-8
  "
      style={{
        backgroundImage: "url('/background-pattern-desktop.svg')",
      }}
    >
      <AccordionCard />
    </main>
  );
};

export default App;
