import React from "react";
import Join from "./Join/Join";
import Container from "../../../Shared/Container/Container";
import Pricing from "./Pricing/Pricing";
import { motion } from "framer-motion";

const Plan = () => {
  return (
    <Container>
      <div
        id="plans"
        className="my-20 flex flex-col items-center justify-center gap-10 lg:flex-row"
      >
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Join></Join>
        </motion.div>
        <motion.div
          initial={{ x: "50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Pricing></Pricing>
        </motion.div>
      </div>
    </Container>
  );
};

export default Plan;
