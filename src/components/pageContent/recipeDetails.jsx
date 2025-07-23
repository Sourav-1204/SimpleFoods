import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../context/GlobalContext";
import RecipeIng from "./recipeIng";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const { menuList } = useContext(RecipeContext);
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  console.log(recipeId, "redcdas");

  async function fetchRecipeData() {
    try {
      setLoading(true);
      let data = menuList.filter((item) => item.id.toString() === recipeId);
      if (data.length > 0) {
        setRecipeData(data[0]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }

  useEffect(() => {
    fetchRecipeData();
  }, [recipeId]);

  return (
    <div className="w-full h-full flex flex-col items-center">
         <div className="md:w-[60%] flex justify-center items-center my-10">
          <p className="md:text-7xl text-4xl text-center my-font text-[var(--tirtiary-text-color)] p-3 md:p-0">
            The Secret Tips & Tricks to Prepare {recipeData?.name}
          </p>
        </div>
      <div
        key={recipeData.id}
        className="w-full md:h-[600px] flex flex-col items-center justify-center bg-[#f9f9f7]"
      >
        <div className="md:w-[70%] w-[90%] md:h-[78%] flex md:flex-row flex-col justify-between items-center gap-5 mt-15 md:mt-0">
          <div className="md:w-[50%] w-full md:h-full bg-white rounded-xl flex items-center justify-center md:py-6 p-3 md:p-0">
            <img
              src={recipeData.image}
              alt="image"
              className="md:w-[90%] md:h-full rounded-xl hover:scale-105 transform transition-all duration-400 ease-in-out"
            />
          </div>
          <div className="md:w-[50%] w-full md:h-full flex flex-col items-center px-4 md:px-8 py-5 bg-white rounded-xl my-5 md:my-0">
            <div className="w-full flex flex-col space-y-2 text-[#54594a]">
              <p className="md:text-[40px] text-3xl font-bold my-font text-[var(--tirtiary-text-color)] leading-[35px] md:leading-[45px]">
                {recipeData.name}
              </p>
              <div className="flex items-center mt-5 gap-2">
                <p className="md:text-2xl text-xl font-semibold text-[#2647A8]">
                  Cuisine :
                </p>
                <p className="md:text-xl text-lg text-[#495460] font-normal">
                  {recipeData.cuisine}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="md:text-2xl text-xl font-semibold text-[#2647A8]">
                  Best For :{" "}
                </p>
                {recipeData?.mealType?.length > 0
                  ? recipeData.mealType.map((item, ind) => (
                      <p
                        className="md:text-xl text-lg text-[#495460] font-normal"
                        key={ind}
                      >
                        {item}
                        {recipeData?.mealType?.length > 0 &&
                        recipeData?.mealType?.length - 1 > ind
                          ? ", "
                          : null}
                      </p>
                    ))
                  : null}
              </div>
              <div className="flex items-center gap-2">
                <p className="md:text-2xl text-xl font-semibold text-[#2647A8]">
                  Calories Per Serving :
                </p>
                <p className="md:text-xl text-lg text-[#495460] font-normal">
                  {recipeData.caloriesPerServing}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="md:text-2xl text-xl font-semibold text-[#2647A8]">
                  Servings :
                </p>
                <p className="md:text-xl text-lg text-[#495460] font-normal">
                  {recipeData.servings}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <p className="md:text-2xl text-xl font-semibold text-[#2647A8]">
                  Prep Time :
                </p>
                <p className="md:text-xl text-lg text-[#495460] font-normal">
                  {recipeData.prepTimeMinutes}m
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="md:text-2xl text-xl font-semibold text-[#2647A8]">
                  Cook Time :
                </p>
                <p className="md:text-xl text-lg text-[#495460] font-normal">
                  {recipeData.cookTimeMinutes}m
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="md:text-2xl text-xl font-semibold text-[#2647A8]">
                  Cooking Difficulty :
                </p>
                <p className="md:text-xl text-lg text-[#495460] font-normal">
                  {recipeData.difficulty}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecipeIng data={recipeData} loading={loading} />
    </div>
  );
}
