import React, { useContext } from "react";
import image2 from "../../assets/testimonialImg/test1.jpg";
import image3 from "../../assets/testimonialImg/test2.jpg";
import image4 from "../../assets/testimonialImg/test3.jpg";
import { RecipeContext } from "../context/GlobalContext";
import { motion } from "framer-motion";

export default function Testimonial() {
  const { splitString } = useContext(RecipeContext);
  const testimonialArr = [
    {
      id: "1",
      heading: "“The best restaurant”",
      comment:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm mdiles.",
      name: "Sophire Robson",
      location: "Los Angeles, CA",
      imgUrl: image2,
    },
    {
      id: "2",
      heading: "“Simply delicious”",
      comment:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      name: "Matt Cannon",
      location: "San Diego, CA",
      imgUrl: image3,
    },
    {
      id: "3",
      heading: "“One of a kind restaurant”",
      comment:
        "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      name: "Andy mdith",
      location: "San Francisco, CA",
      imgUrl: image4,
    },
  ];
  return (
    <div className="w-full md:h-[700px] flex justify-center items-center">
      <div className="md:w-[80%] w-[90%] md:h-[500px] flex flex-col justify-between items-center mt-15 md:mt-0">
        <div>
          <p className="flex flex-wrap gap-x-3 justify-center md:text-5xl text-4xl">
            {splitString("What Our Customers Say").map((item, ind) => (
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                key={ind}
                className="my-font"
              >
                {item}
              </motion.span>
            ))}
          </p>
        </div>
        <div className="w-full h-[70%] flex md:flex-row flex-col justify-between items-center space-y-5 my-15 md:my-0">
          {testimonialArr.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ backgroundColor: "#f2f2f0" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="md:w-[30%] md:h-[90%] w-[90%] flex flex-col items-start space-y-4 bg-[#f9f9f2] rounded-[12px] p-5"
              key={item.id}
            >
              <div>
                <p className="text-2xl text-[var(--primary-button-color)]">
                  {item.heading}
                </p>
                <p className="italic mt-4">{item.comment}</p>
              </div>
              <hr className="w-[90%] mx-auto text-[#d1d1d1] my-5" />
              <div className="flex items-center gap-4 mt-5">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-[50px] rounded-full"
                />
                <div>
                  <p className="text-[20px] font-semibold hover:text-gray-600 transition-all duration-300 ease-in-out">
                    {item.name}
                  </p>
                  <p className="text-[16px] text-gray-500">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
