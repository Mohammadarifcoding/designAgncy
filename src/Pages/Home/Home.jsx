import Header from "../../Shared/Header/Header";
import Hero from "./Hero/Hero";
import Navbar from "./../../Shared/Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import { useState } from "react";
import AnyTask from "./AnyTask/AnyTask";
import WhatWeCreate from "./WhatWeCreate/WhatWeCreate";
import ArtOfSubtlety from "./ArtOfSubtlety/ArtOfSubtlety";
import SharkTank from "./SharkTank/SharkTank";
import MembershipBenefits from "./MembershipBenefits/MembershipBenefits";
import Plan from "./plan/Plan";

const Home = () => {
 
  return (
    <div className="">
      
        <Hero />
        <Portfolio />
        <WhatWeCreate />
        <ArtOfSubtlety />
        <SharkTank />
        <MembershipBenefits/>
        <AnyTask />
        <Plan/>
    </div>
  );
};

export default Home;
