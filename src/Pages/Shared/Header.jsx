import logo from './../../assets/logo.png'
const Header = () => {
    const navMenu = <>
        <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500"><a>Home</a></li>
        <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500"><a>CONTACT US</a></li>
        <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500"><a>DASHBOARD</a></li>
        <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500"><a>Our Menu</a></li>
        <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500"><a>Our Shop</a></li>
        <li className="text-white font-bold lg:text-lg md:text-base text-sm uppercase hover:text-yellow-500"><a>SIGN IN</a></li>
    </>;

    return (
        <div className="navbar bg-base-100 py-2 lg:py-6 md:py-4">
            <div className="navbar-start  lg:w-1/6 md:w-1/6">

                <a className="uppercase ml-6 text-2x cursor-pointer w-16 h-16 lg:w-24 lg:h-24 md:w-20 md:h-20 ">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                    {navMenu}
                </ul>
            </div>


            <div className="navbar-end lg:w-5/6 md:w-5/6 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>

        </div>
    );
};

export default Header;