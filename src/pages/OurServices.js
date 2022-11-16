import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarouselBTS from "../components/CarouselBTS";
import ListServices from "../components/ListServices";

function OurServices() {
  return (
    <div>
      <Navbar />
      <CarouselBTS />
      <ListServices />
      <Footer />
    </div>
  );
}

export default OurServices;
