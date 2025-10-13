import React, { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const [defaultView, setDefaultView] = useState(12);
  const [filterRecipes, setFilterRecipes] = useState([]);

  async function fetchMenuList() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/recipes?limit=50");
      const result = await apiResponse.json();
      if (result && result.recipes && result.recipes.length > 0) {
        setMenuList(result.recipes);
        setFilterRecipes(result.recipes);
      }
    } catch (e) {
      setError(e);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }

  useEffect(() => {
    fetchMenuList();
  }, []);

  const uniqueCategories =
    menuList && menuList.length > 0
      ? [...new Set(menuList.map((item) => item.mealType[0]))]
      : [];

  function handleViewMore() {
    if (defaultView < menuList.length) {
      setDefaultView((prev) => prev + 4);
    }
  }

  function splitString(getString) {
    const words = getString.split(" ");
    return words;
  }

  return (
    <RecipeContext.Provider
      value={{
        loading,
        menuList,
        error,
        handleViewMore,
        defaultView,
        uniqueCategories,
        filterRecipes,
        setFilterRecipes,
        splitString
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
