import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="w-full h-[80px] flex items-center justify-center md:sticky top-0 bg-white z-98 shadow-[0px_0px_20px_8px_#888888] relative">
      <div className="md:w-full w-[85%] flex items-center md:justify-evenly justify-between">
        <div>
          <NavLink to="/">
            <h1 className="md:text-4xl text-3xl font-semibold text-[var(--primary-text-color)] my-font italic">
              Simple Foods
            </h1>
          </NavLink>
        </div>
        <div className="md:hidden ">
          {mobileMenu ? (
            <RxCross2 size="30px" onClick={() => setMobileMenu(!mobileMenu)} />
          ) : (
            <IoMenuSharp
              size="30px"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          )}
        </div>
        <div
          className={`md:flex ${
            mobileMenu ? "flex" : "hidden"
          } md:static md:visible md:w-auto md:h-auto h-[680px] w-full items-center justify-center absolute top-[80px] right-0 bg-[#f9f9f7] md:bg-white md:shadow-none shadow-[0px_8px_12px_3px_#bbbbbb] rounded-md md:rounded-none`}
        >
          <ul className="md:w-auto md:h-auto w-full flex md:flex-row flex-col items-center md:gap-3 gap-5 md:text-base text-5xl text-[var(--primary-text-color)] md:py-0 py-5 navbar">
            <NavLink to="/">
              <p onClick={() => setMobileMenu(!mobileMenu)} className="my-font">Home</p>
            </NavLink>
            <NavLink to="/menu">
              <p onClick={() => setMobileMenu(!mobileMenu)} className="my-font">Menu</p>
            </NavLink>
            <NavLink to="/pages">
              <p onClick={() => setMobileMenu(!mobileMenu)} className="my-font">Pages</p>
            </NavLink>
            <NavLink to="/about">
              <p onClick={() => setMobileMenu(!mobileMenu)} className="my-font">About</p>
            </NavLink>
            <NavLink to="/contact">
              <p onClick={() => setMobileMenu(!mobileMenu)} className="my-font">Contact</p>
            </NavLink>
            <NavLink to="/book">
              <p
                className="md:hidden my-font"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                Book A Table
              </p>
            </NavLink>
          </ul>
        </div>
        <div className="md:block hidden">
          <NavLink to="/book">
            <button className=" px-4 py-1.5 border rounded-full text-md font-medium outline-0 active:scale-[0.9] transition-all duration-300 ease-in-out">
              Book A Table
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
