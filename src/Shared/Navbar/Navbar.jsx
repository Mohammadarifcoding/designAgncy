import { useState } from "react";
import logoIcon from "/logo/logoIcon.png";

const Navbar = ({isOpen, setIsOpen}) => {
	// const [isOpen, setIsOpen] = useState(false);
	// const [isOpenMobile, setIsOpenMobile] = useState(false);
	const navMenu = ["How it works", "Benefits", "Services", "Pricing", "FAQs"];
	return (
		<div
			className={` bg-gradient-to-b from-black to-gray-800 text-white  rounded-full inner-shadow bottom-5 z-50 fixed left-5 md:left-1/2 duration-300 md:-translate-x-1/2  ${
				isOpen ? " h-[70px] w-[70px] md:h-max" : " py-6 md:py-0 h-[500px] md:h-max flex items-center"
			} `}>
			<div className="flex flex-col md:hidden  items-center gap-6 ">
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="bg-[#292929] w-[70px] border border-white md:border-none h-[70px] md:p-3 md:h-full rounded-full flex items-center justify-center  md:w-[70px] order-4 md:order-first">
					<img className="w-[20px] h-[20px] md:w-[25px] md:h-[28px] object-cover" src={logoIcon} alt="Logo Icon" />
				</div>

				<div className={`flex items-center flex-col md:flex-row py-4 px-2 md:p-0 gap-2 ${isOpen ? "scale-0 absolute" : "scale-100"}`}>
					{navMenu?.map((item, idx) => (
						<div key={idx} className="text-center text-white font-medium cursor-pointer text-sm  hover:bg-blue-400 px-3 py-2 rounded-full transition-all duration-500 whitespace-nowrap">
							{item}
						</div>
					))}
				</div>
				<div className={`bg-[#292929] font-medium p-4 rounded-full w-max text-white order-first md:order-last duration-300 ${isOpen ? "scale-0 absolute" : "scale-100"}`}>Login</div>
			</div>
			<div className="flex flex-col md:flex-row items-center gap-6 ">
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="bg-[#292929] w-[70px] border border-white md:border-none h-[70px] md:p-3 md:h-full rounded-full flex items-center justify-center  md:w-[70px] order-4 md:order-first">
					<img className="w-[20px] h-[20px] md:w-[25px] md:h-[28px] object-cover" src={logoIcon} alt="Logo Icon" />
				</div>

				<div className={`flex items-center flex-col md:flex-row py-4 px-2 md:p-0 gap-2 ${isOpen ? "scale-0 absolute" : "scale-100"}`}>
					{navMenu?.map((item, idx) => (
						<div key={idx} className="text-center text-white font-medium cursor-pointer text-sm  hover:bg-blue-400 px-3 py-2 rounded-full transition-all duration-500 whitespace-nowrap">
							{item}
						</div>
					))}
				</div>
				<div className={`bg-[#292929] font-medium p-4 rounded-full w-max text-white order-first md:order-last duration-300 ${isOpen ? "scale-0 absolute" : "scale-100"}`}>Login</div>
			</div>
		</div>
	);
};

export default Navbar;
