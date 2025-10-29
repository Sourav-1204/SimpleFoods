import React from "react";
import { CgCoffee } from "react-icons/cg";
import { ImGlass } from "react-icons/im";
import { MdRamenDining } from "react-icons/md";
import { RiCake2Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion, spring } from "framer-motion";

export default function HomeMenu() {
  const navigate = useNavigate();
  const content = [
    {
      id: "1",
      icon: <CgCoffee size="30px" />,
      heading: "Breakfast",
    },
    {
      id: "2",
      icon: <MdRamenDining size="30px" />,
      heading: "Main Dishes",
    },
    {
      id: "3",
      icon: <ImGlass size="30px" />,
      heading: "Drinks",
    },
    {
      id: "4",
      icon: <RiCake2Line size="30px" />,
      heading: "Desserts",
    },
  ];
  const arr2 = ["Browse", "Our", "Menu"];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full md:h-[600px] flex flex-col items-center justify-center gap-10 text-[var(--primary-text-color)]"
    >
      <div>
        <p className="flex flex-wrap justify-center items-center gap-3 text-5xl md:text-start mt-15 md:mt-0">
          {arr2.map((item, ind) => (
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="my-font"
              key={ind}
            >
              {item}
            </motion.span>
          ))}
        </p>
      </div>
      <div className="md:w-[80%] w-[95%] grid md:grid-cols-4 grid-cols-2 place-items-center md:space-x-4 gap-4 md:gap-0">
        {content.map((item) => (
          <div
            className="md:w-[90%] flex justify-center items-center border border-[#ccc] rounded-[12px] md:px-5 px-3 md:py-10 py-6 hover:bg-gray-100 transition-all ease-in-out duration-300"
            key={item.id}
          >
            <div className="flex flex-col items-center gap-4 ">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="size-[60px] flex items-center justify-center bg-[#4d592b1e] rounded-full"
              >
                {item.icon}
              </motion.div>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ type: spring, stiffness: 300 }}
                className="text-xl text-gray-500 font-semibold hover:text-gray-800"
              >
                {item.heading}
              </motion.p>
              <p className="font-light text-center">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <div>
                <motion.button
                  whileHover={{ color: "#098802", scale: 1.1 }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: "0.3",
                  }}
                  className="flex items-center gap-2 text-[var(--primary-button-color)] hover-btn active:scale-[0.9] mt-2 cursor-pointer"
                  onClick={() => navigate("/menu")}
                >
                  Explore Menu <FaCircleArrowRight />
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
