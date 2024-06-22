import React from "react";
import Button from "../../../../Shared/Button/Button";
import BookCall from "./BookCall/BookCall";

const Join = () => {
  return (
    <div className="max-w-[500px] rounded-xl">
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
    <BookCall/>

      </div>
    </div>
  );
};

export default Join;