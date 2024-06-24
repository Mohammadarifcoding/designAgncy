import React from "react";
import Button from './../../../../../Shared/Button/Button';

const Price = ({ data }) => {
    const {  id ,
        plan,
        price,
        paymentLink,
        features} = data
  return (
    <div className="mt-3">
      <h2 className="flex items-end">
        <span className="text-3xl font-[580] xsm:text-4xl md:text-5xl">
          ${price}
        </span>
        /m
      </h2>
      <p className="mt-1 text-sm text-gray-800 xsm:text-base">
        One request at a time. <br /> Pause or cancel anytime
      </p>

      <div className="my-7 h-[1px] bg-black "></div>
        {/* Pricing description */}
      <div className='mb-5'>
       <h4 className=' text-gray-700  mb-6'>What's included</h4>
      
      <div className=''>
      {features.map((item)=>(
        <div className='text-gray-700  mb-1 flex gap-2 items-center'> <span className='bg-black h-[6px] w-[6px] rounded-full'></span> {item}</div>
       ))}
        </div> 
      </div>
      <a href={paymentLink} target='_blank'> <div className='flex justify-center'>
      <Button>Get Started</Button>
      </div></a>
     
       
    </div>
  );
};

export default Price;
