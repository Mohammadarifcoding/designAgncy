import React, { useState } from "react";

import pricingPlans from "../../../../Data/PricingData";
import Price from "./Price/Price";

const Pricing = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="relative h-auto w-full rounded-xl bg-white max-w-[500px] md:w-[500px] lg:h-[680px]">
      {/* <img loading="lazy" className='absolute right-0 rounded-r-xl' src="https://assets-global.website-files.com/5837424ae11409586f837994/65de149940ab9eb5eaf6a916_4.svg" alt="" / */}
      <div className="flex flex-col gap-7 rounded-xl border-t-2 border-white bg-gradient-to-b px-5 py-5 text-black xsm:px-6 xsm:py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
        <h2 className="text-3xl font-[580] xsm:text-4xl md:text-5xl">
          MemberShip
        </h2>

        <div className="flex rounded-full border-[3px] border-black bg-black text-white">
          {pricingPlans.map((price, key) => (
            <div
              onClick={() => {
                setSelected(key);
              }}
              key={key}
              className={`flex flex-1 cursor-pointer items-center justify-center gap-1 px-4 py-2 text-center text-[13px] xsm:px-5 xsm:py-3 xsm:text-sm sm:text-base ${price.id == selected ? "rounded-full bg-yellow-400 text-black" : ""}`}
            >
              <img
                loading="lazy"
                src="https://assets-global.website-files.com/5837424ae11409586f837994/65de1509b0728fa49d0a4159_22.svg"
                className={`${price.id == 2 ? "" : "hidden"} text-xl text-[#FB421F]`}
              />{" "}
              {price.plan}
            </div>
          ))}
        </div>
        {/* book call */}
        <Price data={pricingPlans[selected]} />
      </div>
    </div>
  );
};

export default Pricing;
