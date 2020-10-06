import React from "react";
import "../../App.css";
import Cards from "./../Cards";
import Footer from "./../Footer";
import { Button } from "./../Button";

export default function Services() {
  return (
    <>
      <div className="appointment ">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Services Listed Below! (Click to BOOK)
        </Button>
      </div>
      <Cards />
      <p className="container">
        We have multiples styles you can choose from. Let us know
      </p>
      <Footer />
    </>
  );
}
