import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      {/* <h1>ADVENTURE AWAITS</h1> */}
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          BOOK NOW
        </Button>
        <Link to="services">
          <button
            className="see"
            
            to="/services"
          >
            SEE EXAMPLES <i className="far fa-play-circle" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
