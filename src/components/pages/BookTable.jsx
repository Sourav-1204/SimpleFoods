import React, { useContext } from "react";
import BookForm from "../bookTable/bookForm";
import image1 from "../../assets/booktable/map.png";
import { motion } from "framer-motion";
import { RecipeContext } from "../context/GlobalContext";

export default function BookTable() {
  const { splitString } = useContext(RecipeContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full md:h-[1200px] h-[1000px]"
    >
      <div className="w-full flex flex-col items-center justify-center mt-15 space-y-15">
        <div className="md:w-[50%] w-full flex flex-col items-center gap-7">
          <p className="flex flex-wrap gap-x-3 md:text-8xl text-5xl text-[var(--tirtiary-text-color)]">
            {splitString("Book A Table").map((item, ind) => (
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                key={ind}
                className="my-font"
              >
                {item}
              </motion.span>
            ))}
          </p>
          <p className="md:w-[70%] w-[60%] md:text-lg text-[#495460] text-center">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <BookForm />
      </div>
      <div className=" w-full absolute -z-[100] md:top-[40%] top-[82%]">
        <img src={image1} className="w-full" />
      </div>
    </motion.div>
  );
}
