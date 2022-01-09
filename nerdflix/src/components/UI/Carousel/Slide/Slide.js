import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Slide.css";

class Slide extends Component {
  constructor() {
    super();

    this.timer = "";
  }

  state = {
    data: [
      {
        title: "Terminator",
        color: "red",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      },
      {
        title: "The Hangover",
        color: "yellow",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      },
      {
        title: "The Conjuring",
        color: "black",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      },
    ],
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.goToNextSlide();
    }, 10000);
  }

  componentDidUpdate() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      return this.props.goToNextSlide();
    }, 10000);
  }

  render() {
    const { activeIndex, prevSlide, opposite } = this.props;
    return (
      <div className="items">
        {this.state.data.map((movie, index) => {
          return (
            <div
              className={`${
                index === activeIndex
                  ? "currentSlide"
                  : index === prevSlide
                  ? "pastSlide"
                  : "slide"
              } ${opposite ? "opposite" : ""}`}
              key={index}
            >
              <div className={movie.color}>
                <div className="fallback">
                  <div className="slider-banner">
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                  </div>
                  <div className="fallback_div--signup">
                    <NavLink className="fallback_div--navlink" to={"/signup"}>
                      <p>Click here to</p>
                      <h2>SIGN UP NOW!</h2>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Slide;
