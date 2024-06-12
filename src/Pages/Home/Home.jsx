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
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mx-auto max-w-[1440px] pt-10">
      <div className="">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>
      </div>

      <main className="main-bg mx-4 overflow-x-hidden rounded-3xl ">
        <Header />
        <Hero />
        <Portfolio />
        <WhatWeCreate />
        <ArtOfSubtlety />
        <SharkTank />
        <AnyTask />
      </main>
    </div>
  );
};

export default Home;
