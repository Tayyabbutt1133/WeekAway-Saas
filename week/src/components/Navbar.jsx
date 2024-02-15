import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
      if (!isSmallScreen) {
        setNav(false); // Close the side menu when transitioning to large screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="font-serif w-full text-3xl text-[#00df9a]">WeekAway.</h1>
        <ul className="hidden md:flex font-serif">
          <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
            Home
          </li>
          <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
            Company
          </li>
          <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
            Resource
          </li>
          <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
            About
          </li>
          <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
            Contact
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineMenu size={20} className="cursor-pointer" />
          ) : (
            <AiOutlineClose className="cursor-pointer" />
          )}
        </div>

        {/* side navbar */}
        <div
          className={`fixed left-0 top-0 w-[35%] border-r border-r-gray-900 bg-[#000300] h-full ease-in-out duration-500 ${
            isSmallScreen && nav ? "" : "left-[-100%]"
          }`}
        >
          <h1 className="font-serif w-full text-3xl text-[#00df9a] mt-7 ml-4">
            WeekAway.
          </h1>
          <ul className="pt-24 uppercase font-serif">
            <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
              Home
            </li>
            <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
              Company
            </li>
            <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
              Resource
            </li>
            <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
              About
            </li>
            <li className="cursor-pointer relative p-4 hover:text-green-500 hover:border-b-2 hover:border-green-500 transition-colors duration-300">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
