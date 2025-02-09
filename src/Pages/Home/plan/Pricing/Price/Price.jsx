import React from "react";
import Button from "./../../../../../Shared/Button/Button";

const Price = ({ data }) => {
  const { id, plan, price, paymentLink, features,title } = data;
  return (
    <div className="mt-3">
      <h2 className="flex items-end">
        <span className="text-3xl font-[580] xsm:text-4xl md:text-5xl">
          ${price}
        </span>
        /m
      </h2>
      <p className="mt-1 text-sm text-gray-800 xsm:text-base">
       {title}
      </p>

      <div className="my-7 h-[1px] bg-black"></div>
      {/* Pricing description */}
      <div className="mb-5">
        <h4 className="mb-6 text-gray-600">What's included</h4>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {features.map((item, key) => (
            <div className="font-sem flex items-center gap-2 text-sm text-gray-600">
              {/* <span className="font-sm">{key+1}</span>  */}
              <span className="h-[6px] w-[6px] rounded-full bg-black"></span>{" "}
              {item}
            </div>
          ))}
        </div>
      </div>
      <a href={paymentLink} className="flex-grow" target="_blank">
        {" "}
        <div className="flex justify-center">
          <Button>Get Started</Button>
        </div>
        <div className="mt-4 flex justify-center gap-1">
          <span>or </span>
          <a
            className="underline"
            target="_blank"
            href="https://calendly.com/ateeqmorshed/30min"
          >
            book a call
          </a>
        </div>
      </a>
    </div>
  );
};

export default Price;
