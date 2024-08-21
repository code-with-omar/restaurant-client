import React from 'react';

const das = () => {
    return (
        <div className="flex">
            {/* Dashboard sidebar */}
            <div className="bg-[#D1A054] w-1/4  h-dvh text-[#151515] font-medium sm:p-9">
                <h2 className="text-5xl">BISTRO BOSS</h2>
                <h4>Restaurant</h4>
                <ul className="">
                    <li>

                        <Link to=""><IoMdHome className="text-white"></IoMdHome>Home</Link>
                    </li>
                    <li>
                        <Link to=""><FaCalendarAlt /> Reservation</Link>
                    </li>
                    <li>
                        <Link to=""><IoIosWallet />Payment History</Link>
                    </li>
                    <li>
                        <Link to=""><FaShoppingCart /> My Cart</Link>
                    </li>
                    <li>
                        <Link to=""><VscFeedback /> Add Review</Link>
                    </li>
                    <li>
                        <Link to=""><VscFeedback /> My Booking</Link>
                    </li>
                </ul>
                <div className="divider divider-neutral"></div>
                <ul className="">
                    <li>
                        <Link to=""><IoMdHome className="text-white"></IoMdHome>Admin Home</Link>
                    </li>
                    <li>
                        <Link to=""><GiHamburgerMenu></GiHamburgerMenu>Menu</Link>
                    </li>
                    <li>
                        <Link to=""><MdShoppingBag></MdShoppingBag>Shop</Link>
                    </li>
                    <li>
                        <Link to=""><HiMail />Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default das;