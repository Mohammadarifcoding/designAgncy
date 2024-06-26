import logoIcon from "/logo/logoIcon.png";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navMenu = ["How it works", "Benefits", "Services", "Pricing", "FAQs"];
  return (
    <div
      className={`inner-shadow fixed bottom-5 left-5 z-50 rounded-full bg-gradient-to-b from-black to-gray-800 text-white duration-300 md:left-1/2 md:-translate-x-1/2 ${
        isOpen
          ? "h-[60px] w-[60px] md:h-max"
          : "flex h-[420px] items-center py-2 md:h-max md:px-1.5 md:py-0"
      } `}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="order-4 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border border-white bg-[#292929] md:order-first md:h-full md:w-[70px] md:border-none md:p-3"
        >
          <img
            loading="lazy"
            className="h-[20px] w-[20px] object-cover md:h-[28px] md:w-[25px]"
            src={logoIcon}
            alt="Logo Icon"
          />
        </div>

        <div
          className={`flex flex-col items-center gap-2 px-1 py-2 md:flex-row md:p-0 md:py-4 ${isOpen ? "absolute scale-0" : "scale-100"}`}
        >
          {navMenu?.map((item, idx) => (
            <div
              key={idx}
              className="cursor-pointer whitespace-nowrap rounded-full p-2 text-center text-xs font-medium text-white transition-all duration-500 hover:bg-blue-400 md:text-sm"
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className={`order-first w-max cursor-pointer rounded-full bg-[#292929] p-4 font-medium text-white duration-300 md:order-last ${
            isOpen ? "absolute scale-0" : "scale-100 text-xs md:text-base"
          }`}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
