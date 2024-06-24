import React,{useState} from "react";

import pricingPlans from "../../../../Data/PricingData";
import Price from "./Price/Price";


const Pricing = () => {

  const [selected,setSelected] = useState(0)
  return (
    <div className="relative md:w-[400px] w-full  rounded-xl bg-white">
      {/* <img className='absolute right-0 rounded-r-xl' src="https://assets-global.website-files.com/5837424ae11409586f837994/65de149940ab9eb5eaf6a916_4.svg" alt="" / */}
      <div className="flex flex-col gap-7 rounded-xl border-t-2 border-white bg-gradient-to-b xsm:px-6 px-5 xsm:py-6 py-5 text-black sm:px-8 sm:py-8 md:px-10 md:py-10">
        <h2 className=" font-[580] md:text-5xl xsm:text-4xl text-3xl">MemberShip</h2>

        <div className="rounded-full bg-black flex border-[3px] border-black text-white">
          {pricingPlans.map((price, key) => (
            <div onClick={()=>{setSelected(key)}} key={key} className={`flex-1 flex items-center gap-1 text-center justify-center xsm:px-5 px-4 cursor-pointer xsm:py-3 py-2 sm:text-base xsm:text-sm text-[13px] ${price.id == selected ? 'bg-yellow-400 rounded-full text-black':''}`}>
             <img loading='lazy' src='https://assets-global.website-files.com/5837424ae11409586f837994/65de1509b0728fa49d0a4159_22.svg' className={`${price.id == 2 ? '':'hidden'} text-xl  text-[#FB421F]`}/>  {price.plan}
            </div>
          ))}
        </div>
        {/* book call */}
        <Price data={pricingPlans[selected]}/>
      </div>
    </div>
  );
};

export default Pricing;
