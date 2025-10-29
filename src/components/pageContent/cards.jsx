import React from "react";
import RatingStars from "./rating";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cards({ item }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/recipe/${item.id}`);
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ boxShadow: "0px 0px 20px 5px #FF6B6B" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full bg-yellow-100 flex flex-col items-center space-y-3 rounded-tl-[30px] rounded-br-[30px] overflow-hidden border border-[var(--fourth-text-color)]"
      key={item.id}
      onClick={handleClick}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: "easeInOut",
        }}
        src={item.image}
        alt={item.title + ".img"}
      />
      <div className="w-[90%] flex flex-col space-y-1.5 pb-2 px-2">
        <p className="md:text-xl text-lg font-semibold truncate ">
          {item.name}
        </p>
        <p className="md:text-lg font-semibold text-[#54594a]">
          {item.mealType[0]}
        </p>
        <div className="flex items-center gap-2">
          <p className="md:text-lg">{item.rating}</p>
          <RatingStars rating={item.rating} />
        </div>
      </div>
    </motion.div>
  );
}
