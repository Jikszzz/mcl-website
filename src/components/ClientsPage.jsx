import React from "react";

const ClientsPage = () => {
  return (
    <div>
      <div className="container">
        <h1 className="py-5 px-10 text-3xl">Our Clients</h1>
        <h1 className="px-10 pb-5 text-6xl font-normal">
          From startup to global corporation.
        </h1>
        <ul className="grid grid-cols-1 place-content-center justify-items-center gap-x-6 gap-y-10 pt-5 text-center lg:grid-cols-4">
          <li>
            <div className="h-40 w-80 bg-slate-500"></div>
          </li>
          <li>
            <div className="h-40 w-80 bg-slate-500"></div>
          </li>
          <li>
            <div className="h-40 w-80 bg-slate-500"></div>
          </li>
          <li>
            <div className="h-40 w-80 bg-slate-500"></div>
          </li>
          <li>
            <div className="h-40 w-80 bg-slate-500"></div>
          </li>
          <li>
            <div className="h-40 w-80 bg-slate-500"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientsPage;
