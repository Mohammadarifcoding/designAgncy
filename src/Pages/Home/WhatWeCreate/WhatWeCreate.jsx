import React from "react";
import Container from "../../../Shared/Container/Container";
import {
  FolderLottie,
  RepeatLottie,
  ThumbLottie,
} from "../../../LottieReact/LottieReact";
import d1 from "../../../../public/WhatWeCreate/d1.svg";
import d2 from "../../../../public/WhatWeCreate/d2.svg";
import d3 from "../../../../public/WhatWeCreate/d3.svg";
import s1 from "../../../../public/WhatWeCreate/s1.svg";
import s2 from "../../../../public/WhatWeCreate/s2.svg";
import Button from "../../../Shared/Button/Button";

const WhatWeCreate = () => {
  const data = [
    {
      bg: d1,
      lottie: <RepeatLottie />,
      text: "Subscribe to a plan & request as many designs as you’d like.",
    },
    {
      bg: d2,
      lottie: <FolderLottie />,
      text: "Receive your design within two business days on average.",
    },
    {
      bg: d3,
      lottie: <ThumbLottie />,
      text: "We'll revise the designs until you're 100% satisfied.",
    },
  ];
  return (
    <Container className="px-0 md:px-0 lg:px-0">
      <div className="relative flex flex-col py-20">
        <img
          className="absolute -top-24 sm:left-0 -left-4 w-[100px] md:-left-8 md:top-[180px] lg:-left-5 lg:top-0 lg:w-[180px] xl:left-0 xl:w-[200px]"
          src={s1}
          alt="s1"
        />
        <img
          className="absolute sm:-right-14 -right-10 -top-24 w-[100px] md:-right-10 md:-top-[130px] md:w-[150px] lg:-right-5 lg:top-0 lg:w-[180px] xl:right-0 xl:w-[200px]"
          src={s2}
          alt="s2"
        />

        <h2 className="heading-1 mx-auto max-w-[900px] px-1 pb-10 text-center">
          We Create Winning Designs That Makes You Grand
        </h2>
        <p className="description-1 mx-auto  max-w-[520px] px-1 text-center">
          With over 5+ years of experience in the POD industry, we have the
          expertise to guide you to the perfect niche and identify winning
          designs.
        </p>
        <div className="flex flex-wrap items-end justify-around px-2 md:px-6 lg:px-12">
          {data?.map((item, idx) => (
            <div key={idx} className="relative mt-10">
              <img
                className="mx-auto w-[130px]"
                src={item?.bg}
                alt={item?.text}
              />
              <div
                className={`${idx === 2 ? "-top-2 w-[170px]" : "top-5 w-[100px]"} absolute left-[50%] -translate-x-1/2`}
              >
                {item?.lottie}
              </div>
              <p className="description-1 max-w-[320px] py-5 text-center opacity-90">
                {item?.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
            <Button>See Plans</Button>
        </div>
          
      </div>
    </Container>
  );
};

export default WhatWeCreate;