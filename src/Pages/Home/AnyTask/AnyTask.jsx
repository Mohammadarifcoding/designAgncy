import React from "react";
import Container from "../../../Shared/Container/Container";
import AnyTaskData from "../../../Data/AnyTask";

const AnyTask = () => {
  return (
    <Container>
      <div className="flex flex-col pb-20">
         <h2 className="heading-1 text-center max-w-[900px] mx-auto pb-10" >
         Request any design & we get it done for you
         </h2>
           <div className="flex flex-wrap gap-5 justify-center items-center">
            {
                AnyTaskData.map((item)=>(
                    <div className="px-6 py-5 rounded-lg bg-white text-xl  flex items-center  gap-2 shadow-lg cursor-pointer group"> <item.icon className="text-2xl group-hover:rotate-180 transition-all duration-1000"/> {item.title} </div>
                ))
            }
           </div>
      </div>
    </Container>
  );
};

export default AnyTask;
