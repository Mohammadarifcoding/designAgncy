import React from "react";

const BookCall = () => {
  return (
    <a className="" target="_blank" href="https://calendly.com/nabirasek/30min">
      <div className="inner-shadow rounded-xl border-t-2 border-white bg-gradient-to-b from-black to-gray-800 text-white transition-all duration-500 hover:from-[#292929] hover:to-gray-900 hover:shadow-custom-hover">
        <div className="flex w-auto flex-col items-center gap-3 rounded-lg border border-gray-700 p-4 shadow-xl sm:flex-row">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium xsm:text-lg sm:text-xl">
              Book a 15-min intro call
            </h2>
            <p className="text-[13px] font-medium xsm:text-sm sm:text-base">
              Learn more about how Creative on Demand works and how it can help
              you
            </p>
          </div>
          <img
            loading="lazy"
            className="w-[25px]"
            src="https://assets-global.website-files.com/5837424ae11409586f837994/65de12548dcbda2881cd8ff5_Group%201.svg"
            alt=""
          />
        </div>
      </div>
    </a>
  );
};

export default BookCall;
