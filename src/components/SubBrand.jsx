import React from "react";

const SubBrand = () => {
  return (
    <section>
      <div className="container">
        <div>
          <ul className="flex flex-row flex-wrap justify-evenly">
            <li className="m-4">
              <div className="h-64 w-64 bg-slate-800"></div>
              <img src="../assets/img/1.png" alt="" />
              <h1 className="my-2 text-center text-lg font-normal">
                Creative Lab
              </h1>
            </li>
            <li className="m-4">
              <div className="h-64 w-64 bg-slate-800"></div>
              <h1 className="my-2 text-center text-lg font-normal">
                Studio / Space
              </h1>
            </li>
            <li className="m-4">
              <div className="h-64 w-64 bg-slate-800"></div>
              <h1 className="my-2 text-center text-lg font-normal">
                Merchandise
              </h1>
            </li>
            <li className="m-4">
              <div className="h-64 w-64 bg-slate-800"></div>
              <h1 className="my-2 text-center text-lg font-normal">
                Self Photo Studio
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubBrand;
