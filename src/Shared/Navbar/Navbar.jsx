import logo from '/public/logo/logo-no-bg.png'

const Navbar = () => {
    return (
        <div className="flex justify-center py-6">
            <img className='max-w-[150px]' src={logo} alt="" />
        </div>
    );
};

export default Navbar;