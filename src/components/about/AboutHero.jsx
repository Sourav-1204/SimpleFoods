import React from "react";
import image1 from "../../assets/aboutImages/hero1.png";
import { LuMail, LuPhone } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";

export default function AboutHero() {
  return (
    <div className="w-full md:h-[700px] flex justify-center items-center bg-[#F9F9F7]">
      <div className="md:w-[80%] md:h-[70%] flex md:flex-row flex-col-reverse mt-15 md:mt-0">
        <div className="relative md:w-[50%] w-full h-[400px] md:h-full flex items-center md:justify-center ml-5 md:ml-0 mb-10 md:mb-0">
          <img
            src={image1}
            alt="image"
            className="md:w-full w-[80%] md:h-full rounded-xl"
          />
          <div className="absolute md:w-[60%] w-[80%] md:h-auto h-[72%] md:top-[55%] md:left-[45%] top-[22%] left-[10%] rounded-xl text-[var(--secondary-text-color)] bg-[var(--primary-text-color)] flex flex-col justify-center gap-5 md:px-10 md:py-10 py-5 px-3">
            <p className="text-xl pl-2">Come and visit us</p>
            <div className="flex flex-col space-y-4 text-md pl-2">
              <div className="flex items-center gap-4">
                <LuPhone />
                <p>9999999999</p>
              </div>
              <div className="flex items-center gap-4">
                <LuMail />
                <p>sfoods@restaurant.com</p>
              </div>
              <div className="flex items-start gap-4">
                <TfiLocationPin size="26px" />
                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center md:justify-end items-center">
          <div className="md:w-[80%] flex flex-col space-y-5 px-8 md:px-0 py-5 md:py-0">
            <div>
              <p className="md:text-[55px] text-5xl my-font text-[var(--tirtiary-text-color)]">
                We provide healthy food for your family.
              </p>
            </div>
            <div>
              <p className="text-lg">
                Our story began with a vision to create a unique dining
                experience that merges fine dining, exceptional service, and a
                vibrant ambiance. Rooted in city's rich culinary culture, we aim
                to honor our local roots while infusing a global palate.
              </p>
            </div>
            <div>
              <p className="text-[#414536]">
                At place, we believe that dining is not just about food, but
                also about the overall experience. Our staff, renowned for their
                warmth and dedication, strives to make every visit an
                unforgettable event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
