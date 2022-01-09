import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  userId: null,
  error: null,
  isAuthenticated: false,
  isLoading: false,
  idToken: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return updateObject(state, { isAuthenticated: false, isLoading: true });
    case actionType.AUTH_SUCCESS:
      return updateObject(state, {
        userId: action.userId,
        isAuthenticated: true,
        isLoading: false,
        idToken: action.idToken,
      });
    case actionType.AUTH_FAILED:
      return updateObject(state, {
        error: action.error,
        isAuthenticated: false,
        isLoading: false,
      });
    case actionType.AUTH_LOGOUT:
      return updateObject(state, {
        userId: null,
        idToken: null,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};

export default authReducer;
