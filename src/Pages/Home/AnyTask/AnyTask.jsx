import React, { useState } from "react";
import Container from "../../../Shared/Container/Container";
import AnyTaskData from "../../../Data/AnyTask";
import PortfolioData from "../../../Data/Portfolio";
import Button from "../../../Shared/Button/Button";

const AnyTask = () => {
  const [number,setNumber] = useState(6)
  return (
    <Container>
      <div className="flex flex-col py-20">
         <h2 className="heading-1 text-center max-w-[900px] mx-auto pb-10" >
         Request any design & we get it done for you
         </h2>
           <div className="flex flex-wrap sm:gap-5 xsm:gap-3 gap-2 justify-center items-center">
            {
                AnyTaskData.map((item)=>(
                    <div className="lg:px-6 lg:py-5 md:px-5 md:py-3 px-3 py-2  rounded-lg bg-white lg:text-xl md:text-lg sm:text-base text-sm  flex items-center  gap-2 shadow-lg cursor-pointer group"> <item.icon className="lg:text-2xl md:text-xl sm:text-lg text-base group-hover:rotate-180 transition-all duration-1000"/> {item.title} </div>
                ))
            }
           </div>
          
           <div className="mt-7 flex gap-10 justify-center flex-wrap">
           {
                PortfolioData.slice(0,number).map((item)=>(
                    <img className='lg:w-[400px] md:w-[300px]  w-[250px] rounded-xl' src={item} alt="" />
                ))
            }
           </div>
           <div className="mt-10 flex justify-center ">
            {
              number === 6 && <div onClick={()=>{setNumber(PortfolioData.length)}} className="cursor-pointer">
              <Button >See more work</Button>
              </div>
            }
                        {
              number !== 6 && <div onClick={()=>{setNumber(6)}} className="cursor-pointer">
              <Button >See Less Work</Button>
              </div>
            }
            
           </div>
      </div>
    </Container>
  );
};

export default AnyTask;
