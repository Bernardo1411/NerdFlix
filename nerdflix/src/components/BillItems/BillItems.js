import React from "react";

import "./BillItems.css";

const BillItems = (props) => {
  const boughtItems =
    props.boughtItems && props.boughtItems.length > 0 && props.boughtItems;

  return (
    <ul className="billigItems_lu">
      {boughtItems
        ? boughtItems.map((boughtItem) => {
            return (
              <li className="billigItem_li" key={boughtItem[0]}>
                <p>{boughtItem[1].title}:</p>
                <p>
                  {boughtItem[1].price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </li>
            );
          })
        : null}
      <div className="basket_div">
        <p>Total: </p>
        <p>
          {boughtItems
            ? boughtItems
                .reduce((previousValue, currentValue) => {
                  return previousValue + currentValue[1].price;
                }, 0)
                .toLocaleString("en-US", { style: "currency", currency: "USD" })
            : "$0.00"}
        </p>
      </div>
    </ul>
  );
};

export default BillItems;
