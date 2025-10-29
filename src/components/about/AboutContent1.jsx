import React, { useContext } from "react";
import image1 from "../../assets/aboutImages/contentimg2.png";
import { RecipeContext } from "../context/GlobalContext";
import { motion } from "framer-motion";

export default function AboutContent1() {
  const { splitString } = useContext(RecipeContext);
  const arr1 = [
    {
      id: "1",
      number: "3",
      text: "Locations",
    },
    {
      id: "2",
      number: "1995",
      text: "Founded",
    },
    {
      id: "3",
      number: "65+",
      text: "Staff Members",
    },
    {
      id: "4",
      number: "100%",
      text: "Satisfied Customers",
    },
  ];
  return (
    <div className="w-full md:h-[700px] flex items-center justify-center bg-[#f9f9f7]">
      <div className="md:w-[80%] w-[90%] md:h-[80%] flex md:flex-row flex-col justify-between mt-15 md:mt-0">
        {/**Left side */}
        <motion.div
          initial={{ opacity: 0, x: -150, y: 200 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-[45%] w-full md:h-full flex flex-col justify-between gap-10 md:gap-0"
        >
          <div className="w-full flex flex-col gap-5">
            <p className="flex flex-wrap gap-x-3 md:text-[55px] text-4xl md:leading-[60px] text-[var(--tirtiary-text-color)]">
              {splitString("A little information for our valuable guest").map(
                (item, ind) => (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    key={ind}
                    className="my-font"
                  >
                    {item}
                  </motion.span>
                )
              )}
            </p>
            <p className="md:text-lg text-[#414536]">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            {arr1.map((item) => (
              <motion.div
                initial={{ filter: "drop-shadow(0 0 0px #bbbbbb)" }}
                whileHover={{ filter: "drop-shadow(0 0 10px #E5EA55)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={item.id}
                className="w-full bg-white flex flex-col gap-3 items-center justify-center shadow-[0px_0px_10px_1px_#bbbbbb] rounded-lg py-5"
              >
                <p className="md:text-4xl text-3xl text-[var(--tirtiary-text-color)] my-font">
                  {item.number}
                </p>
                <p className="font-">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/**Right side */}
        <motion.div
          initial={{ opacity: 0, x: 150, y: 200 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-[40%] w-full h-full flex items-center justify-center rounded-xl overflow-hidden my-15 md:my-0"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            src={image1}
            className="md:h-full w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
