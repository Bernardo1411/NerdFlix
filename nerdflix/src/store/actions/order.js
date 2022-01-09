import axios from "../../axios";

import * as actionType from "./actionTypes";

export const orderStart = () => {
  return {
    type: actionType.ORDER_START,
  };
};

export const orderSuccess = (movieData) => {
  return {
    type: actionType.ORDER_SUCCESS,
    movieData,
  };
};

export const orderFailed = (error) => {
  return {
    type: actionType.ORDER_FAILED,
    error,
  };
};

export const removeOrderSuccess = () => {
  return {
    type: actionType.REMOVE_ORDER_SUCCESS,
  };
};

export const removeOrderFail = () => {
  return {
    type: actionType.REMOVE_ORDER_FAIL,
  };
};

export const removeOrder = (userId, orderId, idToken) => {
  return (dispatch) => {
    axios
      .delete(`/users/${userId}/order/${orderId}.json?auth=` + idToken)
      .then((res) => {
        dispatch(fetchOrder(userId, idToken));
      })
      .catch((err) => {
        dispatch(removeOrderFail);
      });
  };
};

export const order = (movie, userId, token) => {
  const movieData = {
    runningTime: movie.runningTime,
    IMDb: movie.IMDb,
    title: movie.title,
    buyers: movie.buyers,
    image: movie.image,
    price: movie.price,
    userId: userId,
  };

  return (dispatch) => {
    dispatch(orderStart());
    axios
      .post(`/users/${userId}/order.json?auth=` + token, movieData)
      .then((res) => {
        dispatch(orderSuccess(movieData));
      })
      .catch((error) => {
        dispatch(orderFailed(error));
      });
  };
};

export const fetchOrderStart = () => {
  return {
    type: actionType.FETCH_ORDER_START,
  };
};

export const fetchOrderSuccess = (moviesOrders) => {
  return {
    type: actionType.FETCH_ORDER_SUCCESS,
    moviesOrders,
  };
};

export const fetchOrderFailed = (error) => {
  return {
    type: actionType.FETCH_ORDER_FAILED,
    error,
  };
};

export const fetchOrder = (userId, idToken) => {
  return (dispatch) => {
    dispatch(fetchOrderStart());
    axios
      .get(`/users/${userId}/order.json?auth=` + idToken)
      .then((res) => {
        dispatch(fetchOrderSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchOrderFailed(error));
      });
  };
};

export const orderCompleted = (userId, token) => {
  return (dispatch) => {
    dispatch(orderStart());
    axios
      .delete(`/users/${userId}/order.json?auth=` + token)
      .then((res) => {
        dispatch(orderSuccess({}));
      })
      .catch((error) => {
        dispatch(orderFailed(error));
      });
  };
};
