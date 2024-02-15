import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <>
      <div className=" text-white">
        <div className=" max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className=" text-[#00df9a] font-bold p-2">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div className=" flex justify-center items-center">
            <p className=" md:text-5xl sm:text-4xl text-xl font-serif py-4">
              Fast, Flexible financing for
            </p>
            <ReactTyped
              className="md:text-4xl sm:text-4xl text-xl font-bold  pl-2 md:pl-4"
              strings={["S&P", "CRYPTO", "SASS"]}
              typeSpeed={80} // Adjust typeSpeed to 80 milliseconds per character
              backSpeed={60} // Adjust backSpeed to 60 milliseconds per character
              loop
            />
          </div>
          <p className="sm:text-sm md:text-2xl text-xl font-bold text-gray-500">
          
            Monitor your data analytics to increase revenue for S&P, CRYPTO,
            SASS Platform
          </p>
          <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-green-400">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
