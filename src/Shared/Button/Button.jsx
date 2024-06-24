import cn from "../../lib/utils";

const Button = ({ children,className,OuterClassName  }) => {
  return (
    <div  className={cn("w-max hover:shadow-custom-hover  rounded-xl  duration-500",OuterClassName)}>
      <div className={cn("px-10 bg-gradient-to-b from-black hover:from-[#292929] border-t-2 border-white to-gray-800 hover:to-gray-900  text-white py-5 rounded-xl inner-shadow",className)}>
        {children}
      </div>
    </div>
  );
};

export default Button;
