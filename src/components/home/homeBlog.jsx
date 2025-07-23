import React from "react";
import image1 from "../../assets/homeBlogimg/blogImg1.avif";
import image2 from "../../assets/homeBlogimg/blogImg2.png";
import image3 from "../../assets/homeBlogimg/blogImg3.png";
import image4 from "../../assets/homeBlogimg/blogImg4.png";
import image5 from "../../assets/homeBlogimg/blogImg5.png";
import { useNavigate } from "react-router-dom";

export default function HomeBlog() {
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
          <p className="md:text-[55px] text-[40px] leading-[60px] my-font text-center md:text-start">
            Our Blog & Articles
          </p>
          <button
            className="rounded-full py-3 px-4 bg-[var(--primary-button-color)] text-white mt-4 md:mt-0 active:scale-[0.9] transition-all duration-300 ease-in-out"
            onClick={() => navigate("/pages")}
          >
            Read All Articles
          </button>
        </div>
        <div className="w-full md:h-[80%] flex md:flex-row flex-col items-center gap-5 mt-10 md:mt-0">
          <div className="md:w-[50%] md:h-full flex items-center justify-center">
            <div className="w-full h-full flex flex-col items-center rounded-xl overflow-hidden gap-5 bg-white">
              <div className="w-full md:h-[65%]">
                <img
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
            </div>
          </div>
          <div className="md:w-[50%] md:h-full flex md:flex-row flex-col items-center justify-center mb-10 md:mb-0">
            <div className="w-full h-full grid grid-cols-2 gap-5">
              {blogContent.map((blogItem) => (
                <div
                  className="w-full flex flex-col items-center gap-7 rounded-xl overflow-hidden bg-white"
                  key={blogItem.id}
                >
                  <div>
                    <img src={blogItem.imgUrl} alt="" className="" />
                  </div>
                  <div className="w-[90%] flex flex-col space-y-3 p-2 md:p-0">
                    <p className="text-sm text-[#737865]">{blogItem.date}</p>
                    <p className="md:text-xl">{blogItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
