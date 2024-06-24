import React from "react";
import Join from "./Join/Join";
import Container from "../../../Shared/Container/Container";
import Pricing from "./Pricing/Pricing";

const Plan = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center  my-20 justify-center gap-10">
        <Join></Join>
        <Pricing></Pricing>
      </div>
    </Container>
  );
};

export default Plan;
