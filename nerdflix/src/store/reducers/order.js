import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  movieData: {},
  error: null,
  isLoaded: true,
};

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ORDER_START:
      return updateObject(state, { isLoaded: false });
    case actionType.ORDER_SUCCESS:
      return updateObject(state, {
        movieData: state.movieData.concat(action.movieData),
        isLoaded: true,
      });
    case actionType.ORDER_FAILED:
      return updateObject(state, { error: action.error, isLoaded: true });
    case actionType.FETCH_ORDER_START:
      return updateObject(state, { isLoaded: false });
    case actionType.FETCH_ORDER_SUCCESS:
      return updateObject(state, {
        isLoaded: true,
        movieData: action.moviesOrders,
      });
    case actionType.FETCH_ORDER_FAILED:
      return updateObject(state, { error: action.error, isLoaded: true });
    default:
      return state;
  }
};

export default orderReducer;
