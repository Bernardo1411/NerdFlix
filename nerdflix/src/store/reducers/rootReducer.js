import { combineReducers } from "redux";

import moviesReducer from "./movies";
import authReducer from "./auth";
import orderReducer from "./order";
import userReducer from "./user";

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducer,
  order: orderReducer,
  user: userReducer,
});

export default rootReducer;
