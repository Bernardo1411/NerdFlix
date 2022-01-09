import * as actionType from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  userData: {},
  error: null,
  isLoaded: true,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.USER_SUCCESS:
      return updateObject(state, {
        userData: state.userData.concat(action.userData),
        isLoaded: true,
      });
    case actionType.USER_FAILED:
      return updateObject(state, { error: action.error, isLoaded: true });
    case actionType.FETCH_USER_START:
      return updateObject(state, { isLoaded: false });
    case actionType.FETCH_USER_SUCCESS:
      return updateObject(state, { isLoaded: true, userData: action.userData });
    case actionType.FETCH_USER_FAILED:
      return updateObject(state, { error: action.error, isLoaded: true });
    default:
      return state;
  }
};

export default userReducer;
