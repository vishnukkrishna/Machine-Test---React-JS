import React, { useState } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isIconClicked, setIconClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // let user = 123;
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleIconClick = () => {
    setIconClicked(!isIconClicked);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Main Navbar */}
      <header className="relative w-full h-20 border-b-2 z-[999]">
        <div className="container m-0 mx-auto flex items-center justify-between h-full max-w-6xl px-8 sm:px-6 lg:px-8 xl:px-0">
          <a
            href="/"
            className="relative flex items-center h-full text-2xl font-black transition-transform duration-300 hover:translate-x-2"
          >
            Weather App
            <span className="ml-3 text-xl text-gray-800 sm:text-lg md:text-xl lg:text-2xl"></span>
          </a>

          <nav
            id=""
            className={`${
              isMobileMenuOpen ? "flex animate-waveMotion" : "hidden"
            } absolute t-0 l-0  flex flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative transition-all duration-300`}
          >
            <div className="flex flex-col w-full font-medium border-t border-gray-200 md:hidden">
              <Link
                to="/login"
                className="w-full py-2 font-bold text-base text-center text-red-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="relative inline-block w-full font-bold px-5 py-3 text-base leading-none text-center text-red-600"
              >
                Signup
              </Link>
            </div>
          </nav>
          <div className="absolute left-0 mt-0 flex-col justify-center hidden w-full pb-0 border-b border-gray-100 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
            <Link
              to="/login"
              className="relative mb-1 mt-0 z-40 px-3 py-2 mr-0 text-base outline-4 font-bold text-red-600 md:px-5 sm:mr-3 md:mt-0 transition-transform duration-300 hover:translate-x-1"
            >
              Login
            </Link>
            <div
              className="mr-2"
              style={{
                transform: "rotate(90deg) scaleX(0.5)",
                color: "grey",
                fontSize: "45px",
              }}
            >
              <MdOutlineHorizontalRule />
            </div>
            <Link
              to="/register"
              className="relative mb-0 z-40 inline-block w-auto h-full px-5 py-3 text-base font-bold text-red-600 leading-none fold-bold sm:w-full transition-transform duration-300 hover:translate-x-1"
            >
              Signup
            </Link>
          </div>
          <div
            id="nav-mobile-btn"
            className="absolute top-0 right-0  block w-8 md:w-10 mt-7 mr-6 md:mr-10 cursor-pointer select-none md:hidden sm:mt-7 transition-transform duration-300 ease-in-out"
            onClick={toggleMobileMenu}
          >
            <span
              className={`block w-full h-1 transform bg-red-800 rounded-full ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-1 mt-1 transform bg-red-800 rounded-full ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-1 mt-1 transform bg-red-800 rounded-full ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
