import React from "react";
import AnyTaskData from "../../Data/AnyTask";
import { AllPortfolioData } from "../../Data/Portfolio";
import Container from "../../Shared/Container/Container";

const OurCreation = () => {
  return (
    <Container>
      <div className="flex flex-col py-20">
        <h2 className="heading-1 mx-auto max-w-[900px] pb-10 text-center">
          Checkout Our Creations
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2 xsm:gap-3 sm:gap-5">
          {AnyTaskData.map((item) => (
            <div className="group flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm shadow-lg sm:text-base md:px-5 md:py-3 md:text-lg lg:px-6 lg:py-5 lg:text-xl">
              {" "}
              <item.icon className="text-base transition-all duration-1000 group-hover:rotate-180 sm:text-lg md:text-xl lg:text-2xl" />{" "}
              {item.title}{" "}
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {AllPortfolioData.map((item) => (
            <img
              loading="lazy"
              className="w-[290px] rounded-xl"
              src={item}
              alt=""
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          {/* {
                number === 6 && <div onClick={()=>{setNumber(PortfolioData.length)}} className="cursor-pointer">
                <Button >See more work</Button>
                </div>
              }
                          {
                number !== 6 && <div onClick={()=>{setNumber(6)}} className="cursor-pointer">
                <Button >See Less Work</Button>
                </div>
              } */}
        </div>
      </div>
    </Container>
  );
};

export default OurCreation;
