import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Prologue from "./components/Prologue";
import SubBrand from "./components/SubBrand";
import ThumbnailProject from "./components/ThumbnailProject";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Prologue />
      <SubBrand />
      <ThumbnailProject />
      <Footer />
    </div>
  );
}

export default App;
