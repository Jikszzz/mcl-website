import React from "react";

const ListServices = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-3/4 py-28">
        <h1 className="text-center text-base lg:text-3xl">
          We believe that good branding is based on a strong concept.<br></br>
          Based on that we build brand experiences that help<br></br>companies
          establish their voice and elevate their brands.
        </h1>
      </div>
      <div className="columns-2">
        <ul className="underline">
          <li className="bg-blue-300">Design & Branding</li>
          <li>Advertising</li>
          <li>Social Media Management</li>
          <li>Architecture & Interior</li>
          <li>Merchandising</li>
          <li>Photography</li>
          <li>Videography</li>
          <li>Website Design</li>
        </ul>
      </div>
    </section>
  );
};

export default ListServices;
