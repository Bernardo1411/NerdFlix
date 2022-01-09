import React, { useReducer, useEffect } from "react";

import "./PurchaseCompleted.css";

const initialState = {
  time: 5,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { time: state.time + 1 };
    case DECREMENT:
      return { time: state.time - 1 };
    default:
      return state;
  }
};

const PurchaseCompleted = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: DECREMENT });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      props.history.replace("/");
    }, 3000);
  }, [props.history]);

  return (
    <main>
      <div className="basket_div-purchase">
        <h3>Purchase Completed!</h3>
        <p>You will be redirected in {state.time} seconds</p>
        <p>
          This is not a real purchase. Just giving the user some feedback after
          completing an order.
        </p>
      </div>
    </main>
  );
};

export default PurchaseCompleted;
