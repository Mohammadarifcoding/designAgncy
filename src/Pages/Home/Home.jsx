import Header from "../../Shared/Header/Header";
import Hero from "./Hero/Hero";
import Navbar from './../../Shared/Navbar/Navbar';
import Portfolio from "./Portfolio/Portfolio";
import { useState } from "react";
import AnyTask from "./AnyTask/AnyTask";
import WhatWeCreate from "./WhatWeCreate/WhatWeCreate";

const Home = () => {
	const [isOpen,setIsOpen] = useState(true)
  return (
		<div className="max-w-[1440px] mx-auto">
      <div className="">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}></Navbar>

      </div>
			<Header />
			<main className="main-bg rounded-3xl mx-4 overflow-x-hidden">
				<Hero />
				<Portfolio/>
				<AnyTask/>
				<WhatWeCreate/>
			</main>
		</div>
	);
};

export default Home;
