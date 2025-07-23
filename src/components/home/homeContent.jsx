import React from "react";
import image1 from "../../assets/content/homeContentimg1.png";
import image2 from "../../assets/content/homeContentimg2.png";
import image3 from "../../assets/content/homeContentimg3.png";
import { BiSolidOffer } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

export default function HomeContent() {
  return (
    <div className="w-full md:h-[700px] flex justify-center items-center mt-20 md:mt-0 bg-[#F9F9F7]">
      <div className="md:w-[80%] w-[90%] md:h-[450px] flex md:flex-row flex-col items-center justify-center gap-5 md:gap-0">
        <div className="md:w-[50%] flex md:gap-5 gap-2">
          <div className="md:w-[55%] flex md:items-start items-center justify-center">
            <img src={image1} alt="image1" className="md:w-full w-[90%] md:h-[95%]" />
          </div>
          <div className="md:w-[45%] flex flex-col gap-3 justify-end">
            <img src={image2} alt="" className="w-full md:h-[50%]" />
            <img src={image3} alt="" className="w-full md:h-[40%] " />
          </div>
        </div>
        <div className="md:w-[50%] flex items-center md:justify-end justify-between">
          <div className="md:w-[75%] w-[95%] flex flex-col space-y-10 py-5 md:py-0">
            <div className="flex flex-col items-center space-y-4 px-5 md:px-0">
              <p className="md:text-[55px] text-4xl md:leading-[60px] my-font text-[var(--tirtiary-text-color)] text-center md:text-start">
                Fastest Food Delivery in City
              </p>
              <p className="text-[#414536] text-lg">
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <div className="flex items-center justify-start gap-5 text-xl px-5 md:px-0">
                <div className="w-[30px] h-[30px] rounded-full text-white bg-[var(--primary-button-color)] flex items-center justify-center">
                  <MdOutlineWatchLater size="16px" />
                </div>
                <p>Delivery within 30 minutes</p>
              </div>
              <div className="flex items-center justify-start gap-5 text- px-5 md:px-0">
                <div className="w-[30px] h-[30px] rounded-full text-white bg-[var(--primary-button-color)] flex items-center justify-center">
                  <BiSolidOffer size="16px" />
                </div>
                <p>Best Offer & Pricess</p>
              </div>
              <div className="flex items-center justify-start gap-5 text-xl px-5 md:px-0">
                <div className="w-[30px] h-[30px] rounded-full text-white bg-[var(--primary-button-color)] flex items-center justify-center">
                  <BsCart3 size="16px" />
                </div>
                <p>Online Services Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
