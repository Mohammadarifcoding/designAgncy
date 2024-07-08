import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnyTaskData from "../../../Data/AnyTask";
import Button from "../../../Shared/Button/Button";
import Container from "../../../Shared/Container/Container";
import { motion } from "framer-motion";

const AnyTask = () => {
  const [number, setNumber] = useState(6);
  return (
    <Container>
      <div className="flex flex-col py-20">
        <motion.h1
          initial={{ y: "-50px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="heading-1 mx-auto mb-10 max-w-[700px] text-center"
        >
          Request any design & we get it done for you
        </motion.h1>

        <div className="flex flex-wrap items-center justify-center gap-2 xsm:gap-3 sm:gap-5">
          {AnyTaskData.map((item) => (
             <motion.div
             initial={{ y: "50px", opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.7 }} className="group flex cursor-pointer items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm shadow-lg sm:text-base md:px-5 md:py-3 md:text-lg lg:px-6 lg:py-5 lg:text-xl">
              {" "}
              {item.type === "Normal" ? (
                <item.icon className="text-base transition-all duration-1000 group-hover:rotate-180 sm:text-lg md:text-xl lg:text-2xl" />
              ) : (
                <img
                  src={item.icon}
                  className="w-[20px] text-base transition-all duration-1000 group-hover:rotate-180 sm:text-lg md:w-[25px] md:text-xl lg:text-2xl"
                />
              )}
              {item.title}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">

            <motion.a
          initial={{ y: "50px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          href="/portfolio"
        >
          {" "}
          <div className="mt-10 flex cursor-pointer justify-center">
          <Button>View Works</Button>
          </div>
        </motion.a>

        </div>
      </div>
    </Container>
  );
};

export default AnyTask;
