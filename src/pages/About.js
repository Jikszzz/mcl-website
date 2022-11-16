import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Description from "../components/Description";
import StaffPage from "../components/StaffPage";
import ClientsPage from "../components/ClientsPage";

function About() {
  return (
    <div>
      <Navbar />
      <Description />
      <StaffPage />
      <ClientsPage />
      <Footer />
    </div>
  );
}

export default About;
