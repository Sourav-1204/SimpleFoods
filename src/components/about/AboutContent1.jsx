import React from "react";
import image1 from "../../assets/aboutImages/contentimg2.png";

export default function AboutContent1() {
  const arr1 = [
    {
      id: "1",
      number: "3",
      text: "Locations",
    },
    {
      id: "2",
      number: "1995",
      text: "Founded",
    },
    {
      id: "3",
      number: "65+",
      text: "Staff Members",
    },
    {
      id: "4",
      number: "100%",
      text: "Satisfied Customers",
    },
  ];
  return (
    <div className="w-full md:h-[700px] flex items-center justify-center bg-[#f9f9f7]">
      <div className="md:w-[80%] w-[90%] md:h-[80%] flex md:flex-row flex-col justify-between mt-15 md:mt-0">
        <div className="md:w-[45%] w-full md:h-full flex flex-col justify-between gap-10 md:gap-0">
          <div className="w-full flex flex-col gap-5">
            <p className="md:text-[55px] text-4xl md:leading-[60px] text-[var(--tirtiary-text-color my-font">
              A little information for our valuable guest
            </p>
            <p className="md:text-lg text-[#414536]">
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            {arr1.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-col gap-3 items-center justify-center shadow-[0px_0px_10px_1px_#bbbbbb] rounded-lg py-5"
              >
                <p className="md:text-4xl text-3xl text-[var(--tirtiary-text-color)] my-font">
                  {item.number}
                </p>
                <p className="font-">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[40%] w-full h-full flex items-center justify-center rounded-md overflow-hidden my-15 md:my-0">
          <img src={image1} className="md:h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
