import React, { useContext, useEffect } from "react";
import image1 from "../../assets/content/homeContentimg1.png";
import image2 from "../../assets/content/homeContentimg2.png";
import image3 from "../../assets/content/homeContentimg3.png";
import { BiSolidOffer } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { motion } from "framer-motion";
import { RecipeContext } from "../context/GlobalContext";

export default function HomeContent() {
  const { splitString } = useContext(RecipeContext);

  return (
    <div className="w-full md:h-[700px] flex justify-center items-center mt-20 md:mt-0 bg-[#F9F9F7]">
      <div className="md:w-[80%] w-[90%] md:h-[450px] flex md:flex-row flex-col items-center justify-center gap-5 md:gap-0 max-md:pt-5">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          className="md:w-[50%] flex md:gap-5 gap-2"
        >
          <div className="md:w-[55%] flex md:items-start items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              src={image1}
              alt="image1"
              className="md:w-full w-[90%] md:h-[95%]"
            />
          </div>
          <div className="md:w-[45%] flex flex-col gap-3 justify-end">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              src={image2}
              alt=""
              className="w-full md:h-[50%]"
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
              src={image3}
              alt=""
              className="w-full md:h-[40%] "
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
          className="md:w-[50%] flex items-center md:justify-end justify-between"
        >
          <div className="md:w-[75%] w-[95%] flex flex-col space-y-10 py-5 md:py-0">
            <div className="flex flex-col items-center space-y-4 px-5 md:px-0">
              <p className="flex flex-wrap gap-3 md:text-5xl text-4xl text-[var(--tirtiary-text-color)] text-center md:text-start">
                {splitString("Fastest Food Delivery in City").map(
                  (item, ind) => (
                    <motion.span
                      key={ind}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="my-font"
                    >
                      {item}
                    </motion.span>
                  )
                )}
              </p>
              <p className="text-[#414536] text-lg">
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              <div className="flex items-center justify-start gap-5 md:text-lg px-5 md:px-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-[40px] h-[40px] rounded-full text-white bg-[var(--primary-button-color)] flex items-center justify-center"
                >
                  <MdOutlineWatchLater size="16px" />
                </motion.div>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Delivery within 30 minutes
                </motion.p>
              </div>
              <div className="flex items-center justify-start gap-5 md:text-lg px-5 md:px-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-[40px] h-[40px] rounded-full text-white bg-[var(--primary-button-color)] flex items-center justify-center"
                >
                  <BiSolidOffer size="16px" />
                </motion.div>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Best Offer & Prices
                </motion.p>
              </div>
              <div className="flex items-center justify-start gap-5 md:text-lg px-5 md:px-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-[40px] h-[40px] rounded-full text-white bg-[var(--primary-button-color)] flex items-center justify-center"
                >
                  <BsCart3 size="16px" />
                </motion.div>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Online Services Available
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
