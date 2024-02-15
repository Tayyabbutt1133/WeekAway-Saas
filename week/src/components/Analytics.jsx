import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className=" w-full bg-white py-16 px-4">
        <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className=" w-[500px] mx-auto py-4" src={laptop} alt="" />
                  <div className=" flex flex-col justify-center">
                      <p className=" text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                      <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-serif">Manage Data Analytics Centrally</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit, architecto modi commodi nesciunt eos eveniet recusandae. Repellendus quis nesciunt culpa vitae delectus dolorum, modi, nam omnis, libero laborum voluptatum!</p>
                      <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:bg-green-400 font-serif">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
