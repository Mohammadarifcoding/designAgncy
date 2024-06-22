import React from "react";

const Join = () => {
  return (
    <div className="  max-w-[500px] rounded-xl">
      <div className="inner-shadow flex flex-col gap-7 rounded-xl border-t-2 border-white bg-gradient-to-b from-black to-gray-900 px-6 py-6 text-white sm:px-8 sm:py-8 md:px-10 md:py-10">
        {/* Slots */}
        <div className="w-max rounded-full bg-[#FF90E7] px-5 py-3 text-black">
          Slots Available
        </div>
        {/*Title  */}
        <h2 className="text-3xl font-[580] xsm:text-4xl md:text-6xl">
          Join <br /> Creative On Demand
        </h2>
        {/* book call */}

        <div className="mt-20 flex sm:flex-row flex-col items-center gap-3 rounded-lg border border-gray-700 p-4 shadow-xl">
          <div className='flex flex-col gap-3'>
            <h2 className="xsm:text-lg font-medium sm:text-xl">
              Book a 15-min intro call
            </h2>
            <p className="font-medium sm:text-base xsm:text-sm text-[13px]">
              Learn more about how Creative on Demand works and how it can help
              you
            </p>
          </div>
          <img
            className="w-[25px]"
            src="https://assets-global.website-files.com/5837424ae11409586f837994/65de12548dcbda2881cd8ff5_Group%201.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
