import React from "react";
import image1 from "../../assets/testimonialImg/test1.jpg";
import image2 from "../../assets/testimonialImg/test2.jpg";
import image3 from "../../assets/testimonialImg/test3.jpg";

export default function HomeTestimonial() {
  const testimonialArr = [
    {
      id: "1",
      heading: "“The best restaurant”",
      comment:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm mdiles.",
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      imgUrl: image1,
    },
    {
      id: "2",
      heading: "“Simply delicious”",
      comment:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      name: "Matt Cannon",
      location: "San Diego, CA",
      imgUrl: image2,
    },
    {
      id: "3",
      heading: "“One of a kind restaurant”",
      comment:
        "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      name: "Andy mdith",
      location: "San Francisco, CA",
      imgUrl: image3,
    },
  ];
  return (
    <div className="w-full md:h-[700px] flex justify-center items-center mt-15 md:mt-0">
      <div className="md:w-[80%] w-[90%] md:h-[500px] flex flex-col justify-between items-center">
        <div>
          <p className="md:text-[55px] text-[40px] my-font leading-[60px] text-center">
            What Our Customers Say
          </p>
        </div>
        <div className="w-full h-[70%] flex md:flex-row flex-col justify-between items-center space-y-5 mt-8 md:mt-0">
          {testimonialArr.map((item) => (
            <div className="md:w-[30%] md:h-[90%] w-[88%] flex flex-col items-start space-y-4 bg-[#f9f9f2] rounded-[12px] p-5" key={item.id}>
              <div>
                <p className="text-2xl text-[var(--primary-button-color)]">{item.heading}</p>
                <p className="italic mt-4">{item.comment}</p>
              </div>
              <hr className="w-[90%] mx-auto text-[#d1d1d1] my-5"/>
              <div className="flex items-center gap-4 mt-5">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-[50px] rounded-full"
                />
                <div>
                  <p className="text-[20px] font-semibold">{item.name}</p>
                  <p className="text-[16px] text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
