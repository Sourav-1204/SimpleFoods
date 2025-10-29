import React, { useContext, useState } from "react";
import { RecipeContext } from "../context/GlobalContext";
import Cards from "./cards";
import { motion } from "framer-motion";

export default function PageHero() {
  const { loading, menuList, handleViewMore, defaultView, splitString } =
    useContext(RecipeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex items-center justify-center bg-[#f9f9f7]"
    >
      <div className="md:w-[70%] flex flex-col items-center justify-center my-15 space-y-15">
        <div className="md:w-[65%] w-[70%] flex flex-col items-center gap-4">
          <p className="flex flex-wrap justify-center gap-3 md:text-8xl text-5xl text-[var(--tirtiary-text-color)]">
            {splitString("Our Blog & Articles").map((item, ind) => (
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                key={ind}
                className={`my-font ${ind % 2 !== 0 ? "text-[#C33764]" : ""}`}
              >
                {item}
              </motion.span>
            ))}
          </p>
          <p className="md:w-[68%] md:text-lg text-center text-[#495460] font-light">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="md:w-full w-[90%] flex flex-col items-center justify-center overflow-hidden">
          {!loading && menuList.length > 0 ? (
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center rounded-tl-4xl rounded-br-4xl justify-center md:gap-5 gap-3 py-5 px-5 bg-gradient-to-r from-[#C33764] via-[#1D2671] to-[#FF512F]">
              {menuList.slice(0, defaultView).map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </div>
          ) : (
             <div className="w-[90%] h-[250px] my-10 flex items-center justify-center">
              <p className="text-5xl my-font">Loading data! please wait...</p>
            </div>
          )}
          <motion.button
            whileHover={{ backgroundColor: "#f9f9f7", color: "#000" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            disabled={defaultView >= menuList.length}
            onClick={handleViewMore}
            className={`md:w-[20%] w-[50%] rounded-full border bg-[var(--primary-button-color)] px-5 py-3 text-white mt-10 ${
              loading ? "hideBtn" : "showBtn"
            }`}
          >
            View More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
