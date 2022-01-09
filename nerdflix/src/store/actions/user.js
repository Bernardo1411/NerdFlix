import axios from "../../axios";

import * as actionType from "./actionTypes";

export const userSuccess = (userData) => {
  return {
    type: actionType.USER_SUCCESS,
    userData,
  };
};

export const userFailed = (error) => {
  return {
    type: actionType.USER_FAILED,
    error,
  };
};

export const user = (email, name, location, userId, token) => {
  const userData = {
    email,
    name,
    location,
  };

  return (dispatch) => {
    axios
      .post(`/users/${userId}/userData.json?auth=` + token, userData)
      .then((res) => {
        dispatch(userSuccess(userData));
      })
      .catch((error) => {
        dispatch(userFailed(error));
      });
  };
};

export const fetchUserStart = () => {
  return {
    type: actionType.FETCH_USER_START,
  };
};

export const fetchUserSuccess = (userData) => {
  return {
    type: actionType.FETCH_USER_SUCCESS,
    userData,
  };
};

export const fetchUserFailed = (error) => {
  return {
    type: actionType.FETCH_USER_FAILED,
    error,
  };
};

export const fetchUser = (userId, idToken) => {
  return (dispatch) => {
    dispatch(fetchUserStart());
    axios
      .get(`/users/${userId}/userData.json?auth=` + idToken)
      .then((res) => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error));
      });
  };
};

// Functionality not implemented yet
export const userRemovalData = (userId, token) => {
  return (dispatch) => {
    axios
      .delete(`/users/${userId}/order.json?auth=` + token)
      .then((res) => {
        dispatch(userSuccess({}));
      })
      .catch((error) => {
        dispatch(userFailed(error));
      });
  };
};
