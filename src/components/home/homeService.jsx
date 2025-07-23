import React from "react";
import image1 from "../../assets/serviceImg/serviceimg1.png";
import image2 from "../../assets/serviceImg/serviceimg2.png";
import image3 from "../../assets/serviceImg/serviceimg3.png";
import image4 from "../../assets/serviceImg/serviceimg4.png";

export default function HomeService() {
  const serviceArr = [
    {
      id: "1",
      thumbnail: image1,
      heading: "Caterings",
    },
    {
      id: "2",
      thumbnail: image2,
      heading: "Birthdays",
    },
    {
      id: "3",
      thumbnail: image3,
      heading: "Weddings",
    },
    {
      id: "4",
      thumbnail: image4,
      heading: "Events",
    },
  ];
  return (
    <div className="w-full md:h-[750px] flex justify-center items-center mt-10 md:mt-0">
      <div className="md:w-[70%] md:h-[80%] w-[85%] flex flex-col justify-between space-y-12">
        <div className="md:w-[50%]">
          <p className="md:text-[55px] text-[40px] md:leading-[60px] my-font text-[var(--tirtiary-text-color)]">
            We also offer unique services for your events
          </p>
        </div>
        <div className="w-full md:flex grid grid-cols-2 flex-col md:flex-row items-center justify-between md:gap-4 gap-8">
          {serviceArr.map((item) => (
            <div className="flex flex-col gap-3">
              <img
                src={item.thumbnail}
                alt={item.heading + "img"}
                className="rounded-[12px] md:size-[270px]"
              />
              <p className="md:text-3xl text-xl mt-2">{item.heading}</p>
              <p className="text-[#414536]">
                In the new era of technology we look in the future with
                certainty for life.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
