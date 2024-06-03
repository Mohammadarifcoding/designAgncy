

const Button = ({children}) => {
  return (
    <div className="w-max hover:shadow-custom-hover transition-all rounded-xl  duration-500">
      <div className="px-10 bg-gradient-to-b from-black hover:from-[#292929] border-t-2 border-white to-gray-800 hover:to-gray-900  text-white py-5 rounded-xl inner-shadow">
        {children}
      </div>
    </div>
  );
};

export default Button;
