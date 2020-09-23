import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Styles!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-b.jpg"
              text="This is a common style in the african countries where beauty is appreciated"
              label="Normal Braids"
              path="/services"
            />
            <CardItem
              src="images/img-g.jpg"
              text='This look stays "DO IT FOR THE CULTURE" '
              label="Traditional"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-c.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Box Braids"
              path="/services"
            />
            <CardItem
              src="images/img-e.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Wedding"
              path="/appointment"
            />
            <CardItem
              src="images/img-d.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Shikorina"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
