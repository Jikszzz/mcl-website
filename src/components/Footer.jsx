import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-20">
      <div className="container px-6">
        <div className="flex flex-col items-start md:flex-row md:justify-between">
          <div className="md:w-2/5">
            <div className="mb-2 h-48 w-48 bg-slate-800 lg:mb-5"></div>
            <h1 className="py-2">Meranti Kreatif Nusantara, PT</h1>
            <h1 className="w-1/2 pb-3">
              Jl. MT Haryono, Balikpapan, Indonesia 76114
            </h1>
          </div>
          <div className="md:grid md:w-3/5 md:grid-rows-2 md:content-between">
            <div>
              <h1 className="pb-4 text-2xl font-bold lg:pb-6 lg:text-4xl">
                What can we collaborate?
              </h1>
              <button className="mb-4 rounded-full border-2 border-black px-8 py-2 text-xl font-normal lg:text-3xl">
                Chat us on WhatsApp!
              </button>
            </div>
            <div className="md:pt-9">
              <ul className="grid grid-cols-2 gap-x-12 gap-y-4 lg:gap-x-8">
                <li className="text-4xl font-normal underline underline-offset-4 lg:text-5xl">
                  Instagram
                </li>
                <li className="text-4xl font-normal underline underline-offset-4 lg:text-5xl">
                  LinkedIn
                </li>
                <li className="text-4xl font-normal underline underline-offset-4 lg:text-5xl">
                  Behance
                </li>
                <li className="text-4xl font-normal underline underline-offset-4 lg:text-5xl">
                  Mail Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-center text-sm font-normal">
          2021-2022 Meranti Creative Lab. All right reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
