import React from "react";
import RatingStars from "./rating";
import { useNavigate } from "react-router-dom";

export default function Cards({ item }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/recipe/${item.id}`);
  }
  return (
    <div
      className="w-full flex flex-col items-center space-y-3 rounded-md overflow-hidden bg-white shadow-[0px_0px_15px_#cccccc]"
      key={item.id}
      onClick={handleClick}
    >
      <img src={item.image} alt={item.title + ".img"} />
      <div className="w-[90%] flex flex-col space-y-1.5 pb-2 px-2">
        <p className="md:text-xl text-lg font-semibold truncate ">{item.name}</p>
        <p className="md:text-lg font-semibold text-[#54594a]">{item.mealType[0]}</p>
        <div className="flex items-center gap-2">
          <p className="md:text-lg">{item.rating}</p>
          <RatingStars rating={item.rating} />
        </div>
      </div>
    </div>
  );
}
