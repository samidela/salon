import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <p style={{color: "blue"}} className="container">
        We are a small business ready to make a change one style at a time
      </p>
      <Footer />
    </>
  );
}

export default Home;
