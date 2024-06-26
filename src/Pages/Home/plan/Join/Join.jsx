import React from "react";
import BookCall from "./BookCall/BookCall";

const Join = () => {
  return (
    <div className="relative flex h-[500px] w-full rounded-xl shadow-2xl md:w-[400px] lg:h-[680px]">
      <img
        loading="lazy"
        className="absolute right-0 -z-0 w-[80px] rounded-r-xl xsm:w-[100px] sm:w-[120px] md:w-[130px]"
        src="https://assets-global.website-files.com/5837424ae11409586f837994/65de149940ab9eb5eaf6a916_4.svg"
        alt=""
      />
      <div className="inner-shadow flex flex-col gap-7 rounded-xl border-t-2 border-white bg-gradient-to-b from-black to-gray-900 px-6 py-6 text-white sm:px-8 sm:py-8 md:px-10 md:py-10">
        {/* img */}

        {/* Slots */}
        <div className="z-10 w-max rounded-full bg-[#FF90E7] px-5 py-3 text-black">
          Slots Available
        </div>
        {/*Title  */}
        <h2 className="mt-4 flex-grow text-3xl font-[580] xsm:text-4xl md:text-5xl">
          Join <br /> Creative On Demand
        </h2>
        {/* book call */}
        <BookCall />
      </div>
    </div>
  );
};

export default Join;
