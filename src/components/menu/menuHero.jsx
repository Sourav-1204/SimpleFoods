import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../context/GlobalContext";
import Cards from "../pageContent/cards";
import { useNavigate } from "react-router-dom";
import RatingStars from "../pageContent/rating";
import { motion } from "framer-motion";

export default function MenuHero() {
  const {
    uniqueCategories,
    loading,
    menuList,
    filterRecipes,
    setFilterRecipes,
    defaultView,
    handleViewMore,
  } = useContext(RecipeContext);
  const [currentCategory, setCurrentCategory] = useState("");

  const navigate = useNavigate();

  function handleClick(getId) {
    navigate(`/recipe/${getId}`);
  }

  function fetchFilteredItems() {
    let cpyRecipes = [...menuList];
    setFilterRecipes(() =>
      currentCategory !== ""
        ? menuList.filter((menuListItem) =>
            menuListItem.mealType.some(
              (mealItem) => mealItem === currentCategory
            )
          )
        : cpyRecipes
    );
  }

  useEffect(() => {
    fetchFilteredItems();
  }, [currentCategory]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex items-center justify-center"
    >
      <div className="md:w-[80%] w-[90%] flex flex-col items-center justify-center mt-15 space-y-10">
        <div className="md:w-[50%] w-[70%] flex flex-col items-center gap-4">
          <p className="md:text-8xl text-5xl my-font text-[var(--tirtiary-text-color)]">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="my-font inline-block"
            >
              Our
            </motion.span>{" "}
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="my-font inline-block text-[#C33764]"
            >
              Menu
            </motion.span>
          </p>
          <p className="md:text-lg text-center text-[#495460] font-light">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="md:w-[70%] w-[95%] flex items-center justify-between overflow-x-scroll gap-5">
          {uniqueCategories && uniqueCategories.length > 0
            ? uniqueCategories.map((item, ind) => (
                <motion.p
                  whileHover={{
                    backgroundColor: "var(--primary-button-color)",
                    color: "white",
                  }}
                  animate={
                    item === currentCategory
                      ? {
                          backgroundColor: "var(--primary-button-color)",
                          color: "white",
                        }
                      : {
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          color: "",
                        }
                  }
                  transition={{ type: "tween", duration: 0.4 }}
                  className={`md:w-[15%] md:px-3 px-5 py-2 rounded-full border border-[var(--fourth-text-color)] text-center cursor-pointer`}
                  onClick={() =>
                    setCurrentCategory(
                      currentCategory !== "" && currentCategory === item
                        ? ""
                        : item
                    )
                  }
                  key={ind}
                >
                  {item}
                </motion.p>
              ))
            : null}
        </div>
        <div className="md:w-[90%] w-full flex flex-col items-center justify-center overflow-hidden">
          {!loading && filterRecipes.length > 0 ? (
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 place-items-center rounded-tl-4xl rounded-br-4xl justify-center md:gap-5 gap-3 py-5 px-5 bg-gradient-to-r from-[#C33764] via-[#1D2671] to-[#FF512F]">
              {filterRecipes.slice(0, defaultView).map((item) => (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ boxShadow: "0px 0px 20px 5px #FF6B6B" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  className="w-full bg-yellow-100 flex flex-col items-center space-y-3 rounded-tl-[30px] rounded-br-[30px] overflow-hidden border border-[var(--fourth-text-color)]"
                  key={item.id}
                  onClick={() => handleClick(item.id)}
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
                      {currentCategory ? currentCategory : item.mealType[0]}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="md:text-lg">{item.rating}</p>
                      <RatingStars rating={item.rating} />
                    </div>
                  </div>
                </motion.div>
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
            disabled={defaultView >= filterRecipes.length}
            onClick={handleViewMore}
            className={`md:w-[20%] w-[50%] rounded-full bg-[var(--primary-button-color)] border px-5 py-3 text-white my-10 ${
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
