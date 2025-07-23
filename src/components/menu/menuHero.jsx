import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../context/GlobalContext";
import Cards from "../pageContent/cards";
import { useNavigate } from "react-router-dom";
import RatingStars from "../pageContent/rating";

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
    <div className="w-full flex items-center justify-center">
      <div className="md:w-[80%] w-[90%] flex flex-col items-center justify-center mt-15 space-y-10">
        <div className="md:w-[50%] w-[70%] flex flex-col items-center gap-4">
          <p className="md:text-8xl text-5xl my-font text-[var(--tirtiary-text-color)]">
            Our Menu
          </p>
          <p className="md:text-lg text-center text-[#495460] font-light">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="md:w-[70%] md:flex grid grid-cols-2 items-center justify-between gap-5">
          {uniqueCategories && uniqueCategories.length > 0
            ? uniqueCategories.map((item, ind) => (
                <p
                  className={`md:w-[15%] md:px-3 px-5 py-2 rounded-full border border-[var(--fourth-text-color)] text-center cursor-pointer ${
                    item === currentCategory
                      ? "bg-[var(--primary-button-color)] text-white border-0"
                      : null
                  }`}
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
                </p>
              ))
            : null}
        </div>
        <div className="md:w-[80%] w-full flex flex-col items-center justify-center">
          {!loading && filterRecipes.length > 0 ? (
            <div className="w-full grid md:grid-cols-4 grid-cols-2 place-items-center justify-center md:gap-5 gap-3">
              {filterRecipes.slice(0, defaultView).map((item) => (
                <div
                  className="w-full flex flex-col items-center space-y-3 rounded-lg overflow-hidden border border-[var(--fourth-text-color)]"
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                >
                  <img src={item.image} alt={item.title + ".img"} />
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
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[90%] my-10 flex items-center justify-center">
              <p className="text-7xl">Loading data! please wait...</p>
            </div>
          )}
          <button
            disabled={defaultView >= filterRecipes.length}
            onClick={handleViewMore}
            className={`md:w-[20%] w-[50%] rounded-full bg-[var(--primary-button-color)] px-5 py-3 text-white my-10 ${
              loading ? "hideBtn" : "showBtn"
            }`}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
