import React, { useContext, useState } from "react";
import { RecipeContext } from "../context/GlobalContext";
import Cards from "./cards";

export default function PageHero() {
  const { loading, menuList, error, handleViewMore, defaultView } =
    useContext(RecipeContext);

  return (
    <div className="w-full flex items-center justify-center bg-[#f9f9f7]">
      <div className="md:w-[70%] flex flex-col items-center justify-center my-15 space-y-15">
        <div className="md:w-[75%] w-[70%] flex flex-col items-center gap-4">
          <p className="md:text-8xl text-5xl my-font text-[var(--tirtiary-text-color)] text-center">
            Our Blog & Articles
          </p>
          <p className="md:w-[68%] md:text-lg text-center text-[#495460] font-light">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="md:w-full w-[90%] flex flex-col items-center justify-center">
          {!loading && menuList.length > 0 ? (
            <div className="w-full grid md:grid-cols-4 grid-cols-2 place-items-center justify-center md:gap-5 gap-3">
              {menuList.slice(0, defaultView).map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <div className="w-[90%] mt-10 flex items-center justify-center">
              <p className="text-7xl">Loading data! please wait...</p>
            </div>
          )}
          <button
            disabled={defaultView >= menuList.length}
            onClick={handleViewMore}
            className={`md:w-[20%] w-[50%] rounded-full bg-[var(--primary-button-color)] px-5 py-3 text-white mt-10 ${
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
