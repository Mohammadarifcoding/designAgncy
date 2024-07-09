import React from "react";
import m1 from "../../../../public/MembershipBenefits/m1.svg";
import m2 from "../../../../public/MembershipBenefits/m2.svg";
import ms1 from "../../../../public/MembershipBenefits/ms1.svg";
import ms2 from "../../../../public/MembershipBenefits/ms2.svg";
import ms3 from "../../../../public/MembershipBenefits/ms3.svg";
import ms4 from "../../../../public/MembershipBenefits/ms4.svg";
import ms5 from "../../../../public/MembershipBenefits/ms5.svg";
import ms6 from "../../../../public/MembershipBenefits/ms6.svg";
import {
  BoltLottie,
  DashboardLottie,
  FingerLottie,
  NoteLottie,
  TickLottie,
  UpDownLottie,
} from "../../../LottieReact/LottieReact";
import Container from "../../../Shared/Container/Container";
import bar from "/bar.svg";
import { motion } from "framer-motion";

const MembershipBenefits = () => {
  const data = [
    {
      bg: ms1,
      lottie: <DashboardLottie />,
      title: "Design board",
      text: "Subscribe to a plan & request as many designs as you’d like.",
    },
    {
      bg: ms2,
      lottie: <BoltLottie />,
      title: "Lightning fast delivery",
      text: "Receive your design within two business days on average.",
    },
    {
      bg: ms3,
      lottie: <NoteLottie />,
      title: "Fixed monthly rate",
      text: "We'll revise the designs until you're 100% satisfied.",
    },
    {
      bg: ms4,
      lottie: <TickLottie />,
      title: "Top-notch quality",
      text: "Subscribe to a plan & request as many designs as you’d like.",
    },
    {
      bg: ms5,
      lottie: <UpDownLottie />,
      title: "Flexible and scalable",
      text: "Receive your design within two business days on average.",
    },
    {
      bg: ms6,
      lottie: <FingerLottie />,
      title: "Unique and all yours",
      text: "We'll revise the designs until you're 100% satisfied.",
    },
  ];
  return (
    <div>
      <motion.img
        initial={{ y: "-50px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        loading="lazy"
        className="mx-auto mb-10"
        src={bar}
        alt="bar"
      />
      <Container className="px-0 md:px-0 lg:px-0">
        <div className="relative flex flex-col py-20">
          <motion.img
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            loading="lazy"
            className="absolute -left-4 -top-24 w-[100px] sm:left-0 md:-left-8 md:top-[180px] lg:-left-5 lg:top-0 lg:w-[180px] xl:left-0 xl:w-[200px]"
            src={m1}
            alt="m1"
          />
          <motion.img
            initial={{ x: "50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            loading="lazy"
            className="absolute -right-10 -top-24 w-[100px] sm:-right-14 md:-right-10 md:-top-[130px] md:w-[150px] lg:-right-5 lg:top-0 lg:w-[180px] xl:right-0 xl:w-[200px]"
            src={m2}
            alt="m2"
          />
          <motion.h1
            initial={{ y: "-50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="heading-1 mx-auto max-w-[700px] text-center"
          >
            Membership benefits
          </motion.h1>
          <motion.p
            initial={{ y: "-50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="description-1 mx-auto my-8 max-w-[560px] text-center"
          >
            Perks so good you'll never need to go anywhere else for your design.
            Seriously.
          </motion.p>

          <div className="flex flex-wrap items-end justify-around gap-10 px-2 pt-10 md:px-6 lg:grid lg:grid-cols-3 lg:justify-center lg:px-12">
            {data?.map((item, idx) => (
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex flex-wrap items-end justify-around px-2 md:px-6 lg:px-12"
              >
                {" "}
                <div key={idx} className="relative mt-10">
                  <img
                    loading="lazy"
                    className="mx-auto w-[110px]"
                    src={item?.bg}
                    alt={item?.text}
                  />
                  <div
                    className={` ${idx === 5 ? "-top-8 w-[132px]" : idx === 0 ? "-top-2 w-[124px]" : idx === 1 ? "top-5 h-max w-[70px]" : "top-3 w-[90px]"} absolute left-[50%] -translate-x-1/2`}
                  >
                    {item?.lottie}
                  </div>
                  <h1 className="pt-10 text-center text-3xl font-[580]">
                    {" "}
                    {item?.title}
                  </h1>
                  <p className="description-1 mx-auto max-w-[320px] py-5 text-center opacity-90">
                    {item?.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.img
            initial={{ y: "-50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            loading="lazy"
            className="mx-auto mb-10"
            src={bar}
            alt="bar"
          />
        </div>
      </Container>
    </div>
  );
};

export default MembershipBenefits;
