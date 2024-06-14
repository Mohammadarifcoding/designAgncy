import Header from "../../Shared/Header/Header";
import Hero from "./Hero/Hero";
import Navbar from "./../../Shared/Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import { useState } from "react";
import AnyTask from "./AnyTask/AnyTask";
import WhatWeCreate from "./WhatWeCreate/WhatWeCreate";
import ArtOfSubtlety from "./ArtOfSubtlety/ArtOfSubtlety";
import SharkTank from "./SharkTank/SharkTank";

const Home = () => {
 
  return (
    <div className="">
        <Header />
        <Hero />
        <Portfolio />
        <WhatWeCreate />
        <ArtOfSubtlety />
        <SharkTank />
        <AnyTask />
    </div>
  );
};

export default Home;
