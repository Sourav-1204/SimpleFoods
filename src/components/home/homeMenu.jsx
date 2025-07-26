import React from "react";
import { CgCoffee } from "react-icons/cg";
import { ImGlass } from "react-icons/im";
import { MdRamenDining } from "react-icons/md";
import { RiCake2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function HomeMenu() {
  const navigate = useNavigate();
  const content = [
    {
      id: "1",
      icon: <CgCoffee size="30px" />,
      heading: "Breakfast",
    },
    {
      id: "2",
      icon: <MdRamenDining size="30px" />,
      heading: "Main Dishes",
    },
    {
      id: "3",
      icon: <ImGlass size="30px" />,
      heading: "Drinks",
    },
    {
      id: "4",
      icon: <RiCake2Line size="30px" />,
      heading: "Desserts",
    },
  ];
  return (
    <div className="w-full md:h-[600px] flex flex-col items-center justify-center gap-10 text-[var(--primary-text-color)]">
      <div>
        <p className="text-6xl my-font text-center md:text-start mt-15 md:mt-0">
          Browse Our Menu
        </p>
      </div>
      <div className="md:w-[80%] w-[95%] grid md:grid-cols-4 grid-cols-2 place-items-center md:space-x-4 gap-4 md:gap-0">
        {content.map((item) => (
          <div className="md:w-[90%] flex justify-center items-center border rounded-[12px] md:px-5 px-3 md:py-10 py-6" key={item.id}>
            <div className="flex flex-col items-center gap-5 ">
              <div className="size-[60px] flex items-center justify-center bg-[#4d592b1e] rounded-full">
                {item.icon}
              </div>
              <p className="text-xl text-[] font-semibold">{item.heading}</p>
              <p className="font-light text-center">
                In the new era of technology we look in the future with
                certainty and pride for our life.
              </p>
              <div>
                <button
                  className="text-[var(--primary-button-color)] active:scale-[0.9] transition-all duration-300 ease-in-out"
                  onClick={() => navigate("/menu")}
                >
                  Explore Menu
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
