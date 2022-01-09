import React from "react";

import Logo from "../UI/Logo/Logo";

import "./BestSellers.css";

const bestSellers = (props) => {
  return (
    <div className="main_div-bestSeller">
      <div className="image_div-bestseller"></div>
      <div className="cover_div-bestSeller">
        <div className="text_div-bestSeller">
          <Logo />
          <h2>The best movies on the internet</h2>
          <p>
            Here you can find your favourite movie, with the price that fits in
            your pocket!
          </p>
          <a href="#all_movies">Click here to see more.</a>
        </div>
      </div>
    </div>
  );
};

export default bestSellers;
