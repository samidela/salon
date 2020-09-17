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
          Services Below! (Click to BOOK)
        </Button>
      </div>
      <Cards />
      <Footer />
    </>
  );
}
