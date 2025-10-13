import React, { useEffect, useState } from "react";
import mainBg from "../../assets/main-bg.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const arr1 = ["taste", "family", "friends", "reunion", "lunch", "dinner"];
  const arr2 = ["Best", "food", "for"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % arr1.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full md:h-[650px] h-[500px] relative"
    >
      <img src={mainBg} alt="" className="md:size-full h-full object-cover" />
      <motion.div className="absolute md:w-[80%] w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center md:text-8xl text-6xl text-[#2C2F24] md:px-0 px-5">
          <p className="flex flex-wrap justify-center items-center gap-6 gap-y-2">
            {arr2.map((item, ind) => (
              <motion.span
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
                key={ind}
                className="my-font inline-block"
              >
                {item}
              </motion.span>
            ))}
          </p>
          <motion.p className="relative flex items-center gap-6">
            <motion.span
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="my-font"
            >
              your{" "}
            </motion.span>
            <AnimatePresence mode="wait">
              <motion.span
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={arr1[index]}
                className={`my-font inline-block text-[var(--primary-button-color)]`}
              >
                {arr1[index]}
              </motion.span>
            </AnimatePresence>
          </motion.p>
        </div>
        <motion.div className="md:w-[35%] flex items-center justify-center md:text-xl text-lg text-[#2C2F24]">
          <p className="text-center">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
        </motion.div>
        <div className="w-full flex flex-row gap-3 gap-y-5 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, cursor: "pointer" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="w-[50%] md:w-[13%] border md:px-7 md:py-3 py-3 rounded-full outline-0 bg-[#AD343E] text-white"
            onClick={() => navigate("/book")}
          >
            Book A Table
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, cursor: "pointer" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="w-[50%] md:w-[13%] border md:px-7 md:py-3 py-3 rounded-full outline-0"
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
