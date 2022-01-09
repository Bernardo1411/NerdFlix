import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../UI/Button/Button";
import "./Card.css";

const Card = (props) => {
  const {
    runningTime,
    IMDb,
    buyers,
    title,
    price,
    movieBuyer,
    showButton,
    image,
    cancel,
  } = props;

  const [showContent, setShowContent] = useState(false);

  const movieDataProvider = (e) => {
    e.preventDefault();
    movieBuyer({
      title,
      IMDb,
      runningTime,
      image,
      buyers,
      price,
    });
  };

  let button = showButton ? (
    <Button clicked={movieDataProvider} cancel={cancel}>
      {showButton}
    </Button>
  ) : null;

  return (
    <li
      className={`store-list_item ${showContent ? "item_showContent" : ""}`}
      onMouseLeave={() => setShowContent(false)}
      onClick={() => setShowContent((prevState) => !prevState)}
    >
      <div className={`item_div--img ${showContent ? "item_showContent" : ""}`}>
        <img
          src={require(`../../../assets/images/${image}`)}
          alt={title}
          className={`${showContent ? "item_showContent" : ""}`}
        />
        <div className="item_div--backdrop">
          <div>
            <p>+</p>
          </div>
          <div className="cover_div--card"></div>
        </div>
      </div>
      <div
        className={`item_div--content ${showContent ? "item_showContent" : ""}`}
      >
        <h4>{title}</h4>
        <p>Running Time: {runningTime} minutes</p>
        <p>IMDb: {IMDb}</p>
        <p>Buyers: {buyers}</p>
        <p>
          Price:{" "}
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <div className="item_div--button">{button}</div>
      </div>
    </li>
  );
};

Card.propTypes = {
  runningTime: PropTypes.number.isRequired,
  IMDb: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  buyers: PropTypes.number.isRequired,
};

export default Card;
