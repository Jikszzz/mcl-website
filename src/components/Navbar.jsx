import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          ? "fixed top-0 left-0 z-50 flex w-full items-center bg-black text-white duration-300"
          : "fixed top-[-100%] left-0 z-50 flex w-full items-center bg-black text-white duration-1000"
      }
    >
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <Link to="/" className="block py-6 text-lg font-bold">
              MCL
            </Link>
          </div>
          <div className="flex items-center px-4">
            <div className="absolute right-4 block lg:hidden">
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
            </div>
            <nav
              onClick={() => setNav(!nav)}
              className={
                nav
                  ? "absolute left-0 top-[-300%] -z-10 w-full origin-top scale-y-0 bg-black py-5 duration-300 lg:hidden"
                  : "absolute left-0 top-full -z-10 w-full bg-black py-5 duration-500 lg:hidden"
              }
            >
              <ul className="block lg:flex">
                <li className="group flex justify-center">
                  <Link
                    to="/our-services"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    Our Services
                  </Link>
                </li>
                <li className="group flex justify-center">
                  <Link
                    to="/our-works"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    Our Works
                  </Link>
                </li>
                <li className="group flex justify-center">
                  <Link
                    to="/about"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    About Us
                  </Link>
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
            <nav className="absolute right-0 top-full hidden w-full bg-black py-5 lg:static lg:block lg:max-w-full">
              <ul className="block lg:flex">
                <li className="group flex justify-center">
                  <Link
                    to="/our-services"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    Our Services
                  </Link>
                </li>
                <li className="group flex justify-center">
                  <Link
                    to="/our-works"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    Our Works
                  </Link>
                </li>
                <li className="group flex justify-center">
                  <Link
                    to="/about"
                    className="mx-8 flex py-2 text-base duration-300 group-hover:text-slate-400"
                  >
                    About Us
                  </Link>
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
