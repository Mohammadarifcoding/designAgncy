import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Container from "../../../Shared/Container/Container";
import cp1 from '../../.../../../../public/Caq/cp1.png'
import c1 from '../../.../../../../public/Caq/c1.svg'
import Button from "../../../Shared/Button/Button";

const Caq = () => {
  const [isOpen, setIsOpen] = useState(0);
  const dataArr = [
    {
      title: "Is there a limit to how many requests I can have ?",
      description:
        "Once subscribed to our standard or pro package, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one or faster.",
    },
    {
      title: "How fast will I receive my designs ?",
      description:
        "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
    },
    {
      title: "Who are the designers ?",
      description:
        "We have the most skilled designer team in the POD industry. All of them have more than 3 years of experience working solely on POD designs. Their expertise and creativity ensure that you get the best designs to kickstart your POD journey. ",
    },
    {
      title: "What programs do you design in ?",
      description:
        "Most requests are designed using Photoshop, Illustrator, Canva.",
    },
    {
      title: "How do I request designs ?",
      description:
        "CreativeOnDemand offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or just typing instruction, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.",
    },
    {
      title: "What if I don't like the design ?",
      description:
        "No worries! We'll continue to revise the design until you're 100% satisfied. ",
    },
    {
      title: "Are there any refunds if I don't like the service? ",
      description:
        "Due to the high quality nature of the work, there will be no refunds issued.",
    },
  ];
  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
  };

    return (
      <div className="relative">
        <img
          className="absolute right-0 -bottom-16"
          src={c1}
          alt="c1"
        />
        <Container>
          <div className="relative my-20 flex flex-wrap gap-20 lg:gap-10 w-full justify-around">
            {/* accordion here  */}
            <div className="w-full lg:max-w-[50%]">
              <h2 className="heading-1 z-10 max-w-[900px] px-1 pb-10">
                Commonly asked questions
              </h2>
              <div>
                {dataArr.map((PerAccordion, idx) => (
                  <div key={idx} className="border-gray-500/50 py-3">
                    <div
                      onClick={() => toggle(idx)}
                      className="flex justify-between font-medium text-black"
                    >
                      <h1 className="pb-2 text-lg cursor-pointer sm:text-xl">{PerAccordion.title}</h1>
                      <div className="size-[10px] cursor-pointer p-2 text-lg">
                        <IoIosArrowDown
                          className={`${isOpen === idx ? "rotate-180" : ""} duration-300`}
                        />
                      </div>
                    </div>
                    <div
                      className={`grid overflow-hidden text-gray-800 transition-all duration-300 ease-in-out dark:text-gray-300 ${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden text-gray-500 text-sm sm:text-base pr-16">
                        {PerAccordion.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <div className="flex w-full lg:w-[430px] flex-col items-center justify-center gap-y-4 rounded-lg bg-white p-14">
                <img className="w-[150px]" src={cp1} alt="Avatar" />
                <h1 className="pt-10 text-center text-3xl font-[599]">
                  Book a 15-minute intro call
                </h1>
                <Button className="">Book now</Button>
                <h6 className="mt-4">
                  Prefer to email?{" "}
                  <span className="text-blue-500">hello@designjoy.com</span>
                </h6>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}

export default Caq