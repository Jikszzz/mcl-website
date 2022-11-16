import React from "react";
import Navbar from "../components/Navbar";
import CarouselPage from "../components/CarouselPage";
import Prologue from "../components/Prologue";
import SubBrand from "../components/SubBrand";
import ThumbnailProject from "../components/ThumbnailProject";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <CarouselPage />
      <Prologue />
      <SubBrand />
      <ThumbnailProject />
      <Footer />
    </div>
  );
}

export default Home;
