import React from "react";

const ThumbnailProject = () => {
  return (
    <section>
      <div className="grid grid-cols-1 border border-black md:grid-cols-2">
        <div className="flex aspect-[8/4] border border-black bg-blue-500">
          <div className="m-auto text-2xl font-normal">Project 1</div>
        </div>
        <div className="flex aspect-[8/4] border border-black bg-blue-500">
          <div className="m-auto text-2xl font-normal">Project 2</div>
        </div>
        <div className="flex aspect-[8/4] border border-black bg-blue-500">
          <div className="m-auto text-2xl font-normal">Project 3</div>
        </div>
        <div className="flex aspect-[8/4] border border-black bg-blue-500">
          <div className="m-auto text-2xl font-normal">Project 4</div>
        </div>
      </div>
      <div className="bg-black py-5">
        <h1 className="text-center text-lg font-normal text-white underline">
          <a href="#our-works">Learn more about us!</a>
        </h1>
      </div>
    </section>
  );
};

export default ThumbnailProject;
