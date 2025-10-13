import React from "react";
import homeAbout from "../../assets/homeAbout.png";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeAbout() {
  const navigate = useNavigate();

  const heading = "We provide healthy food for your family.";
  const words = heading.split(" ");
  return (
    <div className="w-full md:h-[700px] flex justify-center items-center mt-15 md:mt-0 bg-[#F9F9F7]">
      <div className="md:w-[80%] md:h-[70%] flex md:flex-row flex-col ml-7 md:ml-0">
        <div className="relative md:w-[50%] w-full md:h-full h-[370px] flex items-center md:justify-center">
          <motion.img
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={homeAbout}
            alt="about-img"
            className="md:w-[90%] w-[80%] md:h-full"
          />
          <motion.div
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="md:w-[60%] w-[80%] md:h-auto h-[74%] absolute md:top-[55%] md:left-[42%] top-[25%] left-[12%]  text-[var(--secondary-text-color)] bg-[var(--primary-text-color)] flex flex-col justify-center gap-5 md:px-10 md:py-10 py-7 px-5 rounded-xl"
          >
            <p className="text-xl">Come and visit us</p>
            <div className="flex flex-col space-y-4 text-md">
              <div className="flex items-center gap-4">
                <LuPhone />
                <p>9999999999</p>
              </div>
              <div className="flex items-center gap-4">
                <LuMail />
                <p>sfoods@restaurant.com</p>
              </div>
              <div className="flex items-start gap-4">
                <TfiLocationPin size="30px" />
                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="md:w-[50%] w-[90%] flex md:justify-end items-center justify-center text-[#2C2F24]">
          <div className="md:w-[80%] flex flex-col gap-5 py-5 md:py-0 px-2 md:px-0">
            <p className="md:text-[55px] text-[40px] leading-[60px]">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-block cursor-pointer my-font mr-5"
                >
                  {word}
                </motion.span>
              ))}
            </p>
            <p className="text-lg">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className="tex-[#414536]">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <div className="mt-3 flex md:justify-start justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className=" border px-7 py-3 rounded-full outline-0 active:scale-[0.9] hover:bg-[var(--primary-button-color)] hover:text-white"
                onClick={() => navigate("/about")}
              >
                More About Us
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
