import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnyTaskData from "../../../Data/AnyTask";
import Button from "../../../Shared/Button/Button";
import Container from "../../../Shared/Container/Container";

const AnyTask = () => {
  const [number, setNumber] = useState(6);
  return (
    <Container>
      <div className="flex flex-col py-20">
        <h2 className="heading-1 mx-auto max-w-[900px] pb-10 text-center">
          Request any design & we get it done for you
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

        {/* <div className="mt-7 flex gap-10 justify-center flex-wrap">
           {
                PortfolioData.slice(0,number).map((item)=>(
                    <img loading="lazy" className='lg:w-[400px] md:w-[300px]  w-[250px] rounded-xl' src={item} alt="" />
                ))
            }
           </div> */}
        <div className="mt-16 flex justify-center">
          <iframe
            className="h-[177px] w-[274px] rounded-xl xsm:h-[222px] xsm:w-[343px] sm:h-[318px] sm:w-[490px] md:h-[362px] md:w-[645px] lg:h-[453px] lg:w-[806px]"
            src="https://www.youtube.com/embed/mjz_aWYv1t4?si=tPmfZaO_rI75Uj5Z"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
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
          <Link to="/portfolio">
            <div className="cursor-pointer">
              <Button>See More</Button>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AnyTask;
