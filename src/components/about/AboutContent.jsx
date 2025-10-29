import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa6";
import image1 from "../../assets/aboutImages/content1/contentimg1.png";
import image2 from "../../assets/aboutImages/content1/menu1.svg";
import image3 from "../../assets/aboutImages/content1/menu2.svg";
import image4 from "../../assets/aboutImages/content1/menu3.svg";
import { motion } from "framer-motion";
import { RecipeContext } from "../context/GlobalContext";

export default function AboutContent() {
  const { splitString } = useContext(RecipeContext);
  const content = [
    {
      id: "1",
      icon: image2,
      heading: "Multi Cuisine",
    },
    {
      id: "2",
      icon: image3,
      heading: "Easy To Order",
    },
    {
      id: "3",
      icon: image4,
      heading: "Fast Delivery",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full md:h-[800px] flex flex-col items-start gap-5"
    >
      <div className="relative md:w-full md:h-[75%] flex items-center justify-center mt-10 md:mt-0">
        <img
          src={image1}
          alt="omage"
          className="md:w-full h-[300px] md:h-full"
        />
        <div className="absolute md:w-[35%] w-[63%] md:h-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center md:gap-10 gap-4">
          <motion.div
            animate={{
              boxShadow: [
                "0px 0px 10px 2px #ccc",
                "0px 0px 15px 4px #aaa",
                "0px 0px 20px 6px #888",
                "0px 0px 15px 4px #aaa",
              ],
            }}
            whileHover={{ backgroundColor: ["#fff", "#ccc", "#fff"] }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="md:size-[80px] size-[60px] rounded-full bg-white flex items-center justify-center cursor-pointer"
          >
            <FaPlay className="text-[var(--primary-button-color)] size-[24px]" />
          </motion.div>
          <p className="flex flex-wrap gap-x-3 md:text-[55px] text-2xl md:leading-[60px] text-white my-font">
            {splitString("Feel the authentic & original taste from us").map(
              (item, ind) => (
                <motion.span
                  whileHover={{ color: "#aaa" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  key={ind}
                  className="my-font"
                >
                  {item}
                </motion.span>
              )
            )}
          </p>
        </div>
      </div>
      <div className="md:w-full md:h-[20%] flex items-center justify-center mb-15 md:mb-0">
        <div className="w-[80%] flex md:flex-row flex-col md:items-center justify-between gap-5 md:gap-0 mt-10 md:mt-0">
          {content.map((item) => (
            <div
              className="md:w-[28%] flex items-start justify-between gap-6"
              key={item.id}
            >
              <motion.img
                animate={{ scale: [1, 1.05, 1] }}
                whileHover={{}}
                transition={{
                  type: "tween",
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                src={item.icon}
                alt={item.heading + ".img"}
                className="size-[40px]"
              />
              <div className="flex flex-col gap-2">
                <p className="text-[var(--tirtiary-text-color)] text-xl font-bold">
                  {item.heading}
                </p>
                <p className="text-[#414536]">
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
