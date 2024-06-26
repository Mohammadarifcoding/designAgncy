import logo from "/logo/logo-no-bg.png";

const Header = () => {
  return (
    <div className="flex justify-center py-6">
      <img loading="lazy" className="max-w-[150px]" src={logo} alt="" />
    </div>
  );
};

export default Header;
