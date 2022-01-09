import axios from "../../axios";

import * as actionType from "./actionTypes";

export const fetchInitMovies = (movies) => {
  return {
    type: actionType.INIT_MOVIES,
    payload: movies,
  };
};

export const fetchInitMoviesFailed = () => {
  return {
    type: actionType.INIT_MOVIES_FAILED,
  };
};

export const initMovies = () => {
  return (dispatch) => {
    axios
      .get("/moviesDatabase.json")
      .then((res) => {
        dispatch(fetchInitMovies(res.data));
      })
      .catch((error) => {
        dispatch(fetchInitMoviesFailed());
      });
  };
};
