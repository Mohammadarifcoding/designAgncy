import React from "react";
import cp1 from "../../.../../../../public/Caq/cp1.png";
import Button from "../../../Shared/Button/Button";
const BookCall = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-y-4 rounded-lg bg-white p-14 lg:w-[430px] w-[290px]">
        <img loading="lazy" className="w-[150px]" src={cp1} alt="Avatar" />
        <h1 className="pt-10 text-center text-3xl font-[599]">
          Book a 15-minute intro call
        </h1>
        <a className="" target="_blank" href="https://calendly.com/ateeqmorshed/30min"><Button className="">Schedule now</Button></a>
        
        <h6 className="mt-4 flex flex-col items-center">
          Prefer to email?{" "}
          <a href="mailto:ateeq@creativeondemand.com?subject=Booking%20a%20meeting&body=I%20am%20interested%20about%20your%20service.%20I%20want%20to%20meeting%20with%20you%20and%20I%20want%20to%20know%20more%20details%20about%20your%20services."><span className="text-blue-500 hover:underline cursor-pointer">ateeq@creativeondemand.com</span></a>
          
        </h6>
      </div>
    </div>
  );
};

export default BookCall;
