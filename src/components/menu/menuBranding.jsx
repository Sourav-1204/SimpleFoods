import React from "react";
import image1 from "../../assets/menuimages/menuimg1.png";
import image2 from "../../assets/menuimages/menuimg2.png";
import image3 from "../../assets/menuimages/menuimg3.png";
import image4 from "../../assets/menuimages/menuimg4.png";
import image5 from "../../assets/menuimages/menuimg5.png";
import image6 from "../../assets/menuimages/menuimg6.png";
import image7 from "../../assets/menuimages/menuimg7.png";
import image8 from "../../assets/menuimages/menuimg8.png";
import image9 from "../../assets/menuimages/menuimg9.png";

export default function MenuBranding() {
  const arr1 = [
    {
      id: "1",
      image: image1,
    },
    {
      id: "2",
      image: image2,
    },
    {
      id: "3",
      image: image3,
    },
  ];

  const arr2 = [
    {
      id: "1",
      image: image4,
    },
    {
      id: "2",
      image: image5,
    },
    {
      id: "3",
      image: image6,
    },
  ];

  const arr3 = [
    {
      id: "1",
      image: image7,
    },
    {
      id: "1",
      image: image8,
    },
    {
      id: "1",
      image: image9,
    },
  ];
  return (
    <div className="w-full md:h-[500px] flex items-center justify-center bg-[#f9f9f7]">
      <div className="md:w-[70%] w-[90%] md:h-[80%] flex md:flex-row flex-col my-15 md:my-0">
        <div className="md:w-[40%] w-full md:h-full flex items-center space-y-5">
          <div className="md:w-full w-[90%] flex flex-col md:items-start items-center space-y-6 pl-5 md:pl-0">
            <p className="md:text-[55px] text-4xl md:leading-[60px] text-[var(--tirtiary-text-color)] my-font">
              You can order through apps
            </p>
            <p className="md:w-[70%] text-[#414539]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
        </div>
        <div className="md:w-[60%] md:h-full flex flex-col items-center justify-center space-y-5 mt-15 md:mt-0">
          <div className="md:w-[70%] w-[90%] md:h-[20%] flex justify-between md:gap-5 gap-2">
            {arr1.map((item) => (
              <div
                key={item.id}
                className="md:w-[40%] w-full md:h-[70%] rounded-md flex items-center justify-center bg-white md:px-5 px-3 py-5 md:py-0 shadow-[0px_0px_15px_#dddddd]"
              >
                <img src={item.image} className="md:w-[200px]" />
              </div>
            ))}
          </div>
          <div className="md:w-[90%] w-full md:h-[20%] flex justify-between md:gap-5 gap-2">
            {arr2.map((item) => (
              <div
                key={item.id}
                className="md:w-[40%] w-full md:h-[70%] rounded-md flex items-center justify-center bg-white md:px-5 px-3 py-5 md:py-0 shadow-[0px_0px_15px_#dddddd]"
              >
                <img src={item.image} className="md:w-[200px]" />
              </div>
            ))}
          </div>
          <div className="md:w-[70%] w-[90%] md:h-[20%] flex justify-between md:gap-5 gap-2">
            {arr3.map((item) => (
              <div
                key={item.id}
                className="md:w-[40%] w-full md:h-[70%] rounded-md flex items-center justify-center bg-white md:px-5 px-3 py-5 md:py-0 shadow-[0px_0px_15px_#dddddd]"
              >
                <img src={item.image} className="md:w-[200px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
