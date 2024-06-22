import React from "react";
import Container from "../../../Shared/Container/Container";
import {
  DashboardLottie,
  BoltLottie,
  NoteLottie,
  TickLottie,
  UpDownLottie,
  FingerLottie,
} from "../../../LottieReact/LottieReact";
import ms1 from "../../../../public/MembershipBenefits/ms1.svg";
import ms2 from "../../../../public/MembershipBenefits/ms2.svg";
import ms3 from "../../../../public/MembershipBenefits/ms3.svg";
import ms4 from "../../../../public/MembershipBenefits/ms4.svg";
import ms5 from "../../../../public/MembershipBenefits/ms5.svg";
import ms6 from "../../../../public/MembershipBenefits/ms6.svg";
import bar from "/bar.svg";
import m1 from "../../../../public/MembershipBenefits/m1.svg";
import m2 from "../../../../public/MembershipBenefits/m2.svg";
import Button from "../../../Shared/Button/Button";


const MembershipBenefits = () => {
  const data = [
    {
      bg: ms1,
      lottie: <DashboardLottie />,
      text: "Subscribe to a plan & request as many designs as you’d like.",
    },
    {
      bg: ms2,
      lottie: <BoltLottie />,
      text: "Receive your design within two business days on average.",
    },
    {
      bg: ms3,
      lottie: <NoteLottie />,
      text: "We'll revise the designs until you're 100% satisfied.",
    },
    {
      bg: ms4,
      lottie: <TickLottie />,
      text: "Subscribe to a plan & request as many designs as you’d like.",
    },
    {
      bg: ms5,
      lottie: <UpDownLottie />,
      text: "Receive your design within two business days on average.",
    },
    {
      bg: ms6,
      lottie: <FingerLottie />,
      text: "We'll revise the designs until you're 100% satisfied.",
    },
  ];
  return (
    <div>
      <img className="mx-auto mb-10" src={bar} alt="bar" />
      <Container className="px-0 md:px-0 lg:px-0">
        <div className="relative flex flex-col py-20">
          <img
            className="absolute -left-4 -top-24 z-0 w-[100px] sm:left-0 md:-left-8 md:top-[180px] lg:-left-5 lg:-top-20 lg:w-[180px] xl:left-0 xl:w-[140px]"
            src={m1}
            alt="m1"
          />
          <img
            className="absolute -top-24 right-0 z-0 w-[140px] sm:-right-2 md:-right-10 md:-top-[130px] md:w-[150px] lg:-right-5 lg:top-16 lg:w-[180px] xl:right-0 xl:w-[240px]"
            src={m2}
            alt="m2"
          />

          <h2 className="heading-1 mx-auto max-w-[900px] px-1 pb-10 text-center z-10">
            Membership benefits
          </h2>
          <p className="description-1 mx-auto max-w-[520px] px-1 text-center z-10">
            Perks so good you'll never need to go anywhere else for your design.
            Seriously.
          </p>
          <div className="flex flex-wrap items-end justify-around gap-10 px-2 pt-10 md:px-6 lg:grid lg:grid-cols-3 lg:justify-center lg:px-12">
            {data?.map((item, idx) => (
              <div key={idx} className="relative mt-10">
                <img
                  className="mx-auto w-[110px]"
                  src={item?.bg}
                  alt={item?.text}
                />
                <div
                  className={` ${idx === 5 ? "-top-8 w-[132px]" : idx === 0 ? "-top-2 w-[124px]" : idx === 1 ? "top-5 h-max w-[70px]" : "top-3 w-[90px]"} absolute left-[50%] -translate-x-1/2`}
                >
                  {item?.lottie}
                </div>
                <p className="description-1 mx-auto max-w-[320px] py-5 text-center opacity-90">
                  {item?.text}
                </p>
              </div>
            ))}
          </div>
          <img className="mx-auto mt-24" src={bar} alt="bar" />
        </div>
      </Container>
    </div>
  );
};

export default MembershipBenefits;