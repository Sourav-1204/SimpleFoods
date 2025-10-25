import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";
import image1 from "../assets/footerimg/footerimg1.png";
import image2 from "../assets/footerimg/footerimg2.png";
import image3 from "../assets/footerimg/footerimg3.png";
import image4 from "../assets/footerimg/footerimg4.png";
import { Link, useNavigate } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

export default function Footer() {
  const navigate = useNavigate();
  const pages = [
    {
      id: "1",
      name: "Home",
      link: "/",
    },
    {
      id: "2",
      name: "About",
      link: "/about",
    },
    {
      id: "3",
      name: "Menu",
      link: "/menu",
    },
    {
      id: "4",
      name: "Pricing",
      link: "/pricing",
    },
    {
      id: "5",
      name: "Blog",
      link: "/pages",
    },
    {
      id: "6",
      name: "Contact",
      link: "/contact",
    },
    {
      id: "7",
      name: "Delivery",
      link: "/delivery",
    },
  ];

  const utilityPages = [
    {
      id: "1",
      name: "Start Here",
    },
    {
      id: "2",
      name: "Styleguide",
    },
    {
      id: "3",
      name: "Password Protected",
    },
    {
      id: "4",
      name: "404 Not Found",
    },
    {
      id: "5",
      name: "Licenses",
    },
    {
      id: "6",
      name: "Changelog",
    },
    {
      id: "7",
      name: "View More",
    },
  ];
  return (
    <div className="w-full md:h-[700px] flex items-center justify-center md:mt-0 bg-[var(--primary-text-color)]">
      <div className="w-[90%] md:h-[85%] flex flex-col items-center justify- mt-10 md:mt-0">
        <div className="w-full md:h-[80%] flex md:flex-row flex-col justify-between">
          <div className="md:w-[25%] flex flex-col space-y-5">
            <div className="flex flex-col space-y-5">
              <p
                className="italic font-semibold my-font text-white text-3xl hover:text-gray-300 transition-all duration-300 ease-in-out"
                onClick={() => navigate("/")}
              >
                Simple Foods
              </p>
              <p className="text-[var(--fourth-text-color)]">
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-center text-white size-[50px] rounded-full bg-[var(--primary-button-color)] cursor-pointer"
              >
                <a href="mailto:sourav123singhgmaii.com@gmail.com?subject=Let's%20Connect&body=Hi%20Sourav,%0AI'm%20interested%20in%20your%20projects.">
                  <MdEmail size="24px" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-center text-white size-[50px] rounded-full bg-[var(--primary-button-color)] cursor-pointer"
              >
                <a
                  href="https://www.linkedin.com/in/sourav-b26b3b2b1/"
                  target="_blank"
                >
                  <FaLinkedin size="24px" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-center text-white size-[50px] rounded-full bg-[var(--primary-button-color)] cursor-pointer"
              >
                <FaInstagram size="24px" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-center justify-center text-white size-[50px] rounded-full bg-[var(--primary-button-color)] cursor-pointer"
              >
                <a href="https://github.com/Sourav-1204" target="_blank">
                  <FaGithub size="24px" />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="md:w-[40%] w-full flex justify-evenly mt-10 md:mt-0">
            <div className="w-[40%] flex flex-col gap-4">
              <div>
                <p className="text-white font-bold hover:text-gray-300 transition-all duration-300 ease-in-out">
                  Pages
                </p>
              </div>
              {pages.map((pageItem) => (
                <div className="flex flex-col" key={pageItem.id}>
                  <Link to={pageItem.link}>
                    <p className="text-[var(--fourth-text-color)] hover:text-gray-300 transition-all duration-300 ease-in-out">
                      {pageItem.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-[40%] flex flex-col gap-4">
              <div>
                <p className="text-white font-bold hover:text-gray-300 transition-all duration-300 ease-in-out">
                  Utility Pages
                </p>
              </div>
              {utilityPages.map((item) => (
                <div className="flex flex-col" key={item.id}>
                  <p className="text-[var(--fourth-text-color)] hover:text-gray-300 transition-all duration-300 ease-in-out">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-[30%] flex flex-col gap-4 mt-10 md:mt-0">
            <div>
              <p className="text-white font-bold text-center md:text-start hover:text-gray-300 transition-all duration-300 ease-in-out">
                Follow Us On Instagram
              </p>
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
              <div className="md:w-full rounded-xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: easeInOut }}
                  src={image1}
                  alt="image"
                />
              </div>
              <div className="md:w-full rounded-xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: easeInOut }}
                  src={image2}
                  alt="image"
                />
              </div>
              <div className="md:w-full rounded-xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: easeInOut }}
                  src={image3}
                  alt="image"
                />
              </div>
              <div className="md:w-full rounded-xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", duration: 0.4, ease: easeInOut }}
                  src={image4}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 md:my-0">
          <p className="flex flex-wrap items-center text-[var(--fourth-text-color)]">
            Copyright
            <FaRegCopyright size="10px" className="mx-0.5" />
            2023 Hastag Developer. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
