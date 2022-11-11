import React, { useState, useEffect } from "react";
import "../assets/hamburgers.css";

const Navbar = () => {
  const [Visible, SetVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [nav, setNav] = useState(true);

  const hideBackground = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      SetVisible(false);
    } else {
      SetVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", hideBackground);
    return () => window.removeEventListener("scroll", hideBackground);
  });
  return (
    <header
      className={
        Visible
          ? "fixed top-0 left-0 z-10 flex w-full items-center bg-black text-white duration-300"
          : "fixed top-[-100%] left-0 z-10 flex w-full items-center bg-black text-white duration-1000"
      }
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="www.meranticreative.com"
              className="block py-6 text-lg font-bold"
            >
              MCL
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={() => setNav(!nav)}
              class={
                nav
                  ? "hamburger hamburger--squeeze"
                  : "hamburger hamburger--squeeze is-active"
              }
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <nav
              onClick={() => setNav(!nav)}
              className={
                nav
                  ? "absolute left-0 top-[-300%] -z-10 w-full py-5 duration-300"
                  : "absolute left-0 top-full z-0 w-full bg-black py-5 duration-300"
              }
            >
              <ul className="block">
                <li className="group flex justify-center">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    Our Services
                  </a>
                </li>
                <li className="group flex justify-center">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    Our Works
                  </a>
                </li>
                <li className="group flex justify-center">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    About Us
                  </a>
                </li>
                <li className="group flex justify-center">
                  <a
                    href="#home"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
