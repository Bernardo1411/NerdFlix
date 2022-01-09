import React from "react";

import ListOfMovies from "../ListOfMovies/ListOfMovies";
import "./Store.css";

const store = (props) => {
  const { movies, error } = props.movies;
  const { movieBuyer, showButton } = props;

  const listOfMovies = !error ? (
    <ListOfMovies
      movies={movies}
      movieBuyer={movieBuyer}
      showButton={showButton}
    />
  ) : (
    <p>{error}</p>
  );

  return (
    <div className="main_div-store" id="all_movies">
      <h2>Store</h2>
      {listOfMovies}
    </div>
  );
};

export default store;
