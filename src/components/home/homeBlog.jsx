import React, { useContext } from "react";
import image1 from "../../assets/homeBlogimg/blogImg1.avif";
import image2 from "../../assets/homeBlogimg/blogImg2.png";
import image3 from "../../assets/homeBlogimg/blogImg3.png";
import image4 from "../../assets/homeBlogimg/blogImg4.png";
import image5 from "../../assets/homeBlogimg/blogImg5.png";
import { useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { RecipeContext } from "../context/GlobalContext";

export default function HomeBlog() {
  const { splitString } = useContext(RecipeContext);
  const navigate = useNavigate();
  const blogContent = [
    {
      id: "1",
      imgUrl: image2,
      date: "January 3, 2023",
      desc: "How to prepare the perfect french fries in an air fryer",
    },
    {
      id: "2",
      imgUrl: image3,
      date: "January 3, 2023",
      desc: "How to prepare delicious chicken tenders",
    },
    {
      id: "3",
      imgUrl: image4,
      date: "January 3, 2023",
      desc: "7 delicious cheesecake recipes you can prepare",
    },
    {
      id: "4",
      imgUrl: image5,
      date: "January 3, 2023",
      desc: "5 great pizza restaurants you should visit this city",
    },
  ];
  return (
    <div className="w-full md:h-[1000px] flex items-center justify-center mt-15 md:mt-0 bg-[#F9F9F7]">
      <div className="md:w-[70%] w-[90%] md:h-[80%] flex flex-col justify-between py-5 md:py-0">
        <div className="w-full flex md:flex-row flex-col items-center justify-between">
          <p className="flex flex-wrap gap-3 md:text-[55px] text-[40px] leading-[60px] text-center md:text-start">
            {splitString("Our Blog & Articles").map((item, ind) => (
              <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                key={ind}
                className="my-font"
              >
                {item}
              </motion.span>
            ))}
          </p>
          <motion.button
            whileHover={{
              backgroundColor: "#fff",
              color: "var(--primary-button-color)",
              scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-full border py-3 px-4 bg-[var(--primary-button-color)] text-white mt-4 md:mt-0 active:scale-[0.9]"
            onClick={() => navigate("/pages")}
          >
            Read All Articles
          </motion.button>
        </div>
        <div className="w-full md:h-[80%] flex md:flex-row flex-col items-center gap-5 mt-10 md:mt-0">
          <div className="md:w-[50%] md:h-full flex items-center justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full flex flex-col items-center rounded-xl overflow-hidden gap-5 bg-white"
            >
              <div className="w-full md:h-[65%]">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: easeInOut }}
                  src={image1}
                  alt="burgerimg"
                  className="w-full md:h-full"
                />
              </div>
              <div className="w-[90%] md:h-[20%] flex flex-col space-y-3 p-3 md:p-0">
                <p className="text-[#737865]">January 3, 2023</p>
                <p className="text-xl ">
                  The secret tips & tricks to prepare a perfect burger & pizza
                  for our customers
                </p>
                <p className="text-[#737865]">
                  Lorem ipsum dolor sit amet consectetur of a adipiscing
                  elitilmim semper adipiscing massa gravida nisi cras enim quis
                  nibholm varius amet gravida ut facilisis neque egestas.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="md:w-[50%] md:h-full flex md:flex-row flex-col items-center justify-center mb-10 md:mb-0">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full grid grid-cols-2 gap-5"
            >
              {blogContent.map((blogItem) => (
                <div
                  className="w-full flex flex-col items-center gap-7 rounded-xl overflow-hidden bg-white"
                  key={blogItem.id}
                >
                  <div>
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "tween",
                        duration: 0.4,
                        ease: easeInOut,
                      }}
                      src={blogItem.imgUrl}
                      alt=""
                      className=""
                    />
                  </div>
                  <div className="w-[90%] flex flex-col space-y-3 p-2 md:p-0">
                    <p className="text-sm text-[#737865]">{blogItem.date}</p>
                    <p className="md:text-xl">{blogItem.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
