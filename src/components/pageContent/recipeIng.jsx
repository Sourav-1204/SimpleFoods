import React from "react";

export default function RecipeIng({ data, loading }) {
  
  return (
    <div className="w-full md:h-[600px] flex items-center justify-center mt-5 md:my-0 bg-white">
      <div className="md:w-[70%] w-[90%] md:h-[85%] flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="md:w-[50%] w-full md:h-full flex flex-col space-y-4 py-5 px-6 md:px-8 bg-[#f9f9f7] rounded-xl">
          <div className="mb-8">
            <p className="md:text-4xl text-2xl text-[var(--tirtiary-text-color)] my-font">
              Ingredients:
            </p>
          </div>
          {data?.ingredients?.slice(0,10)?.map((item,ind) => (
            <div key={ind}>
              <p className="italic font-medium">{(ind+1) + ". "}{item}</p>
            </div>
          ))}
        </div>
        <div className="md:w-[50%] w-full md:h-full flex flex-col space-y-4 py-5 px-6 md:px-8 bg-[#f9f9f7] rounded-xl mb-10 md:mb-0">
          <div className="mb-8">
            <p className="md:text-4xl text-2xl text-[var(--tirtiary-text-color)] my-font">
              Instructions:
            </p>
          </div>
           {data?.instructions?.slice(0,8)?.map((item,ind) => (
            <div key={ind}>
              <p className="italic font-medium">{(ind+1) + ". "}{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
