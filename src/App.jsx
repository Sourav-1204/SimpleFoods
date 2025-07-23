import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/pages/Menu";
import Pages from "./components/pages/Pages";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/footer";
import RecipeDetails from "./components/pageContent/recipeDetails";
import BookTable from "./components/pages/BookTable";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookTable />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
