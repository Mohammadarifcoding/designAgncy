import React from "react";
import cp1 from "../../.../../../../public/Caq/cp1.png";
import Button from "../../../Shared/Button/Button";
const BookCall = () => {
  return (
    <div className="">
      <div className="flex w-full flex-col items-center justify-center gap-y-4 rounded-lg bg-white p-14 lg:w-[430px]">
        <img loading="lazy" className="w-[150px]" src={cp1} alt="Avatar" />
        <h1 className="pt-10 text-center text-3xl font-[599]">
          Book a 15-minute intro call
        </h1>
        <Button className="">Book now</Button>
        <h6 className="mt-4">
          Prefer to email?{" "}
          <span className="text-blue-500">hello@designjoy.com</span>
        </h6>
      </div>
    </div>
  );
};

export default BookCall;
