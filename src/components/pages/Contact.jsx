import React, { useContext } from "react";
import { motion } from "framer-motion";
import { RecipeContext } from "../context/GlobalContext";

export default function Contact() {
  const { splitString } = useContext(RecipeContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex justify-center bg-[#f9f9f7]"
    >
      <div className="md:w-[50%] flex flex-col items-center space-y-5 mt-15">
        <div className="md:w-[65%] w-[68%] flex flex-col items-center gap-6">
          <p className="flex flex-wrap gap-x-3 md:text-8xl text-5xl text-[var(--tirtiary-text-color)]">
            {splitString("Contact Us").map((item, ind) => (
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
          <p className="md:text-lg text-center text-[#495460] font-light">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <div className="md:w-[80%] w-[90%] bg-white shadow-[0px_0px_15px_#dddddd] flex flex-col gap-3 rounded-xl py-7 px-5">
          <div className="w-full flex md:flex-row flex-col items-center gap-5">
            <div className="md:w-[50%] w-full flex flex-col gap-3">
              <p className="text-[var(--tirtiary-text-color)] font-bold">
                Name
              </p>
              <motion.input
                whileFocus={{ border: "2px solid var(--primary-button-color)" }}
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
              />
            </div>
            <div className="md:w-[50%] w-full flex flex-col gap-3">
              <p className="text-[var(--tirtiary-text-color)] font-bold">
                Email
              </p>
              <motion.input
                whileFocus={{ border: "2px solid var(--primary-button-color)" }}
                type="text"
                placeholder="Enter email address"
                className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="text-[var(--tirtiary-text-color)] font-bold">
              Subject
            </p>
            <motion.input
              whileFocus={{ border: "2px solid var(--primary-button-color)" }}
              type="text"
              placeholder="Write a subject"
              className="w-full rounded-full border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="text-[var(--tirtiary-text-color)] font-bold">
              Message
            </p>
            <motion.textarea
              whileFocus={{ border: "2px solid var(--primary-button-color)" }}
              type="text"
              placeholder="Write your message"
              cols={4}
              rows={10}
              className="w-full md:h-[150px] h-[100px] rounded-xl border border-[var(--fourth-text-color)] py-3 px-5 outline-0"
            />
          </div>
          <div className="flex items-center">
            <button className="w-full rounded-full text-white bg-[var(--primary-button-color)] py-3 mt-2">
              Send
            </button>
          </div>
        </div>
        <div className="md:w-[80%] flex md:flex-row flex-col md:justify-evenly items-start space-y-10 mt-5 px-5 md:px-0">
          <div className="md:w-[30%] w-[80%] flex flex-col md:gap-5 gap-2 px-3 md:px-0">
            <p className="md:text-xl font-semibold text-[var(--tirtiary-text-color)]">
              Call Us:
            </p>
            <p className="md:text-2xl text-lg text-[var(--primary-button-color)] font-bold">
              +1-234-567-8900
            </p>
          </div>
          <div className="md:w-[30%] w-[80%] flex flex-col md:gap-5 gap-2 px-3 md:px-0">
            <p className="md:text-xl font-semibold text-[var(--tirtiary-text-color)]">
              Hours:
            </p>
            <p className="md:text-lg text-lg text-[var(--tirtiary-text-color)] font-light">
              Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm
            </p>
          </div>
          <div className="md:w-[30%] w-[80%] flex flex-col md:gap-5 gap-2 mb-15 px-3 md:px-0">
            <p className="md:text-xl font-semibold text-[var(--tirtiary-text-color)]">
              Our Location:
            </p>
            <p className="md:text-lg text-lg text-[var(--tirtiary-text-color)] font-light">
              123 Bridge Street Nowhere Land, LA 12345 United States
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
