import React from "react";
import "../../App.css";
import Footer from "./../Footer";
import { Button } from "./../Button";

export default function Appointment() {
  return (
    <>
      <div className="appointment ">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          BOOK your appointment Below!
        </Button>
      </div>
      <div>
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button buttonStyle="btn--outline">Subscribe</Button>
          <Footer />
        </form>
      </div>
    </>
  );
}
