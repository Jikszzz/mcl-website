import React from "react";
import "../assets/hamburgers.css";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-black text-white">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="www.meranticreative.com"
              className="block py-6 text-lg font-bold text-white"
            >
              MCL
            </a>
          </div>
          <div className="flex items-center px-4">
            <button class="hamburger hamburger--squeeze" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
