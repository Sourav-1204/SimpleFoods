import React from "react";
import mainBg from "../../assets/main-bg.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="w-full md:h-[650px] h-[500px] relative">
      <img src={mainBg} alt="" className="md:size-full h-full object-cover" />
      <div className="absolute w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center md:text-8xl text-5xl text-[#2C2F24]">
          <p className="my-font">Best food for</p>
          <p className="my-font">your taste</p>
        </div>
        <div className="md:w-[35%] flex items-center justify-center md:text-xl text-lg text-[#2C2F24]">
          <p className="text-center">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
        </div>
        <div className="w-full flex flex-row gap-2 justify-center">
          <button
            className="w-[50%] md:w-[13%] border md:px-7 md:py-3 py-3 rounded-full outline-0 bg-[#AD343E] text-white active:scale-[0.9] transition-all duration-300 ease-in-out"
            onClick={() => navigate("/book")}
          >
            Book A Table
          </button>
          <button
            className="w-[50%] md:w-[13%] border md:px-7 md:py-3 py-3 rounded-full outline-0 active:scale-[0.9] transition-all duration-300 ease-in-out"
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </button>
        </div>
      </div>
    </div>
  );
}
