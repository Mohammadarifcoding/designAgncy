import React from "react";
import Join from "./Join/Join";
import Container from "../../../Shared/Container/Container";

const Plan = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row my-20">
        <Join></Join>
        <Join></Join>
      </div>
    </Container>
  );
};

export default Plan;
